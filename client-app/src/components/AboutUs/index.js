import { Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from "@material-ui/core";
import { Dialog, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";
import { map } from "leaflet";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AboutUs(props) {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    if (props.open) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`https://akanlu.com:5001/api/Site/GetAboutUs`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setTimeout(() => {
            document.getElementById('contentOfAboutUs').innerHTML = result.aboutustext;
          }, 1000);
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
          backdropFilter: "blur(10px)",
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
      <div style={{ width: "100%", marginTop: 16 }}>
          <div style={{ width: "100%", padding: 16 }} id="contentOfAboutUs"></div>
          <div style={{width: '100%', overflowX: 'auto'}}>
          <div style={{ padding: 16, display: 'flex', width: 2000 }} id="contentOfAboutUs">
          {data.ourteamlist === undefined ? null : data.ourteamlist.map(member => (
                <Card sx={{ maxWidth: 345 }} style={{marginLeft: 16}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={"https://akanlu.com/webfile/EmployeesImages/" + member.tblCvPic}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" style={{color: 'orange', width: '100%', textAlign: 'center'}}>
                        {member.tblCvName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{width: '100%', textAlign: 'center'}}>
                        {member.tblCvSemat}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{display: 'flex', marginTop: 12}}>
                        <LocalPhoneIcon style={{marginRight: 8}}/>
                        {member.tblCvTel}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{display: 'flex'}}>
                        <LocalPhoneIcon style={{marginRight: 8}}/>
                        {member.tblCvMobile}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{display: 'flex'}}>
                        <EmailIcon style={{marginRight: 8}}/>
                        {member.tblCvEmail}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
          }
          </div>
          </div>
      </div>
    </Dialog>
  );
}
