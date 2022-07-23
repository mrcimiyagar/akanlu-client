import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  InputBase,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Close from "@mui/icons-material/Close";
import { Card, CardActions, CardContent, CardMedia, Divider } from "@mui/material";
import ExtensionIcon from '@mui/icons-material/Extension';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomText = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography style={{ marginTop: 8, marginBottomm: 8, marginLeft: 16, fontSize: props.fontSize }}>
        {props.children}
      </Typography>
      <Divider style={{ width: "100%", marginTop: 8, marginBottomm: 8 }} />
    </div>
  );
};

export default function PriceDialog({ onClose, data }) {
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
              setShow(false);
              setTimeout(() => {
                onClose();
              }, 250);
            }
          }}
        >
          <Close style={{ fill: "#fff" }} />
        </IconButton>
      </AppBar>
      <div style={{ width: "100%", height: 56 }} />
      <div style={{ width: "calc(100% - 32px)", margin: 16 }}>
        <div style={{ width: "100%", marginTop: 72, borderRadius: 16 }}>
          <CustomText>
            Currency Price Riali: {data.currencyPriceRiali}
          </CustomText>
          <CustomText>Room Price: $ {data.roomPrice}</CustomText>
          <CustomText>
            Total Room Price Dollar: $ {data.totalRoomPriceDollar}
          </CustomText>
          <CustomText>
            Total Room Price Riali: {data.totalRoomPriceRiali}
          </CustomText>
          {data.availableServices.map((service) => (
            <Card style={{ width: "100%", marginTop: 16, borderRadius: 16, backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative' }}>
              <ExtensionIcon style={{fill: '#fff', width: 72, height: 72, position: 'absolute', left: '50%', transform: 'translate(-50%, 56px)'}}/>
              <CardContent style={{color: '#fff', marginTop: 72 + 56 + 16}}>
                <CustomText fontSize={13}>{service.extraEmkanat_Name}</CustomText>
                <CustomText>Price: $ {service.extra_Value}</CustomText>
              </CardContent>
              <CardActions>
                <InputBase style={{width: 'calc(100% - 16px)', marginLeft: 16, marginRight: 16, backgroundColor: '#fff', paddingLeft: 16, borderRadius: 24}} defaultValue={"0"} />
                <Button size="large" style={{color: '#fff', fontSize: 23}}>+</Button>
                <Button size="large" style={{color: '#fff', fontSize: 23}}>-</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
