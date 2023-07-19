import { Box, MenuItem, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ButtonDefault } from "./ButtonDefault";
import { useState } from "react";

export interface TransactionData {
    type: string;
    description: string;
    value: string;
    date: string;
    observation: string;
  }
  
  interface ModalDefaultProps {
    open: boolean;
    onClose: () => void;
    onSave: (transactionData: TransactionData) => void;
  }

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    heigth: 700,
    bgcolor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column' as 'column',
};

export const ModalDefault = (props: ModalDefaultProps) => {
    const { open, onClose, ...rest } = props;
    const [savedTransactionData, setSavedTransactionData] = useState<TransactionData>({
        type: '',
        description: '',
        value: '',
        date: '',
        observation: ''
      });
    

    const type = [
        {
            value: '0',
            label: 'Despesa   ',
        },
        {
            value: '1',
            label: 'Receita',
        },
    ];

    const handleSave = () => {
        props.onSave(savedTransactionData);
        setSavedTransactionData({
          type: '',
          description: '',
          value: '',
          date: '',
          observation: ''
        });
        props.onClose();
      };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            {...rest}
        >
            <Box sx={style}>
                <Box display="flex" justifyContent="space-between">
                    <Typography fontSize={20} fontWeight={700} color="#0B3B60">
                        Insira os dados da transação
                    </Typography>
                    <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
                </Box>
                <Box
                    component={"form"}
                    noValidate
                    autoComplete="off"
                >
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <Typography fontSize={16} fontWeight={700} color="#0B3B60">
                            Tipo de transação:
                        </Typography>
                        <TextField
                            id="outlined-select-currency"
                            select
                            sx={{ width: '50%' }}
                            value={savedTransactionData.type}
                            onChange={(e) => setSavedTransactionData({ ...savedTransactionData, type: e.target.value })}
                        >
                            {type.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <Typography fontSize={16} fontWeight={700} color="#0B3B60">
                            Descrição:
                        </Typography>
                        <TextField id="outlined-basic" sx={{ width: '50%' }} variant="outlined" value={savedTransactionData.description} 
                        onChange={(e) => setSavedTransactionData({ ...savedTransactionData, description: e.target.value })}/>
                    </Box>
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <Typography fontSize={16} fontWeight={700} color="#0B3B60">
                            Valor:
                        </Typography>
                        <TextField id="outlined-basic" sx={{ width: '50%' }} variant="outlined" value={savedTransactionData.value}
                        onChange={(e) => setSavedTransactionData({ ...savedTransactionData, value: e.target.value })}
                        />
                    </Box>
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <Typography fontSize={16} fontWeight={700} color="#0B3B60">
                            Data:
                        </Typography>
                        <TextField id="outlined-basic" sx={{ width: '50%' }} variant="outlined" type='date' value={savedTransactionData.date}
                        onChange={(e) => setSavedTransactionData({ ...savedTransactionData, date: e.target.value })}
                        />
                    </Box>
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <Typography fontSize={16} fontWeight={700} color="#0B3B60">
                            Observção:
                        </Typography>
                        <TextField id="outlined-basic" sx={{ width: '50%' }} variant="outlined" value={savedTransactionData.observation}
                        onChange={(e) => setSavedTransactionData({ ...savedTransactionData, observation: e.target.value })}
                        />
                    </Box>
                    <Box display="flex" paddingTop={2} alignItems="center" justifyContent="space-between">
                        <ButtonDefault text="Cadastrar transação" size="medium" onClick={handleSave} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};
