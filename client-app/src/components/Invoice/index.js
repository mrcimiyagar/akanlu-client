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

export default function Invoice(props) {
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
            title={'Invoice'}
          />
        </Toolbar>
      </AppBar>
      <div style={{ width: "calc(100% - 32px)", marginLeft: 16, marginTop: 84 }}>
        <iframe width={window.innerWidth + 'px'} height={window.innerHeight + 'px'} style={{
          position: 'absolute',
          left: 0,
          top: 72,
          width: '100%',
          height: '100%'
        }} src={'https://akanlu.com/PaymentHistory.aspx?ID=' + props.selectedGUID} ></iframe>
      </div>
    </Dialog>
  );
}
