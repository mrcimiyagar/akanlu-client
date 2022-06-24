import { Slide } from "@material-ui/core";
import { Dialog, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RequestDetails(props) {
  const [request, setRequest] = React.useState({});
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://akanlu.com:5001/api/Request/GetRequestByID/?username=${localStorage.getItem(
          "username"
        )}&password=${localStorage.getItem("password")}&RequestID=${
          props.selectedId
        }`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setRequest(result[0]);
        })
        .catch((error) => console.log("error", error));
    }
  }, [props.open]);
  console.log(request.requestRooms);
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

      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: "100%",
            marginTop: props.topGap === undefined ? 32 : props.topGap,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography style={{ transform: "translateX(-16px)", paddingLeft: 24, paddingRight: 24 }}>
            Hotel Information
          </Typography>

          <div style={{ flexGrow: 1 }} />
        </div>
        <div
          style={{
            width: "100%",
            height: 350,
            overflowX: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            paddingLeft: 24,
            paddingRight: 24
          }}
        >
        <div style={{width: '100%', height: 12}}/>
          {request.requestRooms === undefined
            ? null
            : request.requestRooms.map((rr) => (
                <div>
                  <div style={{ display: "flex" }}>
                    Hotel Name : {rr.tblHotelHotelName}
                    <br />
                    Room : {rr.tblHotelFesility}
                    <br />
                    Check in : {rr.tblHotelCheckIn}
                    <br />
                    Check out : {rr.tblHotelCheckOut}
                    <br />
                    Night : {rr.tblHotelNight}
                  </div>
                  <div style={{width: 'calc(100% - 32px)', height: 1, backgroundColor: 'black', marginTop: 12, marginBottom: 12}} />
                </div>
              ))}
        </div>
      </div>

      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: "100%",
            marginTop: props.topGap === undefined ? 32 : props.topGap,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography style={{ transform: "translateX(-16px)", paddingLeft: 24, paddingRight: 24 }}>
            Passangers
          </Typography>

          <div style={{ flexGrow: 1 }} />
        </div>
        <Divider />
        <div
          style={{
            width: "100%",
            height: 350,
            overflowX: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            paddingLeft: 24,
            paddingRight: 24
          }}
        >
          <div style={{width: '100%', height: 12}}/>
          {request.requestPersons !== undefined
            ? request.requestPersons.map((person) => (
                <div>
                  {person.tblPersonPassNo}
                  <br />
                  {person.tblPersonExpire}
                  <br />
                  First Name : {person.tblPersonName}
                  <br />
                  Last Name : {person.tblPersonLastName}
                  <div style={{width: 'calc(100% - 32px)', height: 1, backgroundColor: 'black', marginTop: 12, marginBottom: 12}} />
                </div>
              ))
            : null}
        </div>
      </div>
    </Dialog>
  );
}
