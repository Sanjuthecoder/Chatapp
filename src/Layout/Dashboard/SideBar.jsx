import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { useTheme, styled } from "@mui/material";
import { Stack } from "@mui/material";
import { Nav_Buttons, Profile_Menu } from "../../Data";
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useContext } from "react";
import ChatContext from "../../store/char-context";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
export const SideBar = () => {
  const theme = useTheme();
  const [selected, setselected] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { ToggleColorMode } = useContext(ChatContext);
  return (
    <Box
      p={"5px"}
      sx={{
        width: 100,
        height: "100vh",
        backgroundColor: theme.palette.mode === 'dark' ? "#000" : '#f2f2f2',
        boxShadow: "4px 4px #FFFAF4",
      }}
    >
      <Stack
        spacing={3}
        mt={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ height: "95%" }}
      >
        <Stack alignItems={"center"} spacing={3}>
          <Avatar
            src={faker.image.avatar()}
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
            <Stack spacing={1} px={2} >
              {Profile_Menu.map((ele) => {
                return (
                  <MenuItem key={ele.id} onClick={handleClose}>
                    <Stack spacing = {3} direction = 'row' alignItems={'center'} justifyContent={'space-between'}>
                      <span>{ele.title}</span>
                      {ele.icon}
                    </Stack>
                  </MenuItem>
                );
              })}
            </Stack>
          </Menu>
          <Stack spacing={3}>
            {Nav_Buttons.map((item) =>
              selected === item.index ? (
                <Box
                  key={item.index}
                  p={0.5}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    {item.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={(e) => {
                    setselected(item.index);
                  }}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                  }}
                  key={item.index}
                >
                  {item.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                p={0.5}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  width: "max-content",
                  color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
                onClick={(e) => {
                  setselected(3);
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            onClick={() => {
              ToggleColorMode();
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
