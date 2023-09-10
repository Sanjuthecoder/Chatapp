import { useTheme } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box, Stack } from "@mui/material";
import { Message } from "./Message";
export const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        <Header />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor:
            theme.palette.mode === "light" ? "#e3e3e3" : '#262626',
          height : '100%',
          overflowY:'scroll'
        }}
      >
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};
