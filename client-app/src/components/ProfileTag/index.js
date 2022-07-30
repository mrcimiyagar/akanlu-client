import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  Fab,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AvatarImg from "../../images/avatar.png";
import {
  bso,
  setAuthenticated,
  setBottomSheetContent,
  setBSO,
} from "../../App";
import AvatarPic from "../../images/logo.png";
import Save from "@mui/icons-material/Save";
import { InputBase } from "@mui/material";

export default function ProfileTag(props) {
  const [title, setTitle] = React.useState('');
  React.useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://akanlu.com:5001/api/Request/UserProfile?username=${localStorage.getItem(
        "username"
      )}&password=${localStorage.getItem("password")}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTitle(result.tblUser_Name);
      });
  }, []);
  return (
    <Card
      onClick={() => {
        setBottomSheetContent(
          <div style={{ width: "100%", height: 360 }}>
            <Avatar
              style={{
                zIndex: 99999,
                width: 150,
                height: 150,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              src={AvatarPic}
            />
            <Fab
              color={"secondary"}
              style={{
                zIndex: 99999,
                position: "absolute",
                left: "calc(50% - 150px)",
                transform: "translate(-50%, 47px)",
              }}
              onClick={() => {
                let raw = {
                  tblUser_Username: localStorage.getItem('username'),
                  tblUser_Password: localStorage.getItem('password'),
                  tblUser_Name: document.getElementById("tblUser_Name").value,
                  tblUser_Modir: document.getElementById("tblUser_Modir").value,
                  tblUser_Email: document.getElementById("tblUser_Email").value,
                  tblUser_state: document.getElementById("tblUser_state").value,
                  tblUser_Tel: document.getElementById("tblUser_Tel").value,
                  tblUser_Mobile:
                    document.getElementById("tblUser_Mobile").value,
                  tblUser_AkanluRabet: document.getElementById(
                    "tblUser_AkanluRabet"
                  ).value,
                  tblUser_Email2:
                    document.getElementById("tblUser_Email2").value,
                  tblUser_WhatsAppNumber: document.getElementById(
                    "tblUser_WhatsAppNumber"
                  ).value,
                  tblUser_Email3:
                    document.getElementById("tblUser_Email3").value,
                  tblUser_Yahoo: document.getElementById("tblUser_Yahoo").value,
                  tblUser_NewPassword: document.getElementById('tblUser_Password').value
                };

                var requestOptions = {
                  method: "POST",
                  body: JSON.stringify(raw),
                  redirect: "follow",
                  headers: {
                    "Content-Type": "application/json",
                  },
                };

                fetch(
                  `https://akanlu.com:5001/api/Request/UpdateUserProfile`,
                  requestOptions
                )
                  .then((response) => response.text())
                  .then((result) => {
                    localStorage.setItem('password', document.getElementById('tblUser_Password').value);
                    console.log(result);
                    setBSO(false);
                    setTimeout(() => {
                      setBSO(null);
                    }, 250);
                  })
                  .catch((error) => console.log("error", error));
              }}
            >
              <Save />
            </Fab>
            <Paper
              style={{
                borderRadius: "24px 24px 0 0",
                width: "100%",
                height: "auto",
                position: "absolute",
                top: 100,
                left: 0,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <InputBase
                id="tblUser_Name"
                placeholder={"نام"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16 + 76 + 8,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Modir"
                placeholder={"مدیر"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Email"
                placeholder={"ایمیل"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_state"
                placeholder={"شهر"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Tel"
                placeholder={"تلفن"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Mobile"
                placeholder={"موبایل"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_AkanluRabet"
                placeholder={"رابط آکانلو"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Email2"
                placeholder={"ایمیل 2"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_WhatsAppNumber"
                placeholder={"واتس اپ"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Email3"
                placeholder={"ایمیل 3"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Yahoo"
                placeholder={"یاهو"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <InputBase
                id="tblUser_Password"
                placeholder={"پسورد"}
                style={{
                  backgroundColor: 'rgb(255, 255, 255, 0.5)',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <Button
                variant="outlined"
                style={{
                  backgroundColor: '#fff',
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 24,
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 32,
                  marginBottom: 32,
                  width: "calc(100% - 32px)",
                }}
                onClick={() => {
                  if (window.confirm("Are you sure ?")) {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    setAuthenticated(false);
                  }
                }}
              >
                Sign out
              </Button>
            </Paper>
          </div>
        );
        setBSO(true);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          `https://akanlu.com:5001/api/Request/UserProfile?username=${localStorage.getItem(
            "username"
          )}&password=${localStorage.getItem("password")}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            const timerCallback = () => {
              if (document.getElementById("tblUser_Name") !== null) {
                for (let property in result) {
                  try {
                    document.getElementById(property).value = result[property];
                  } catch (ex) {
                    console.log(property);
                  }
                }
              }
              else {
                setTimeout(() => {
                  timerCallback();
                }, 250);
              }
            };
            timerCallback();
          })
          .catch((error) => console.log("error", error));
      }}
      style={{
        height: 40,
        width: "auto",
        top: 32,
        left: 32,
        position: "fixed",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: 24,
        zIndex: props.zIndex,
        paddingRight: 24
      }}
    >
      <Avatar src={AvatarPic} />
      <Typography style={{ marginTop: 8, marginLeft: 8 }}>
        {title}
      </Typography>
    </Card>
  );
}
