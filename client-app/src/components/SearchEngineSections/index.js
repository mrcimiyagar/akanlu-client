import React from "react";
import { Typography } from "@material-ui/core";
import Carousel from '../Carousel';

export default function SearchEngineSections(props) {
  return (
    <div style={{ width: "100%", position: 'relative', zIndex: 1 }}>
      <div
        style={{
          width: "100%",
          marginTop: props.topGap === undefined ? 32 : props.topGap,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <Typography style={{transform: 'translateX(-16px)'}}>
          هتل ها
        </Typography>

        <div style={{flexGrow: 1}}/>

        <Typography style={{transform: 'translateX(+16px)'}}>
          ...
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          height: 350,
          display: "flex",
          overflowX: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)"
        }}
      >
        <Carousel />
      </div>
    </div>
  );
}
