import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import { Navbar } from "./Navbar";

const Layout = ({}) => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
