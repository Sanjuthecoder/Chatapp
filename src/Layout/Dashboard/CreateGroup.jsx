import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { User } from "phosphor-react";
import CustomizedHook from "../Form/AutoControlleForm";

export const CreateGroup = ({ open, close }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      open={open}
      onClose={close}
      aria-labelledby="responsive-dialog-title"
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <DialogTitle>Create New Group</DialogTitle>
      </Stack>
      <DialogContent>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          >
            <Stack direction="row" alignItems="center" justifyContent="end">
              <User />
            </Stack>
          </TextField>
          <CustomizedHook />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={close} autoFocus>
          Cancel
        </Button>
        <Button variant="contained" autoFocus>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
