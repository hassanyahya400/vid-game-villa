import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

interface Props {}

const Layout: FC<Props> = ({}: Props) => {
  
  return (
    <Box position="relative">
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
