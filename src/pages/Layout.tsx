import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

interface Props {}

const Layout: FC<Props> = ({}: Props) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
