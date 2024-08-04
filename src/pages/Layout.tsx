import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

interface Props {}

const Layout: FC<Props> = ({}: Props) => {
  return (
    <Box position="relative">
      <NavBar />
      <Box paddingX="5" paddingY="20">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
