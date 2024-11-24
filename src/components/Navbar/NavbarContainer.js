import { Box, Container } from "@mui/material";
import NavbarLG from "./NavbarLG";

const NavbarContainer = () => {
  return (
    <Box component={"header"}>
      <Container maxWidth={"lg"} fluid>
        <NavbarLG />
      </Container>
    </Box>
  );
};

export default NavbarContainer;
