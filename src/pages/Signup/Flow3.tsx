import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import { colors } from '../../global/colors';
import InfoIcon from '@mui/icons-material/Info';
import type { FlowProps } from "./types";

const Flow3 = ({ setScreen }: FlowProps) => {

    return (
        <Flow1Styled>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <Typography className="title">Create NEAR account</Typography>
            </Stack>

            <Stack alignItems={"center"} justifyContent={"center"} mt={4}>
                <Typography width="90%" sx={{ color: "#808080" }}>
                    Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
                </Typography>

                <Stack mt={3}>
                    <FormControl sx={{ width: '40ch', borderRadius: "10px" }}>
                        <Typography>Full Name</Typography>
                        <OutlinedInput placeholder="Ex. John doe" />
                    </FormControl>
                </Stack>

                <Stack mt={2}>
                    <FormControl sx={{ width: '40ch', borderRadius: "10px" }}>
                        <Typography>Account ID <InfoIcon /></Typography>
                        <OutlinedInput placeholder="yourname" />
                    </FormControl>
                </Stack>

                <Stack mt={5}>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: "10px" }} onClick={() => setScreen(3)}>
                        Continue
                    </Button>
                </Stack>

            </Stack>

            <Stack mt={3}>
                <Divider light />
            </Stack>

            <Stack mt={3} sx={{ margin: "40px auto", textAlign: "center" }} width="75%">
                <Typography mb={2}>Didn't receive your code?</Typography>

                <Typography className="blueText" mt={2}>Send to a different email address</Typography>

                <Typography className="blueText" mt={2}>Resend your code</Typography>
            </Stack>

            <Stack sx={{ margin: "40px auto", textAlign: "center" }} width="75%">
                <Typography className="terms">by clicking continue you must agree to near labs <span>Terms of Service</span> and <span>Privacy Policy</span></Typography>
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
  .terms{
    color: #6F6E73;
    justify-content: "center";
    font-size: 12px;
      > span{
          color: ${colors.bluecolor};
      }
  }
 
`;


export default Flow3;
