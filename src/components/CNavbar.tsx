import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { BackIcon, HomeIcon, NotificationIcon, SettingsIcon } from '../global/images';
import { colors } from "../global/colors";
import CSelect from './CSelect';

const CNavbar = () => {
  return (
    <CNavbarStyled>
      <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"} spacing={2}>
        <Stack direction={"row"} justifyContent={"space-around"} spacing={2}>
          <BackIcon />
          <HomeIcon />
        </Stack>
        <CSelect rounded={true} />
        <Stack direction={"row"} justifyContent={"space-around"} spacing={2}>
          <NotificationIcon />
          <SettingsIcon />
        </Stack>
      </Stack>
    </CNavbarStyled >
  );
};

const CNavbarStyled = styled.div`
  background-color: ${colors.grayColor};
  height: 8vh;
  padding: 15px 10px 0px 10px;
`;

export default CNavbar;
