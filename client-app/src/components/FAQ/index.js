import { Slide, Typography } from "@material-ui/core";
import { Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FAQ(props) {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`https://akanlu.com:5001/api/Site/GetFAQ`, requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    }
  }, [props.open]);
  return (
    <Dialog
      style={{ position: "fixed", left: 0, top: 0 }}
      open={props.open}
      TransitionComponent={Transition}
      fullScreen
      PaperProps={{
        style: {
          boxShadow: "none",
          width: "100%",
          height: "100%",
          position: "fixed",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      <IconButton
        style={{
          width: 56,
          height: 56,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 0,
        }}
        onClick={() => {
          props.setOpen(false);
        }}
      >
        <Close style={{ fill: "#fff" }} />
      </IconButton>
      <div style={{ width: "100%", marginTop: 16 }}>
        {data.map((qa, index) => (
          <div style={{ width: "100%" }}>
            <Typography
              style={{
                width: "100%",
                paddingTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                textAlign: 'right', 
                display: 'flex',
                direction: 'rtl'
              }}
            >
              <Typography style={{backgroundColor: 'yellow', borderRadius: 12, width: 24, height: 24, minWidth: 24, textAlign: 'center'}}>{index}</Typography>
              <Typography style={{marginLeft: 8, marginRight: 8}}>{qa.question}</Typography>
            </Typography>
            <Typography
              style={{
                width: "100%",
                paddingTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                textAlign: 'right'
              }}
            >
              {qa.answer}
            </Typography>
            <div
              style={{
                width: "calc(100% - 32px)",
                height: 1,
                background: "black",
                marginTop: 16,
                marginLeft: 16,
                marginRight: 16
              }}
            />
          </div>
        ))}
      </div>
    </Dialog>
  );
}
