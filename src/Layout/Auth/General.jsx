import { Box, Stack } from "@mui/material";
import { Chat } from "../../pages/Chat";
import { Conversation } from "../../Component/Conversation";
import { useTheme } from "@emotion/react";
export const General = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat></Chat>
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 410px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};
