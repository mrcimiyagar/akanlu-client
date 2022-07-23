import {
  AppBar,
  Card,
  Dialog,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Close from "@mui/icons-material/Close";
import HotelSlider from "../HotelSlider";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RoomCard from "../RoomCard";
import { CardHeader, Rating, Toolbar } from "@mui/material";

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
    click: (e) => {

    },
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

export default function HotelProfileDialog(props) {
  const [rooms, setRooms] = React.useState([]);
  const [images, setImages] = React.useState([]);
  [position, setPosition] = React.useState(undefined);
  useEffect(() => {
    setupInitialMapPosition();
  }, []);
  useEffect(() => {
    if (props.show === true && props.hotel !== undefined) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://akanlu.com:5001/api/Hotels/GetHotelRoomsByHotelId/?hotelid=" +
        props.hotel.hotelID,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setRooms(result);
        })
        .catch((error) => console.log("error", error));
      var requestOptions2 = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://akanlu.com:5001/api/Hotels/GetHotelImagesByHotelId/?hotelid=" +
        props.hotel.hotelID,
        requestOptions2
      )
        .then((response) => response.json())
        .then((result) => {
          setImages(result.map(img => img.image_File));
        })
        .catch((error) => console.log("error", error));
      setPosition([props.hotel.long, props.hotel.lat]);
    }
  }, [props.show]);
  return (
    <Dialog
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        backdropFilter: "blur(10px)",
      }}
      open={props.show}
      TransitionComponent={Transition}
      fullScreen
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          height: "100%",
          background: "transparent",
          overflow: "auto",
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
        <Toolbar>
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
          <CardHeader
            title={props.hotel !== undefined ? props.hotel.hotelName : ''}
            subheader={<div>
              <div style={{ display: 'flex' }}>
                <Rating value={props.hotel !== undefined ? Number(props.hotel.hotelStar) : 0} />
                <Typography style={{ color: '#fff' }}>{props.hotel !== undefined ? props.hotel.hotelBooking : ''} of 10</Typography>
              </div>
              <Typography variant={'caption'} style={{ fontWeight: 'bold', color: '#fff' }}>
                {props.hotel !== undefined ? props.hotel.hotelAddress : ''}
              </Typography>
            </div>}
          />
        </Toolbar>
      </AppBar>
      <div>
        <div style={{ width: '100%', height: 144 }}></div>
        <div
          style={{
            width: "100%",
            height: 325,
            marginTop: 16
          }}
        >
          <HotelSlider images={images} />
        </div>
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
        <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap" }}>
          {rooms.map((room, index) => (
            <div style={{ width: "50%", height: 230 }}>
              <RoomCard room={room} isAtEnd={index % 2 === 1} onRoomClicked={props.onRoomSelected} />
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
