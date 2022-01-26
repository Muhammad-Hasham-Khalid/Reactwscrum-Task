import { useState } from "react";
import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import { colors } from '../../global/colors';
import { HomePageIcon } from '../../global/images';
import IconBtn from "../../components/Buttons/IconBtn";
import type { FlowProps } from "./types";

const SignupGroup = {
    email: "email",
    phone: "phone",
}

const Flow1 = ({ setScreen }: FlowProps) => {
    const [selectedTab, setSelectedTab] = useState(SignupGroup.email);
    const [text, setText] = useState("");
    return (
        <Flow1Styled>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                <HomePageIcon />
                <Typography className="title"><span className="purpleTitle">Home</span>Page</Typography>
            </Stack>

            <Stack alignItems={"center"} justifyContent={"center"} mt={4}>
                <Stack mb={3} direction={"row"} aria-label="outlined button group" className="tab-group">
                    <Button onClick={() => setSelectedTab(SignupGroup.email)}>Email</Button>
                    <Button onClick={() => setSelectedTab(SignupGroup.phone)}>Phone</Button>
                </Stack>
                <FormControl sx={{ width: '40ch', borderRadius: "10px" }}>
                    <OutlinedInput placeholder="Please enter text" onChange={(e) => setText(e.target.value)} />
                </FormControl>

                <Stack mt={3}>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ borderRadius: "10px" }} disabled={text.length === 0}>
                        Continue
                    </Button>
                </Stack>
            </Stack>

            <Stack sx={{ margin: "40px auto", textAlign: "center" }} width="75%">
                <Typography className="terms">by clicking continue you must agree to near labs <span>Terms &amp; Conditions</span> and <span>Privacy Policy</span></Typography>
            </Stack>

            <Divider light />

            <Stack sx={{ margin: "40px auto", textAlign: "center" }} alignItems={"center"} justifyContent={"center"}>
                <Typography mb={2}>Already have NEAR account?</Typography>
                <IconBtn icon={<ArrowForwardIosIcon />} styles={{ backgroundColor: "#414047 !important", borderRadius: "10px", padding: "10px", color: "#fff", width: "50%" }} onClick={() => setScreen(1)}> Log in with NEAR</IconBtn>
            </Stack>

        </Flow1Styled >
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
  .tab-group{
    > button{
      text-transform: capitalize;
      color: #BEBEC2;
      border: 0;
      font-weight: 600;
      font-size: 15px;
      border-radius: 10px;
      padding: 2px 15px;
      
      &:hover{
      border: 0;
      color: ${colors.black};
    }
    &:focus{
      border: 2px solid #BEBEC2;
      color:  #a8a8a8;
    }
    }
    border: 0;
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


export default Flow1;
