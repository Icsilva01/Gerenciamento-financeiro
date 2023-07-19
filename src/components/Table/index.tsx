import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TransactionData } from "../General/ModalDefault";

type Props = {
  transactionList: TransactionData[];
};

export const Table: React.FC<Props> = ({ transactionList }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formatBRLDate = (dateString: any) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const isTransactionListEmpty = transactionList.length === 0;

  return (
    <Box paddingTop={2} maxHeight={200}>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 5, overflow: "hidden", boxShadow: 8 }}
      >
        <table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ color: "#0B3B60", fontWeight: 700, fontSize: 17 }}
              >
                Tipo
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#0B3B60", fontWeight: 700, fontSize: 17 }}
              >
                Valor
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#0B3B60", fontWeight: 700, fontSize: 17 }}
              >
                Descrição
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#0B3B60", fontWeight: 700, fontSize: 17 }}
              >
                Data
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#0B3B60", fontWeight: 700, fontSize: 17 }}
              >
                Observação
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList.map((row, index) => (
              <TableRow
                key={row.date}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 === 1 ? "#22234S" : "#E7EBEF",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: "#6B6E71", fontWeight: 400, fontSize: 16 }}
                >
                  {row.type === "0" ? "Despesa" : "Receita"}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#6B6E71", fontWeight: 400, fontSize: 16 }}
                >
                  {formatter.format(Number(row.value))}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#6B6E71", fontWeight: 400, fontSize: 16 }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#6B6E71", fontWeight: 400, fontSize: 16 }}
                >
                  {formatBRLDate(row.date)}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "#6B6E71", fontWeight: 400, fontSize: 16 }}
                >
                  {row.observation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </table>
      </TableContainer>
    </Box>
  );
};
