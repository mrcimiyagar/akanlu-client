import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Close from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import BathroomIcon from '@mui/icons-material/Bathroom';
import BedIcon from '@mui/icons-material/Bed';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TagIcon from '@mui/icons-material/Tag';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import PersonIcon from '@mui/icons-material/Person';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import CribIcon from '@mui/icons-material/Crib';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
      <div style={{ width: "calc(100% - 32px)", marginLeft: 16, marginTop: 72 }}>
        <img
          style={{ width: "100%", heigt: 350, borderRadius: 16 }}
          src={"https://akanlu.com/WebFile/Gallery/" + data.room_pic}
        />
        <div style={{ width: "100%", marginTop: 16, borderRadius: 16 }}>
          <CustomText><BathroomIcon/> <b>Bathroom Status:</b> {data.bathRoomStatus_Fa}</CustomText>
          
          <CustomText><BedIcon/> <b>Bed Number:</b> {data.bedNumber_Fa}</CustomText>
          
          <CustomText><BedroomChildIcon/> <b>ChildNB:</b> {data.childNB}</CustomText>
          
          <CustomText><AirlineSeatIndividualSuiteIcon/> <b>ChildWB:</b> {data.childWB}</CustomText>
          
          <CustomText><GroupAddIcon/> <b>Extra Bed:</b> {data.exraBed_Fa}</CustomText>
          
          <CustomText><MeetingRoomIcon/> <b>Room Area:</b> {data.roomArea_Fa}</CustomText>
          
          <CustomText><FeaturedPlayListIcon/> <b>Room Features:</b> {data.roomEmkanat_Fa}</CustomText>
          
          <CustomText><TagIcon/> <b>Room Type:</b> {data.roomName}</CustomText>
          
          <CustomText><ReduceCapacityIcon/> <b>Room Total Capacity:</b> {data.roomTotalCapacity}</CustomText>
          
          <CustomText><PersonIcon/> <b>Adult Number:</b> {data.room_AdultNumber}</CustomText>
          
          <CustomText><CribIcon/> <b>CNB Number:</b> {data.room_CNBNumber}</CustomText>
          
          <CustomText><BedroomBabyIcon/> <b>CWB Number:</b> {data.room_CWBNumber}</CustomText>
          
          <CustomText><BedroomParentIcon/> <b>Type Bed:</b> {data.typeBed_Fa}</CustomText>
          
          <CustomText><VisibilityIcon/> <b>View Type:</b> {data.viewType_Fa}</CustomText>
        </div>
      </div>
    </Dialog>
  );
}
