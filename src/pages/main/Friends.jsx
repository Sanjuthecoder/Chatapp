import { useTheme } from "@emotion/react";
import {
  Dialog,
  DialogContent,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";


const ChatList = () => {
    
}

export const Friend = ({ open, close }) => {
  const theme = useTheme();
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      keepMounted
      open={open}
      onClose={close}
      aria-labelledby="responsive-dialog-title"
    >
      <Stack
        p = {2}
        sx = {{width : '100%'}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          centered
        >
          <Tab value="one"  label="Explore" />
          <Tab value="two" label="Friends" />
          <Tab value="three" label="Requests" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack sx = {{height : '100%'}}>
            {(() => {
                switch(value){
                    case 0:

                        break;
                    case 1 :
                        break
                    case 2:
                        break
                }
            })()}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
