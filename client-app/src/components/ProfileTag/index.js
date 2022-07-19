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
              <TextField
                id="tblUser_Name"
                variant={"outlined"}
                label={"نام"}
                style={{
                  marginTop: 16 + 76 + 8,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Modir"
                variant={"outlined"}
                label={"مدیر"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Email"
                variant={"outlined"}
                label={"ایمیل"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_state"
                variant={"outlined"}
                label={"شهر"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Tel"
                variant={"outlined"}
                label={"تلفن"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Mobile"
                variant={"outlined"}
                label={"موبایل"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_AkanluRabet"
                variant={"outlined"}
                label={"رابط آکانلو"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Email2"
                variant={"outlined"}
                label={"ایمیل 2"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_WhatsAppNumber"
                variant={"outlined"}
                label={"واتس اپ"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Email3"
                variant={"outlined"}
                label={"ایمیل 3"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Yahoo"
                variant={"outlined"}
                label={"یاهو"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <TextField
                id="tblUser_Password"
                variant={"outlined"}
                label={"پسورد"}
                style={{
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  width: "calc(100% - 32px)",
                }}
              />
              <Button
                variant="outlined"
                style={{
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 32,
                  marginBottom: 32,
                  width: "calc(100% - 32px)",
                }}
                onClick={() => {
                  if (window.confirm("آیا میخواهید خارج شوید ؟")) {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    setAuthenticated(false);
                  }
                }}
              >
                خروج
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
        paddingLeft: 24,
        top: 32,
        right: 32,
        position: "fixed",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        borderRadius: 24,
        zIndex: props.zIndex,
      }}
    >
      <Avatar src={AvatarPic} />
      <Typography style={{ marginTop: 8, marginRight: 8 }}>
        {title}
      </Typography>
    </Card>
  );
}
