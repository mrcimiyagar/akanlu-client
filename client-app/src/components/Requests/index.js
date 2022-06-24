import { Slide } from "@material-ui/core";
import { Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Requests(props) {
  const [requests, setRequests] = React.useState([]);
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://akanlu.com:5001/api/Request/GetUserRequests/?username=${localStorage.getItem('username')}&password=${localStorage.getItem('password')}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setRequests(result))
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
          background: "transparent",
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
      <RequestsTable requests={requests} onVoucherClicked={props.onVoucherClicked} onDetailsClicked={props.onDetailsClicked} />
    </Dialog>
  );
}
