import { useTheme } from "@emotion/react";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { DotsThree, Download, Image } from "phosphor-react";
import { Link } from "react-router-dom";
import { Message_options } from "../../Data";
import { useState } from "react";
export const DocMessage = ({ ele }) => {
  const theme = useTheme();
  console.log(theme.palette.background.paper);
  return (
    <Stack direction="row" justifyContent={ele.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: ele.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={1}
            spacing={2}
            direction={"row"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <IconButton>
              <Image size="48" />
            </IconButton>
            <Typography varient="caption">abstract.png</Typography>
            <IconButton>
              <Download />
            </IconButton>
          </Stack>
          <Stack>
            <Typography
              varient="body2"
              sx={{ color: ele.incoming ? theme.palette.text : "#fff" }}
            ></Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOption />
    </Stack>
  );
};
export const LinkMessage = ({ ele }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={ele.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: ele.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"start"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={ele.preview}
              alt={ele.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            ></img>
            <Stack spacing={2}>
              <Typography varient="subtitle2">Creating Chatting App</Typography>
              <Typography
                varient="subtitle2"
                sx={{ color: theme.palette.primary.main }}
                component={Link}
                to="//https://www.youtube.com/watch?v=g4Z-kRkWnU0&t=2412s"
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              varient="body2"
              color={ele.incoming ? theme.palette.text : "#fff"}
            >
              {ele.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOption />
    </Stack>
  );
};
export const ReplyMessage = ({ ele }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={ele.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: ele.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={3}>
          <Stack
            p={2}
            direction={"column"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography varient="body2" color={theme.palette.text}>
              {ele.message}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          varient="body2"
          color={ele.incoming ? theme.palette.text : "#fff"}
        >
          {ele.reply}
        </Typography>
      </Box>
      <MessageOption />
    </Stack>
  );
};
export const MediaMessage = ({ ele }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={ele.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: ele.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack>
          <img
            src={ele.img}
            alt={ele.message}
            style={{ maxHeight: 210, borderRadius: "12px" }}
          ></img>
          <Typography
            varient="body2"
            color={ele.incoming ? theme.palette.text : "#fff"}
          >
            {ele.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOption />
    </Stack>
  );
};
export const TextMessage = ({ ele }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={ele.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: ele.incoming
            ? theme.palette.background.default
            : theme.palette.mode === "dark"
            ? "#2091f5"
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          varient="body2"
          color={ele.incoming ? theme.palette.text : "#fff"}
        >
          {ele.message}
        </Typography>
      </Box>
      <MessageOption />
    </Stack>
  );
};
export const Timeline = ({ ele }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Divider width="46%"></Divider>
      <Typography varient="caption" sx={{ color: theme.palette.text }}>
        {ele.text}
      </Typography>
      <Divider width="46%"></Divider>
    </Stack>
  );
};

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack>
      <DotsThree
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing = {1} px = {2}>
        {Message_options.map((ele) => {
          return <MenuItem key = {ele.id} onClick = {handleClose}>{ele.title}</MenuItem>;
        })}
        </Stack>
      </Menu>
    </Stack>
  );
};
