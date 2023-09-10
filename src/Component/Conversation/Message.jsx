import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../Data";
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MessageType";

export const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((ele) => {
          switch (ele.type) {
            case "divider":
              return <Timeline key = {ele.id} ele={ele} />;
            case "msg":
              switch (ele.subtype) {
                case "img":
                  return <MediaMessage key = {ele.id} ele = {ele}/>
                case "doc":
                  return <DocMessage key = {ele.id} ele = {ele}/>
                case "link":
                  return <LinkMessage key = {ele.id} ele = {ele} />
                case "reply":
                    return <ReplyMessage key = {ele.id} ele = {ele} />
                default:
                    return <TextMessage key = {ele.id} ele = {ele}/>
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};
