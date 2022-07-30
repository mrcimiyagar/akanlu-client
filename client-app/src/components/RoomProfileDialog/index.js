import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Close from "@mui/icons-material/Close";
import { CardHeader, Divider, Paper, Toolbar } from "@mui/material";
import BathroomIcon from '@mui/icons-material/Bathroom';
import BedIcon from '@mui/icons-material/Bed';
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
import Done from '@mui/icons-material/Done';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomText = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography style={{ marginTop: 8, marginBottomm: 8, marginLeft: 16, display: 'flex' }}>{props.children}</Typography>
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
            title={props.room !== undefined ? props.room.roomName : ''}
          />
        </Toolbar>
      </AppBar>
      <div style={{ width: "calc(100% - 32px)", marginLeft: 16, marginTop: 84 }}>
        <img
          style={{ width: "100%", heigt: 350, borderRadius: 16 }}
          src={"https://akanlu.com/WebFile/Gallery/" + data.room_pic}
        />
        <div style={{ width: "100%", marginTop: 32, borderRadius: 16 }}>
          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><BathroomIcon /></Paper> <b style={{marginRight: 8}}>Bathroom Status:</b>{data.bathRoomStatus_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><BedIcon /></Paper> <b style={{marginRight: 8}}>Bed Number:</b> {data.bedNumber_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><AirlineSeatIndividualSuiteIcon /></Paper> <b style={{marginRight: 8}}>Child With Bed:</b> {data.childWB === "True" ? <Done style={{ fill: '#0a0' }} /> : <Close style={{ fill: '#a00' }} />}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><GroupAddIcon /></Paper> <b style={{marginRight: 8}}>Extra Bed:</b> {data.exraBed_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><MeetingRoomIcon /></Paper> <b style={{marginRight: 8}}>Room Area:</b> {data.roomArea_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><FeaturedPlayListIcon /></Paper> <b style={{marginRight: 8}}>Room Features:</b> {data.roomEmkanat_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><ReduceCapacityIcon /></Paper> <b style={{marginRight: 8}}>Room Total Capacity:</b> {data.roomTotalCapacity}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><PersonIcon /></Paper> <b style={{marginRight: 8}}>Adult Number:</b> {data.room_AdultNumber}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><CribIcon /></Paper> <b style={{marginRight: 8}}>CNB Number:</b> {data.room_CNBNumber}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><BedroomBabyIcon /></Paper> <b style={{marginRight: 8}}>CWB Number:</b> {data.room_CWBNumber}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><BedroomParentIcon /></Paper> <b style={{marginRight: 8}}>Type Bed:</b> {data.typeBed_Fa}</CustomText>

          <CustomText><Paper style={{borderRadius: 8, width: 32, height: 32, padding: 4, marginRight: 8, marginTop: -4}}><VisibilityIcon /></Paper> <b style={{marginRight: 8}}>View Type:</b> {data.viewType_Fa}</CustomText>
        </div>
      </div>
    </Dialog>
  );
}
