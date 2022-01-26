import { useState } from "react";
import { Box, Typography, Stack } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import CNavbar from "../components/CNavbar";
import { colors } from "../global/colors";
import { DocWriteIcon, PersonIcon, ShareIcon, TiltedArrowIcon } from '../global/images';
import IconBtn from '../components/Buttons/IconBtn';
import Cbadge from "../components/Cbadge";
import Activity from "../components/Activity";

const TabGroup = {
  details: 'details',
  activities: 'activities'
}

const DocPage = () => {

  const [selectedTab, setSelectedTab] = useState(TabGroup.details);

  return (
    <PageStyled>
      <CNavbar />
      <Box sx={{
        width: "100vw",
        height: 50,
        backgroundColor: colors.purpleShade,
      }}></Box>


      <Stack padding={2} mb={1}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Box sx={{ backgroundColor: colors.darkPurpleShade, borderRadius: 1, display: 'flex', marginTop: "-40px" }} justifyContent={"center"} alignItems={"center"} width={65} height={65}>
            <DocWriteIcon />
          </Box>

          <Stack direction={"row"} alignItems={"center"}><ShareIcon /><Typography className="blueText" sx={{ marginLeft: "6px" }}>Share</Typography></Stack>
        </Stack>

        <Typography className="title" mt={2}>Docu sign</Typography>

        <Typography className="subtitle" mt={1}>sign smart contracts seamlesslys</Typography>
        <Typography className="blueText" mt={2}>Utilities</Typography>

        <Stack direction={"row"} alignItems={"center"} spacing={2} mt={3}>
          <IconBtn icon={<TiltedArrowIcon />} styles={{ backgroundColor: "#414047 !important", borderRadius: "10px", padding: "8px 25px 8px 20px", color: "#fff" }}>Open</IconBtn>

          <Stack direction={"row"} alignItems={"center"}><PersonIcon /> <Typography ml={1}>24&#806;000&#43; users</Typography>
          </Stack>
        </Stack>
      </Stack>

      <ButtonGroup aria-label="outlined button group" fullWidth className="tab-group">
        <Button onClick={() => setSelectedTab(TabGroup.details)}>Details</Button>
        <Button onClick={() => setSelectedTab(TabGroup.activities)}>Activities</Button>
      </ButtonGroup>


      {selectedTab === TabGroup.details ? <Details />
        : selectedTab === TabGroup.activities ? <Activities />
          : null}


    </PageStyled>
  );
};

const Details = () => {
  return (
    <Stack>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="title">Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.
          </Typography>
          <Stack direction={"row"} alignItems={"center"} mt={2}>
            <LanguageIcon className="blueText" />
            <Typography className="blueText" ml={1}>
              <a href="https://docusignn.io" target="_blank">https://docusignn.io</a>
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}

const Activities = () => {
  return (
    <Stack mt={2}>
      <Cbadge content={"12 activity found"} />
      {Array(5).fill(10).map(item => <Stack spacing={1}>
        <Activity />
      </Stack>)}
    </Stack>
  )
}

const PageStyled = styled.div`
  .blueText{
    color: ${colors.bluecolor};
    > a {
      text-decoration: none;
      color: ${colors.bluecolor};
    }
  }

  .title{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: ${colors.black};
  }
  .subtitle{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.black};
  }
  .tab-group{
    > button{
      text-transform: capitalize;
      color: #6F6E73;
      border: 0;
      font-weight: 600;
      font-size: 15px;
      &:hover{
      border: 0;
      color: ${colors.black};
    }
    &:focus{
      border-bottom: 2px solid ${colors.black};
      color:  ${colors.black}
      
    }
    }
    border: 0;
    border-bottom: 1px solid #DFDFE0;
  }
`


export default DocPage;
