import { AppBar, Dialog, IconButton, Slide } from "@material-ui/core";
import React, { useEffect } from "react";
import HotelCard from "../HotelCard";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HotelsDialog(props) {
  const [hotels, setHotels] = React.useState(undefined);
  useEffect(() => {
    if (props.show === true) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://akanlu.com:5001/api/Hotels/GetCityHotels/?cityid=" +
          props.selectedCityId,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setHotels(result);
        })
        .catch((error) => console.log("error", error));
    }
  }, [props.show]);
  return (
    <Dialog
      style={{ position: "fixed", left: 0, top: 0, backdropFilter: 'blur(10px)' }}
      open={props.show}
      TransitionComponent={Transition}
      fullScreen
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
        },
      }}
    >
      <AppBar
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <IconButton
          style={{ width: 56, height: 56 }}
          onClick={() => {
            if (props.onClose !== undefined) {
              props.onClose();
            }
          }}
        >
          <Close style={{ fill: "#fff" }} />
        </IconButton>
      </AppBar>
      {hotels === undefined ? null : (
        <div
          style={{
            width: "100%",
            height: "calc(100% - 56px)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "100%", height: 56 }} />
          {hotels.map((hotel) => {
            return <HotelCard hotel={hotel} onHotelSelected={props.onHotelSelected} />;
          })}
        </div>
      )}
    </Dialog>
  );
}
