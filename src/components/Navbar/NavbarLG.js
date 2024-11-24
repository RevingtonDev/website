import { Link, useLocation } from "react-router-dom";
import { router, routes } from "../../router";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  Box,
} from "@mui/material";

const NavbarLG = () => {
  const location = useLocation();

  console.log(location);

  return (
    <AppBar position="static">
      <Toolbar sx={{ py: 3 }}>
        <img src="./logo500.png" height={50} />
        <Typography ml={1} fontSize="21px">
          Revington Developments
        </Typography>
        <Box mx={3} className={"nav-link-container"}>
          {routes.map(
            ({ nav, path }) =>
              nav && (
                <Link
                  className={`nav-link ${
                    location?.pathname === path && "active"
                  }`}
                  to={path}
                >
                  {nav}
                </Link>
              )
          )}
        </Box>
        <Box ml={"auto"}>
          <Button variant="contained">Contact US</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLG;
