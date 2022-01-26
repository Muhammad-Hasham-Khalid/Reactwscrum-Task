import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import IdentIcon from './IdentIcon';

const Activity = () => {
    return (
        <ActivityStyled>
            <Stack direction={"row"} spacing={2} padding={2}>
                <IdentIcon styles={{ width: "40px", height: "35px" }} address={"0xBAc675C310721717Cd4A37F6cbeA1F081b1C2a07"} />
                <Stack>
                    <Typography><span style={{ color: "#885FFF" }}>johndoe.near</span> signed the contract successfully</Typography>
                    <Typography className="day-subtitle">2 days ago</Typography>
                </Stack>
            </Stack>
        </ActivityStyled>
    )
};

const ActivityStyled = styled.div`

.day-subtitle{
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #6F6E73;
}

`

export default Activity;
