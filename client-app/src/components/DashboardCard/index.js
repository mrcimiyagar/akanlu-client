import React from "react";
import { Card } from "@material-ui/core";

export default function DashboardCard(props) {
  return (
    <Card
      style={{
        width: 150,
        height: 150,
        background: props.backgroundColor,
        backdropFilter: "blur(10px)",
        borderRadius: 75,
        position: 'relative',
        zIndex: props.zIndex,
        margin: 16
      }}
      onClick={() => props.onClick()}
    >
      {props.children}
    </Card>
  );
}
