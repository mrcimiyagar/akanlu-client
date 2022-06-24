import React from "react";
import HomeBottomBar from "./components/HomeBottomBar";
import { DesktopDetector } from "./utils/Size";
import Dashboard from "./components/Dashboard";
import SearchEngine from "./components/SearchEngine";
import NewRequest from "./components/NewRequest";
import Finance from "./components/Finance";
import { Drawer } from "@material-ui/core";
import Auth from "./components/Auth";
import Wallpaper from './images/wallpaper.jpg';

export let setBSO = (value) => {};
export let bso = undefined;
let bottomSheetContent = [];
export let setBottomSheetContent = (value) => {
  bottomSheetContent = value;
};

let authenticated = false;
export let setAuthenticated = (v) => {
  authenticated = v;
};

function App() {
  const [currentRoomNav, setCurrentRoomNav] = React.useState(0);
  const [bottomSheetOpen, setBottomSheetOpen] = React.useState(false);
  setBSO = setBottomSheetOpen;
  bso = bottomSheetOpen;
  const [auth, setAuth] = React.useState(
    localStorage.getItem("username") !== undefined &&
      localStorage.getItem("username") !== null &&
      localStorage.getItem("password") !== undefined &&
      localStorage.getItem("password") !== null
      ? true
      : false
  );
  setAuthenticated = setAuth;
  authenticated = auth;
  if (authenticated) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          direction: "rtl"
        }}
      >
        <img alt={'wallpaper'} src={Wallpaper} style={{width: '100%', height: '100%', position: 'fixed', left: 0, top: 0}} />
        <DesktopDetector />
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {currentRoomNav === 0 ? (
            <Dashboard />
          ) : currentRoomNav === 1 ? (
            <SearchEngine />
          ) : currentRoomNav === 2 ? (
            <NewRequest setCurrentPage={setCurrentRoomNav} />
          ) : currentRoomNav === 3 ? (
            <Finance />
          ) : null}
        </div>
        <HomeBottomBar
          currentRoomNav={currentRoomNav}
          setCurrentRoomNav={setCurrentRoomNav}
        />
        <Drawer
          PaperProps={{
            style: {
              background: "transparent",
              boxShadow: "none",
            },
          }}
          anchor="bottom"
          style={{ position: "fixed" }}
          open={bottomSheetOpen}
          onClose={() => setBottomSheetOpen(false)}
        >
          <div style={{ margin: 32 }}>{bottomSheetContent}</div>
        </Drawer>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          direction: "rtl",
          backgroundColor: "#66b",
        }}
      >
        <DesktopDetector />
        <Auth />
      </div>
    );
  }
}

export default App;


//elisa

//aquatek
//123