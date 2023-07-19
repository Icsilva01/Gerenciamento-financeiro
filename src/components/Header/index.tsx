import { Box, Typography } from "@mui/material";
import financelogo from '../../../src/financelogo.svg';
import account_circle from './assets/account_circle.png';


export const Header = () => {
    return (
        <Box 
        display="flex"
        width="100%"
        height="10vh"
        alignItems="center"
        gap={2}
        paddingX={2}
        boxShadow={1}
        justifyContent="space-between"
        >
                <Box display="flex" alignItems="center" gap={2}>
                <img src={financelogo} alt=""  height={40} width={40}/>
                <Typography fontSize={24} color="#0B3B60" fontWeight={700}>
                    Gerenciamento financeiro
                </Typography>
                </Box>

                <Box display="flex" alignContent="center" alignItems="center" gap={4} paddingX={2}>
                    <img src={account_circle} alt="" />
                    {/* <Link to={''}> */}
                        <Typography fontSize={14} color="#0B3B60" fontWeight={700}>
                            Sair
                        </Typography>
                    {/* </Link> */}
                </Box>
        </Box>
    );
    };