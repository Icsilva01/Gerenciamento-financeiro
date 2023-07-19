import { Box, Button, ButtonProps } from "@mui/material";

export interface ButtonDefaultProps extends Omit<ButtonProps, "size"> {
    text: string;
    size: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    onClick: () => void;
}

export const ButtonDefault = (props: ButtonDefaultProps) => {
    const { onClick, text, size, ...rest } = props;

    let buttonProps: ButtonProps = {
        variant: "contained",
        color: "primary",
        startIcon: props.icon,
        sx: {
            backgroundColor: '#0B3B60',
            color: '#FFFFFF',
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px',
            '&:hover': {
                backgroundColor: '#0B3B60',
                opacity: 0.8,
            },
        }
    };

    if (size === "small") {
        buttonProps = {
            ...buttonProps,
            size: "small",
            sx: {
                ...buttonProps.sx,
                fontSize: '14px',
                paddingX: '10px',
                paddingY: '5px',
            }
        };
    } else if (size === "large") {
        buttonProps = {
            ...buttonProps,
            size: "large",
            sx: {
                ...buttonProps.sx,
                fontSize: '18px',
                borderRadius: '15px',
                paddingX: '50px',
                paddingY: '5px',
            }
        };
    }

    return (
        <Box paddingTop={2}>
        <Button {...buttonProps} {...rest} onClick={onClick}>
            {text}
        </Button>
        </Box>
    );
};
