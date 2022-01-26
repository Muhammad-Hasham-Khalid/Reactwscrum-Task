import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '../../global/colors';
import { HomePageIcon } from '../../global/images';
import ReactInputVerificationCode from "react-input-verification-code";
import type { FlowProps } from "./types";

const Flow2 = ({ setScreen }: FlowProps) => {
    return (
        <Flow1Styled>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <HomePageIcon />
                <Typography className="title"><span className="purpleTitle">Home</span>Page</Typography>
            </Stack>

            <Stack alignItems={"center"} justifyContent={"center"} mt={4} >
                <Typography width="75%" textAlign="center">
                    We've sent a 6-digit verification code to the email address
                </Typography>

                <Typography className="blueText" mt={1}>johndoe@gmail.com</Typography>

                <Typography mt={3} mb={3} sx={{ color: "#808080" }}>Enter verification code</Typography>

                <Stack mb={3} className="verification"><ReactInputVerificationCode length={6} /></Stack>

                <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: "10px" }} onClick={() => setScreen(2)}>
                    Continue
                </Button>
            </Stack>

            <Stack mt={3}>
                <Divider light />
            </Stack>

            <Stack mt={3} sx={{ margin: "40px auto", textAlign: "center" }} width="75%">
                <Typography mb={2}>Didn't receive your code?</Typography>
                <Typography className="blueText" mt={2}>Send to a different email address</Typography>
                <Typography className="blueText" mt={2}>Resend your code</Typography>
            </Stack>
        </Flow1Styled>
    )
}


const Flow1Styled = styled.div`
  background-color: ${colors.grayColor};
  height: 5vh;
  padding: 15px 10px 0px 10px;
  border: 1px solid #DFDFE0;
  .title{
      font-weight: 600;
      font-size: 18px;
      margin-left: 8px;
  }
  .purpleTitle{
      color:#B072FF;
  }
  .blueText{
    color: ${colors.bluecolor};
  }
  
 
`;


export default Flow2;
