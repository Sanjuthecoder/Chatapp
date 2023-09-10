import React from "react";
import { useState } from "react";
import ChatContext from "./char-context";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ChatProvider = (props) => {
  const [mode, setMode] = useState("light");
  const ColorModeHandler =
    React.useMemo(
      () => ({
        ToggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      []
    )
  const colorMode = ColorModeHandler;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ChatContext.Provider value={colorMode}>
      <ThemeProvider theme ={theme}>{props.children}</ThemeProvider>
    </ChatContext.Provider>
  );
};

export default ChatProvider;
