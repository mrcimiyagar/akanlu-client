import { Slide } from "@material-ui/core";
import { Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Voucher(props) {
  const [details, setDetails] = React.useState({});
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://akanlu.com:5001/api/Request/GetRequestByID/?username=${localStorage.getItem('username')}&password=${localStorage.getItem('password')}&RequestID=${props.selectedId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDetails(result[0]))
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
      <img alt={'Voucher'} src={details.voucherScreenShot} />
    </Dialog>
  );
}
