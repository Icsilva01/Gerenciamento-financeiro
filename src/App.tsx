import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { ButtonDefault } from "./components/General/ButtonDefault";
import {
  ModalDefault,
  TransactionData,
} from "./components/General/ModalDefault";
import { TypographyDefault } from "./components/General/TypographyDefault";
import { Header } from "./components/Header";
import { MasterLayout } from "./components/MasterLayout";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "./components/Table";
import { Box } from "@mui/material";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionList, setTransactionList] = useState<TransactionData[]>([]);

  const handleAdd = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    console.log(transactionList);
  }, [transactionList]);

  const handleSaveTransaction = (transactionData: TransactionData) => {
    setTransactionList([...transactionList, transactionData]);
  };

  const isTransactionListEmpty = transactionList.length === 0;

  return (
    <>
      <Header />
      <MasterLayout>
        <TypographyDefault
          text="Área administrativa"
          fontSize={20}
          color="#339CFF"
          fontWeight={700}
        />

        <ButtonDefault
          text="Cadastrar transação"
          size="medium"
          icon={<AddIcon />}
          onClick={handleAdd}
        />
        {isTransactionListEmpty ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <h1>Nenhuma transação encontrada</h1>
          </Box>
        ) : (
          <Table transactionList={transactionList} />
        )}

        <ModalDefault
          open={modalOpen}
          onClose={handleClose}
          onSave={handleSaveTransaction}
        />
      </MasterLayout>
      <Footer />
    </>
  );
}

export default App;
