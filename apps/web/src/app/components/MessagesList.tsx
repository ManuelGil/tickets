import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { messageStructur } from '../states/ticketSlide';

const MessageList = ({
  messagesGiven,
}: {
  messagesGiven: messageStructur[];
}) => {
  return (
    <List>
      {messagesGiven.map(({ id, user, data }: messageStructur) => (
        <ListItem button key={id}>
          <ListItemAvatar>
            <Avatar alt={user} src={user} />
          </ListItemAvatar>
          <Typography paragraph>{data}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
