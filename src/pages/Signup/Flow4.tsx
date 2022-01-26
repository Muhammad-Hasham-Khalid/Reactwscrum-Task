import { useState } from "react";
import styled from '@emotion/styled';
import { Stack, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import { colors } from '../../global/colors';
import InfoIcon from '@mui/icons-material/Info';
import type { FlowProps } from "./types";

const Flow4 = ({ setScreen }: FlowProps) => {

    return (
        <Flow1Styled>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <Typography className="title">Secure your account</Typography>
            </Stack>

            <Stack alignItems={"center"} justifyContent={"center"} mt={4}>
                <Typography width="90%" sx={{ color: "#808080" }}>
                    Keep your apps safe from other with access to your computer.
                </Typography>

                <Stack mt={3}>
                    <FormControl sx={{ width: '40ch', borderRadius: "10px" }}>
                        <Typography>Password</Typography>
                        <OutlinedInput type="password" placeholder="Ex. John doe" />
                    </FormControl>
                </Stack>

                <Stack mt={2}>
                    <FormControl sx={{ width: '40ch', borderRadius: "10px" }}>
                        <Typography>Confirm Password</Typography>
                        <OutlinedInput type="password" placeholder="yourname" />
                    </FormControl>
                </Stack>

                <Stack mt={5}>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: "10px" }} onClick={() => setScreen(0)}>
                        Continue
                    </Button>
                </Stack>

            </Stack>

            <Stack mt={3} sx={{ margin: "10px auto", textAlign: "center" }} width="75%">
                <Typography mb={2}>claudio@metapool.app</Typography>
            </Stack>

            <Stack sx={{ margin: "10px auto", textAlign: "center" }} width="75%">
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


export default Flow4;
