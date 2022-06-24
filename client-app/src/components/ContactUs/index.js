import { Slide, Typography } from "@material-ui/core";
import { Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

let position = undefined,
  setPosition = undefined;
let map;

function MyComponent() {
  map = useMapEvents({
    click: (e) => {},
  });
  return null;
}

let setupInitialMapPosition = () => {
  if (map !== undefined) {
    map.setView(position, map.getZoom());
  } else {
    setTimeout(() => {
      setupInitialMapPosition();
    }, 1000);
  }
};

export default function ContactUs(props) {
  const [data, setData] = React.useState([]);
  [position, setPosition] = React.useState([0, 0]);
  useEffect(() => {
    setupInitialMapPosition();
  }, []);
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`https://akanlu.com:5001/api/Site/GetContactUS`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setPosition([result.latitude, result.longitude]);
        })
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
          backdropFilter: 'blur(10px)',
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

      <div
        style={{
          width: "100%",
          height: 300,
        }}
      >
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          style={{
            width: "calc(100% - 32px)",
            height: "100%",
            borderRadius: 16,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent />
          <Marker position={position} />
        </MapContainer>
      </div>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 32 }}>
        Name: {data.name}
      </Typography>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 16 }}>
        Telphone: {data.telphone}
      </Typography>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 16 }}>
        Email: {data.email}
      </Typography>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 16 }}>
        Skype: {data.skype}
      </Typography>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 16 }}>
        Address: {data.address}
      </Typography>
      <Typography style={{ width: "100%", textAlign: "left", paddingLeft: 16, marginTop: 16 }}>
        Telphone: {data.telphone}
      </Typography>
    </Dialog>
  );
}
