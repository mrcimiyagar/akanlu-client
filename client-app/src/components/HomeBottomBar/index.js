import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Settings from "@material-ui/icons/Settings";
import DesktopMac from "@material-ui/icons/DesktopMac";
import TravelExplore from "@mui/icons-material/TravelExplore";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Add from "@mui/icons-material/Add";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

const useStylesAction = makeStyles({
  /* Styles applied to the root element. */
  root: {
    color: "#333",
    "&$selected": {
      color: "#000",
    },
  },
  /* Styles applied to the root element if selected. */
  selected: {},
});

export default function HomeBottomBar(props) {
  const classes = useStyles();
  const classesAction = useStylesAction();

  return (
    <BottomNavigation
      value={props.currentRoomNav}
      onChange={(event, newValue) => props.setCurrentRoomNav(newValue)}
      showLabels
      className={classes.root}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        width: "calc(100% - 48px)",
        height: 64,
        borderRadius: 24,
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: 350,
      }}
    >
      <BottomNavigationAction
        value={0}
        classes={classesAction}
        label="Dashboard"
        icon={<DesktopMac />}
      />
      <BottomNavigationAction
        value={2}
        classes={classesAction}
        label=""
        icon={
          <Fab color={"secondary"} style={{width: 112, marginTop: -56 }} variant={'extended'}>
            + Request
          </Fab>
        }
      />
      <BottomNavigationAction
        value={1}
        classes={classesAction}
        label="Hotels"
        icon={<TravelExplore />}
      />
    </BottomNavigation>
  );
}
