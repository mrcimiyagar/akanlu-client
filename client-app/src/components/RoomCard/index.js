import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Card, Typography } from '@material-ui/core';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function RoomCard(props) {

  return (
    <Card onClick={() => {
      props.onRoomClicked(props.room);
    }} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', width: 'calc(100% - 24px)', marginLeft: props.isAtEnd ? 8 : 16, marginRight: props.isAtEnd ? 16 : 8, marginTop: 16}}>
      <CardMedia
        component="img"
        height="150"
        image={"https://akanlu.com/WebFile/Gallery/" + props.room.room_pic}
        alt="Room Photo"
      />
      <CardContent>
        <Typography variant="body" style={{fontSize: 13, height: 56, color: '#fff'}}>
          {props.room.roomName}
        </Typography>
      </CardContent>
    </Card>
  );
}