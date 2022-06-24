import React from "react";
import { Typography } from "@material-ui/core";

export default function DashboardCardTag(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.icon}
      <Typography style={{ color: "#fff", fontWeight: 'bold', fontSize: 14 }}>
        {props.title}
      </Typography>
    </div>
  );
}
