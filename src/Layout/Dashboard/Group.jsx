import { Box, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import Search from "../../Component/Search/Search";
import SearchIconWrapper from "../../Component/Search/SearchIconWrapper";
import { MagnifyingGlass, Plus } from "phosphor-react";
import StyledInputBase from "../../Component/Search/StyledInputBase";
import { Link } from "react-router-dom";
import { ChatElement } from "../../pages/Chat";
import { ChatList } from "../../Data";
import { useState } from "react";
import { CreateGroup } from "./CreateGroup";

export const Group = () => {
  const [opendailogue , setdailogue] = useState(false)
  const handleClosedailogue = () => {
    setdailogue(false)
  }
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#f2f2f2" : "#3b3b3b",
            width: 320,
            boxShadow: "0px 0px 2px rgba(0 , 0 , 0 , 0.25)",
          }}
        >
          <Stack p={3} spacing={2}>
            <Stack>
              <Typography variant="h5">Group</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search...." />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography component={Link}>
                Create New Group
              </Typography>
              <IconButton onClick = {() => {setdailogue(true)}}>
                <Plus
                  style={{ color: (theme) => theme.palette.primary.main }}
                />
              </IconButton>
            </Stack>
            <Divider />
            <Paper
              style={{ maxHeight: 600, overflow: "auto", padding: "12px" }}
            >
              <Stack spacing={2} direction={"column"}>
                <Stack spacing={2.4}>
                  <Typography  sx={{ color: "#676767" }} varient="subtitled2">
                    Pinned
                  </Typography>
                  {ChatList.filter((el) => el.pinned).map((ele) => {
                    return <ChatElement key={ele.id} {...ele} />;
                  })}
                </Stack>
                <Stack spacing={2.4}>
                  <Typography  sx={{ color: "#676767" }} varient="subtitled2">
                    All Group
                  </Typography>
                  {ChatList.filter((el) => !el.pinned).map((ele) => {
                    return <ChatElement key={ele.id} {...ele} />;
                  })}
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Stack>
      {opendailogue && <CreateGroup open = {opendailogue} close = {handleClosedailogue }/>}
    </>
  );
};
