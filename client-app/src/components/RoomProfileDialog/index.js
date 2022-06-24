import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Close from "@mui/icons-material/Close";
import RoomCard from "../RoomCard";
import { Card, Divider } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomText = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography style={{marginTop: 8, marginBottomm: 8, marginLeft: 16}}>{props.children}</Typography>
      <Divider style={{ width: "100%", marginTop: 8, marginBottomm: 8 }} />
    </div>
  );
};

export default function RoomProfileDialog(props) {
  const [data, setData] = React.useState({});
  useEffect(() => {
    if (props.room !== undefined) {
      setData(props.room);
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
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
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
      <div style={{ width: "100%", height: 56 }} />
      <div style={{ width: "calc(100% - 32px)", margin: 16 }}>
        <img
          style={{ width: "100%", heigt: 350, borderRadius: 16 }}
          src={"https://akanlu.com/WebFile/Gallery/" + data.room_pic}
        />
        <Card style={{ width: "100%", marginTop: 16, borderRadius: 16 }}>
          <CustomText>Bathroom Status: {data.bathRoomStatus_Fa}</CustomText>
          
          <CustomText>Bed Number: {data.bedNumber_Fa}</CustomText>
          
          <CustomText>ChildNB: {data.childNB}</CustomText>
          
          <CustomText>ChildWB: {data.childWB}</CustomText>
          
          <CustomText>Extra Bed: {data.exraBed_Fa}</CustomText>
          
          <CustomText>Room Area: {data.roomArea_Fa}</CustomText>
          
          <CustomText>Room Features: {data.roomEmkanat_Fa}</CustomText>
          
          <CustomText>Room Type: {data.roomName}</CustomText>
          
          <CustomText>Room Total Capacity: {data.roomTotalCapacity}</CustomText>
          
          <CustomText>Adult Number: {data.room_AdultNumber}</CustomText>
          
          <CustomText>CNB Number: {data.room_CNBNumber}</CustomText>
          
          <CustomText>CWB Number: {data.room_CWBNumber}</CustomText>
          
          <CustomText>Type Bed: {data.typeBed_Fa}</CustomText>
          
          <CustomText>View Type: {data.viewType_Fa}</CustomText>
        </Card>
      </div>
    </Dialog>
  );
}
