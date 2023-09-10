import { useTheme } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import React, { useState } from "react";
import Search from "../Component/Search/Search";
import SearchIconWrapper from "../Component/Search/SearchIconWrapper";
import StyledInputBase from "../Component/Search/StyledInputBase";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";
import { ChatList } from "../Data";
import { Friend } from "./main/Friends";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export const ChatElement = ({ id, img, name, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      alignContent={"center"}
      p={2}
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#f2f2f2" : "#505251",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography varient="subtitle2">{name}</Typography>
            <Typography varient="caption">{msg}</Typography>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography sx={{ fontWeight: 600 }} varient="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={2}></Badge>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export const Chat = () => {
  const theme = useTheme();
  const [opendailogue, setdailogue] = useState(false);
  const closeHandler = () => {
    setdailogue(false);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          width: 320,
          boxShadow: "0px 0px 2px rgba(0 ,0, 0, 0.25)",
        }}
      >
        <Stack p={3} spacing={3}>
          <Stack
            direction="row"
            alignitems="center"
            justifyContent="space-between"
          >
            <Typography>Chats</Typography>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <IconButton
                onClick={() => {
                  setdailogue(true);
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search...." />
              </Search>
            </Stack>
          </Stack>
        </Stack>
        <Stack marginLeft={2} marginRight={2} spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox sixe={24}></ArchiveBox>
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Paper style={{ maxHeight: 600, overflow: "auto", padding: "12px" }}>
            <Stack spacing={2} direction={"column"}>
              <Stack spacing={2.4}>
                <Typography sx={{ color: "#676767" }} varient="subtitled2">
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((ele) => {
                  return <ChatElement key={ele.id} {...ele} />;
                })}
              </Stack>
              <Stack spacing={2.4}>
                <Typography sx={{ color: "#676767" }} varient="subtitled2">
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((ele) => {
                  return <ChatElement key={ele.id} {...ele} />;
                })}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
      {opendailogue && <Friend open={opendailogue} close={closeHandler} />}
    </>
  );
};
