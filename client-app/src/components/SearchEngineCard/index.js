import React from "react";
import { Card, Typography } from "@material-ui/core";
import SearchEngineCardImg from '../../images/hotel.jpg';

export default function SearchEngineCard(props) {
  return (
    <Card
      style={{
        width: 250,
        height: 175,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: 16,
        flex: '1 0 75%',
        marginLeft: props.gapLeft,
        marginRight: props.gapRight === undefined ? 16 : props.gapRight,
        background: `url(${SearchEngineCardImg})`,
        position: 'relative'
      }}
    >
      <div style={{backgroundImage: 'linear-gradient(transparent, #111)', width: '100%', height: '100%', position: 'absolute', left: 0, bottom: 0}} />
      <Typography style={{fontSize: 17, color: '#fff', position: 'absolute', right: 24, bottom: 56}}>
        هتل 123
      </Typography>
      <Typography style={{fontSize: 15, color: '#fff', position: 'absolute', right: 24, bottom: 24}}>
        ارمنستان
      </Typography>
    </Card>
  );
}
