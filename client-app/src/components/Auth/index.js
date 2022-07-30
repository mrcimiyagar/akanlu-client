import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import React, { useEffect } from "react";
import WhiteColorTextField from "../WhiteColorTextField";
import CloudIcon from "../../images/logo.png";
import Wallpaper from "../../images/login-wallpaper.jpg";
import RegistrationMessage from "../../images/register-message.jpeg";
import { setAuthenticated } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgba(255, 255, 255, 0.5)",
    },
  },
}));

let registeredUsername = "";
let registeredPassword = "";

function Auth(props) {
  document.documentElement.style.overflow = "auto";
  let [opacity, setOpacity] = React.useState(0);
  let [register, setRegister] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);
  let classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (
        registeredUsername !== undefined &&
        registeredUsername !== null &&
        registeredUsername !== ""
      ) {
        let loginUsername = document.getElementById("loginUsername");
        loginUsername.value = registeredUsername;
      }
      if (
        registeredPassword !== undefined &&
        registeredPassword !== null &&
        registeredPassword !== ""
      ) {
        let loginPassword = document.getElementById("loginPassword");
        loginPassword.value = registeredPassword;
      }
    }, 0);
  }, [register]);
  return (
    <div
      style={{
        overflow: "auto",
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        alt={"auth-wallpaper"}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
        src={Wallpaper}
      />
      {registered ? (
        <img
          alt={"registration-message"}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 99999,
          }}
          src={RegistrationMessage}
        />
      ) : null}
      {register ? (
        <div
          style={{
            borderRadius: 32,
            height: "auto",
            paddingLeft: 32,
            paddingRight: 32,
            paddingtop: 16,
            paddingBottom: 16,
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            opacity: opacity,
            transition: "opacity 1s",
            position: "absolute",
            top: "50%",
            width: "100%",
            maxWidth: 300,
            transform: "translate(-50%, -25%)",
            left: "50%",
          }}
        >
          <div style={{ width: "100%", height: "auto" }}>
            <img
              alt={"logo"}
              src={CloudIcon}
              style={{
                width: 100,
                height: 100,
                fill: "#fff",
                transition: "top 1s",
                marginTop: -56,
              }}
            />
            <Typography
              variant={"h5"}
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",
                color: "#000",
                marginTop: 24,
                transition: "top 1s",
              }}
            >
              Welcome To Akanlu
            </Typography>
          </div>
          <Typography style={{marginTop: 32}}>Login Information</Typography>
          <TextField
            id="tblUser_Username"
            variant={"outlined"}
            label={"Username"}
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
            label={"Password"}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
              width: "calc(100% - 32px)",
            }}
          />
          <TextField
            id="tblUser_Password_confirm"
            variant={"outlined"}
            label={"Confirm Password"}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
              width: "calc(100% - 32px)",
            }}
          />
          <Typography style={{marginTop: 16}}>Agency Information</Typography>
          <TextField
            id="tblUser_Name"
            variant={"outlined"}
            label={"Agency Name"}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
              width: "calc(100% - 32px)",
            }}
          />
          <TextField
            id="tblUser_Modir"
            variant={"outlined"}
            label={"CEO Name"}
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
            label={"City"}
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
            label={"Emergency Phone"}
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
            label={"Phone"}
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
            label={"CEO Mobile"}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
              width: "calc(100% - 32px)",
            }}
          />
          <Typography style={{marginTop: 16}}>Agency Information</Typography>
          <TextField
            id="tblUser_WhatsAppNumber"
            variant={"outlined"}
            label={"WhatsApp"}
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
            label={"CEO Email"}
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
            label={"Akanlu Rabet"}
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
            label={"Manager Mobile"}
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
            label={"Manager Email"}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
              width: "calc(100% - 32px)",
            }}
          />
          <div style={{ width: "auto", marginTop: 48, display: "flex" }}>
            <Fab
              color={"primary"}
              variant="extended"
              style={{ marginLeft: 24 }}
              onClick={() => {
                if (
                  document.getElementById("tblUser_Password_confirm").value ===
                  document.getElementById("tblUser_Password").value
                ) {
                  let raw = {
                    tblUser_Username:
                      document.getElementById("tblUser_Username").value,
                    tblUser_Password:
                      document.getElementById("tblUser_Password").value,
                    tblUser_Name: document.getElementById("tblUser_Name").value,
                    tblUser_Modir:
                      document.getElementById("tblUser_Modir").value,
                    tblUser_Email:
                      document.getElementById("tblUser_Email").value,
                    tblUser_state:
                      document.getElementById("tblUser_state").value,
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
                    tblUser_Yahoo:
                      document.getElementById("tblUser_Yahoo").value,
                    //tblUser_Password: document.getElementById('tblUser_Password').value
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
                    `https://akanlu.com:5001/api/Request/CreateUserProfile`,
                    requestOptions
                  )
                    .then((response) => response.text())
                    .then((result) => {
                      console.log(result);
                      localStorage.setItem(
                        "username",
                        document.getElementById("tblUser_Username").value
                      );
                      localStorage.setItem(
                        "password",
                        document.getElementById("tblUser_Password").value
                      );
                      setRegistered(true);
                    })
                    .catch((error) => console.log("error", error));
                } else {
                  alert("passwords do not match.");
                }
              }}
            >
              <VpnKeyIcon sx={{ mr: 1 }} />
              <div style={{ marginRight: 8 }}>Register</div>
            </Fab>
            <Fab
              color={"primary"}
              variant="extended"
              onClick={() => setRegister(false)}
            >
              <ListAltIcon sx={{ mr: 1 }} />
              <div style={{ marginRight: 8 }}>Login</div>
            </Fab>
          </div>
        </div>
      ) : (
        <div
          style={{
            borderRadius: 32,
            width: "100%",
            maxWidth: 300,
            textAlign: "center",
            paddingLeft: 32,
            paddingRight: 32,
            paddingtop: 32,
            paddingBottom: 32,
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            justifyContent: "center",
            alignItems: "center",
            opacity: opacity,
            transition: "opacity 1s",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div style={{ width: "100%", height: "auto" }}>
            <img
              alt={"logo"}
              src={CloudIcon}
              style={{
                width: 100,
                height: 100,
                fill: "#fff",
                transition: "top 1s",
                marginTop: -56,
              }}
            />
            <Typography
              variant={"h5"}
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",
                color: "#000",
                marginTop: 24,
                transition: "top 1s",
              }}
            >
              Welcome to Akanlu
            </Typography>
          </div>
          <WhiteColorTextField
            className={classes.root}
            id="loginUsername"
            label="Username"
            variant="filled"
            style={{ marginTop: 24, width: "100%", color: "#fff" }}
          />
          <WhiteColorTextField
            className={classes.root}
            type="password"
            id="loginPassword"
            label="Password"
            variant="filled"
            style={{ marginTop: 24, width: "100%", color: "#fff" }}
          />
          <div style={{ width: "auto", marginTop: 48, display: "flex" }}>
            <Fab
              id={"loginBtn"}
              color={"primary"}
              variant="extended"
              style={{ marginLeft: 24 }}
              onClick={() => {
                if (
                  document.getElementById("loginUsername").value.length > 0 &&
                  document.getElementById("loginPassword").value.length > 0
                ) {
                  localStorage.setItem(
                    "username",
                    document.getElementById("loginUsername").value
                  );
                  localStorage.setItem(
                    "password",
                    document.getElementById("loginPassword").value
                  );
                  fetch(
                    `https://akanlu.com:5001/api/Request/CheckUserExists/?username=${
                      document.getElementById("loginUsername").value
                    }&password=${document.getElementById("loginPassword").value}`
                  )
                    .then((r) => r.text())
                    .then((result) => {
                      if (result === "true") {
                        setAuthenticated(true);
                      } else {
                        alert("Login information is wrong.");
                      }
                    });
                }
              }}
            >
              <VpnKeyIcon />
              <div style={{ marginRight: 8 }}>Login</div>
            </Fab>
            <Fab
              color={"primary"}
              variant="extended"
              onClick={() => setRegister(true)}
            >
              <ListAltIcon />
              <div style={{ marginRight: 8 }}>Register</div>
            </Fab>
          </div>
        </div>
      )}
      <div style={{ width: "100%", height: 72 }} />
    </div>
  );
}

export default Auth;
