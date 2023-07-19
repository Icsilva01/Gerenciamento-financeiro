import { Box, Icon, Typography } from "@mui/material";

export interface TypographyDefaultProps {
    text: string;
    fontSize: number;
    color: string;
    icon?: React.ReactNode;
    fontWeight: number;
}
export const TypographyDefault = ({ text, fontSize, color, icon, fontWeight }: TypographyDefaultProps) => {
    return (
        <>
        <Box
            display="flex"
            alignItems="center"
            gap={1}
        >
            {icon && <Icon sx={{color:"#339CFF"}}>{icon}</Icon>}
            <Typography fontSize={fontSize} color={color} fontWeight={fontWeight}>
                {text}
            </Typography>
        </Box>
        </>
    );
};