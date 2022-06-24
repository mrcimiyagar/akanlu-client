import { Typography } from "@material-ui/core";
import React from "react";

export default function DashboardCardInfo(props) {
  return (
    <div
      style={{
        marginTop: 32,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Typography style={{ color: "#fff", fontWeight: "bold" }}>
          {props.num1}
        </Typography>
        <Typography style={{ color: "#fff" }}>{props.num1Info}</Typography>
      </div>
      {props.num2 !== undefined ? (
        <div style={{ marginRight: 32 }}>
          <Typography style={{ color: "#fff", fontWeight: "bold" }}>
            {props.num2}
          </Typography>
          <Typography style={{ color: "#fff" }}>{props.num2Info}</Typography>
        </div>
      ) : null}
    </div>
  );
}
