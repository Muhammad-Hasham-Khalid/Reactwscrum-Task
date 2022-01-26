import { Box } from '@mui/material';
import { Jazzicon } from "@ukstv/jazzicon-react";

interface IdentIconProp {
    styles: React.CSSProperties,
    address: string
}

const IdentIcon = ({ styles, address }: IdentIconProp) => {
    return (
        <Box sx={styles}>
            <Jazzicon address={address} />
        </Box>
    )
};


export default IdentIcon;
