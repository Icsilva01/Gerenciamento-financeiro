import { Box } from "@mui/material";
import { ReactNode } from "react";

interface MasterLayoutProps {
    children: ReactNode;
}

export const MasterLayout = ({ children }: MasterLayoutProps) => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    bgcolor="#E7EBEF"
                    height="90vh"
                    width="90%"
                    borderRadius={8}
                    padding={2}
                    boxShadow={1}
                >
                    {children}

                </Box>
            </Box>
        </>
    );
};
