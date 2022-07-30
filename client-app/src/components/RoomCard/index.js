import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Card, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faChildReaching } from '@fortawesome/free-solid-svg-icons';

export default function RoomCard(props) {

  return (
    <Card onClick={() => {
      props.onRoomClicked(props.room);
    }} style={{ borderRadius: 16, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', width: 'calc(100% - 24px)', marginLeft: props.isAtEnd ? 8 : 16, marginRight: props.isAtEnd ? 16 : 8, marginTop: 16 }}>
      <CardMedia
        component="img"
        height="150"
        image={"https://akanlu.com/WebFile/Gallery/" + props.room.room_pic}
        alt="Room Photo"
      />
      <CardContent>
        <Typography variant="body" style={{display: 'inline-block', fontSize: 13, height: 56, color: '#fff' }}>
          {props.room.roomName}
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', marginTop: -32 }}>
        <FontAwesomeIcon icon={faMale} color="#fff" style={{ marginLeft: 16 }} />
        <Typography style={{ color: '#fff', marginLeft: 8, marginTop: -2 }}>
          {props.room.room_AdultNumber}
        </Typography>
        <FontAwesomeIcon icon={faChildReaching} color="#fff" style={{ marginLeft: 24 }} />
        <Typography style={{ color: '#fff', marginLeft: 8, marginTop: -2 }}>
          {props.room.room_CWBNumber}
        </Typography>
      </div>
      <div style={{ height: 16 }} />
    </Card>
  );
}