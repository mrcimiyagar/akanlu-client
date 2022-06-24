import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  TextField,
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
      <Typography style={{ marginTop: 8, marginBottomm: 8, marginLeft: 16 }}>
        {props.children}
      </Typography>
      <Divider style={{ width: "100%", marginTop: 8, marginBottomm: 8 }} />
    </div>
  );
};

export default function PriceDialog({onClose, data}) {
  const [show, setShow] = React.useState(true);
  return (
    <Dialog
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        backdropFilter: "blur(10px)",
      }}
      open={show}
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
            if (onClose !== undefined) {
              onClose();
            }
          }}
        >
          <Close style={{ fill: "#fff" }} />
        </IconButton>
      </AppBar>
      <div style={{ width: "100%", height: 56 }} />
      <div style={{ width: "calc(100% - 32px)", margin: 16 }}>
        <Card style={{ width: "100%", marginTop: 16, borderRadius: 16 }}>
          <CustomText>
            Currency Price Riali: {data.currencyPriceRiali}
          </CustomText>
          <CustomText>Room Price: {data.roomPrice}</CustomText>
          <CustomText>
            Total Room Price Dollar: {data.totalRoomPriceDollar}
          </CustomText>
          <CustomText>
            Total Room Price Riali: {data.totalRoomPriceRiali}
          </CustomText>
          {data.availableServices.map((service) => (
            <Card style={{ width: "100%", marginTop: 16, borderRadius: 16 }}>
              <CustomText>Name: {service.extraEmkanat_Name}</CustomText>
              <CustomText>Price: {service.extra_Value}</CustomText>
              <TextField variant={"outlined"} label={"0"} />
              <div style={{ display: "flex" }}>
                <Button style={{ width: "49%" }} variant={"outlined"}>
                  +
                </Button>
                <Button style={{ width: "49%" }} variant={"outlined"}>
                  -
                </Button>
              </div>
            </Card>
          ))}
        </Card>
      </div>
    </Dialog>
  );
}
