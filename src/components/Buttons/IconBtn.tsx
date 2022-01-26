import { Button } from '@mui/material';


interface IconBtnProps {
    children?: React.ReactNode;
    icon: JSX.Element;
    styles: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconBtn = ({ children, icon, styles, onClick, ...otherProps }: IconBtnProps) => {

    return <Button
        onClick={onClick && onClick}
        endIcon={icon}
        variant="contained"
        sx={styles}
    >
        {children}
    </Button>;
};



export default IconBtn;
