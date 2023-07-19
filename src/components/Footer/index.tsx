import { Box, Typography } from "@mui/material"
import Facebook from './assets/Facebook.png';
import Instagram from './assets/Instagram.png';
import Whatsapp from './assets/Whatsapp.png';
import Google from './assets/Google.png';

export const Footer = () => {

    return (
        <Box
            bgcolor={'#0B3B60'}
            height="12vh"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingTop={2}
                gap={1.5}
            >
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Whatsapp} alt="" />
                <img src={Google} alt="" />
            </Box>
            <Typography fontSize={16} color="#E7EBEF" textAlign="center" paddingY={2}>
                2023 © Desenvolvido por Icaro Silva | Projeto fictício sem fins comerciais.
            </Typography>
        </Box>
    )
}