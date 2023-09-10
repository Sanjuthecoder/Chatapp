import SimpleBarReact from "simplebar-react";
import styled from "@emotion/styled";
import { alpha } from "@mui/material";
export const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  // maxHeight: '100%',
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
  "& .simplebar-placeholder": {
    height: "0 !important",
  },
}));
