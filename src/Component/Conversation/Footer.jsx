import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlane,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useState } from "react";
const StyledInput = styled(TextField)(({ theme }) => ({
  "&.MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const Actions = [
  {
    id: 0,
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    id: 1,
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    id: 2,
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    id: 3,
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    id: 4,
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ onChange }) => {
  const [Link , setLink] = useState(false)
  return (
    <StyledInput
      fullWidth
      placeholder="write a message..."
      varient="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack sx={{ position: "relative" , display : Link ? 'inline' : 'none'}}>
              {Actions.map((ele) => {
                return (
                  <Tooltip key={ele.id} title={ele.title} placement="right">
                      <Fab
                        sx={{
                          position: "absolute",
                          top: -ele.y,
                          backgroundColor: ele.color,
                        }}
                      >
                        {ele.icon}
                      </Fab>
                  </Tooltip>
                );
              })}
            </Stack>
            <InputAdornment>
              <IconButton onClick = {() => {
                setLink((pre) => !pre)
              }}>
                <LinkSimple></LinkSimple>
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => onChange((pre) => !pre)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export const Footer = () => {
  const [emoji, setemoji] = useState(false);
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        height: 100,
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : "#505251",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: emoji ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker theme={theme} data={data} onEmojiSelect={console.log} />
          </Box>
          <ChatInput onChange={setemoji} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <PaperPlane color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
