import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
export const DashboardRoute = () => {
  return (
    <Stack direction={'row'}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};
