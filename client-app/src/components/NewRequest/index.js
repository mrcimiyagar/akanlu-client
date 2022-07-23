import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import WhiteColorTextField from "../WhiteColorTextField";
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Slide,
  TextField,
} from "@material-ui/core";
import { Card, Dialog, Divider, IconButton, Typography } from "@mui/material";
import Done from "@material-ui/icons/Done";
import DropDown from "../DropDown";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ServicesTransfers from "../ServicesTransfers";
import { setBottomSheetContent, setBSO } from "../../App";
import RoomProfileComponent from "../RoomProfileComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgba(255, 255, 255, 0.5)",
    },
  },
}));

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

export default function NewRequest(props) {
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());
  const [open, setOpen] = React.useState(true);
  const [hotels, setHotels] = React.useState([]);
  const [rooms, setRooms] = React.useState([]);
  const [selectedHotelId, setSelectedHotelId] = React.useState(0);
  const [selectedRoomId, setSelectedRoomId] = React.useState(0);
  const [selectedCountryId2, setSelectedCountryId2] = React.useState(0);
  const [selectedCityId2, setSelectedCityId2] = React.useState(0);
  const [countries, setCountries] = React.useState([]);
  const [cities2, setCities2] = React.useState([]);
  const [selectedRoom, setSelectedRoom] = React.useState({});
  const [extraEnabled, setExtraEnabled] = React.useState(false);
  const [cwbEnabled, setCwbEnabled] = React.useState(false);
  const [cnbEnabled, setCnbEnabled] = React.useState(false);
  const [extraChecked, setExtraChecked] = React.useState(false);
  const [cwbChecked, setCwbChecked] = React.useState(false);
  const [cnbChecked, setCnbChecked] = React.useState(false);
  let classes = useStyles();
  useEffect(() => {
    let roomType = "0";
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id === selectedRoomId) {
        roomType = rooms[i].type;
        break;
      }
    }
    if (extraChecked) {
      setCwbEnabled(false);
    }
    if (roomType !== "3") {
      if (cwbChecked) {
        setExtraEnabled(false);
      } else {
        setExtraEnabled(true);
      }
    }
    if (roomType === "1" || roomType === "2") {
      setCwbEnabled(true);
      setExtraEnabled(true);
    } else if (roomType === "3") {
      setCwbEnabled(true);
      setExtraEnabled(false);
    } else {
      setCwbEnabled(true);
      setExtraEnabled(true);
    }
  }, [selectedRoomId, extraChecked, cwbChecked, cnbChecked]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://akanlu.com:5001/api/Hotels/GetAllCountries", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.forEach((country) => {
          country.id = country.countryID;
          country.title = country.countryName;
        });
        setCountries(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    if (selectedCountryId2 !== 0) {
      setBSO(false);
      setTimeout(() => {
        setBottomSheetContent(null);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://akanlu.com:5001/api/Hotels/GetAllCities/?countryid=" +
            selectedCountryId2,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            result.forEach((city) => {
              city.id = city.cityID;
              city.title = city.cityName;
            });
            setCities2(result);
          })
          .catch((error) => console.log("error", error));
      }, 250);
    }
  }, [selectedCountryId2]);
  useEffect(() => {
    if (selectedCityId2 !== 0) {
      setBSO(false);
      setTimeout(() => {
        setBottomSheetContent(null);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://akanlu.com:5001/api/Hotels/GetCityHotels/?cityid=" +
            selectedCityId2,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            result.forEach((hotel) => {
              hotel.id = hotel.hotelID;
              hotel.title = hotel.hotelName;
            });
            setHotels(result);
          })
          .catch((error) => console.log("error", error));
      }, 250);
    }
  }, [selectedCityId2]);
  useEffect(() => {
    if (selectedHotelId !== 0) {
      setBSO(false);
      setTimeout(() => {
        setBottomSheetContent(null);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://akanlu.com:5001/api/Hotels/GetHotelRoomsByHotelId/?hotelid=" +
            selectedHotelId,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            result.forEach((room) => {
              room.id = room.roomID;
              room.title = room.roomName;
              room.type = room.roomType;
            });
            setRooms(result);
          })
          .catch((error) => console.log("error", error));
      }, 250);
    }
  }, [selectedHotelId]);
  return (
    <Dialog
      style={{ position: "fixed", left: 0, top: 0 }}
      open={open}
      TransitionComponent={Transition}
      fullScreen
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          height: "100%",
          position: "relative",
          backdropFilter: "blur(10px)",
          background: "rgba(1255, 255, 255, 0.5)",
          overflowY: "auto",
        },
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          width: "100%",
          minHeight: 64,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography style={{ marginTop: 24 }}>New Request</Typography>
        <IconButton
          style={{ position: "fixed", left: 16, top: 12 }}
          onClick={() => {
            setOpen(false);
            setTimeout(() => {
              props.setCurrentPage(0);
            }, 250);
          }}
        >
          <Done style={{ fill: "#fff" }} />
        </IconButton>
      </div>
      <Typography
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          minHeight: 56,
          padding: 16,
          marginTop: 16,
        }}
      >
        Hotel Information
      </Typography>
      <DropDown
        items={countries}
        compId={"countries"}
        label={"Country"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {
          setSelectedCountryId2(id);
        }}
      />
      <DropDown
        items={cities2}
        compId={"cities"}
        label={"City"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {
          setSelectedCityId2(id);
        }}
      />
      <DropDown
        items={hotels}
        compId={"hotels"}
        label={"Hotel"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {
          setSelectedHotelId(id);
        }}
      />
      <DropDown
        items={rooms}
        compId={"rooms"}
        label={"Room"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {
          setSelectedRoomId(id);
          for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].id === id) {
              setSelectedRoom(rooms[i]);
              break;
            }
          }
        }}
      />
      <FormControlLabel
        control={<Checkbox id={"extra"} style={{ marginLeft: 16 }} />}
        label={"On Request"}
      />

      <Typography
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          minHeight: 56,
          padding: 16,
          marginTop: 16,
        }}
      >
        Room Information
      </Typography>
      <div
        style={{
          minHeight: 14 * (24 + 16) + 350,
        }}
      >
        <RoomProfileComponent room={selectedRoom} />
      </div>

      <Typography
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          minHeight: 56,
          padding: 16,
          marginTop: 16,
        }}
      >
        Select Check In & Check Out
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="From"
          inputFormat="MM/dd/yyyy"
          value={from}
          onChange={setFrom}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={"filled"}
              style={{
                marginTop: 32,
                marginLeft: 16,
                width: "calc(100% - 32px)",
              }}
            />
          )}
        />
        <br />
        <MobileDatePicker
          label="To"
          inputFormat="MM/dd/yyyy"
          value={to}
          onChange={setTo}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={"filled"}
              style={{
                marginTop: 0,
                marginLeft: 16,
                width: "calc(100% - 32px)",
              }}
            />
          )}
        />
      </LocalizationProvider>

      <DropDown
        items={[
          { title: "0", id: 0 },
          { title: selectedRoom.roomType, id: Number(selectedRoom.roomType) },
        ]}
        compId={"adult"}
        label={"Adult"}
        marginLeft={16}
        marginRight={16}
        marginTop={32}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {}}
      />

      <DropDown
        disabled={!extraEnabled}
        items={[
          { id: 0, title: "0" },
          { id: 1, title: "1" },
        ]}
        compId={"extra"}
        label={"Extra"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {}}
      />

      <DropDown
        disabled={!cwbEnabled}
        items={[
          { id: 0, title: "0" },
          { id: 1, title: "1" },
        ]}
        compId={"cwb"}
        label={"CWB"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {}}
      />

      <DropDown
        disabled={!cnbEnabled}
        items={[
          { id: 0, title: "0" },
          { id: 1, title: "1" },
        ]}
        compId={"cnb"}
        label={"CNB"}
        marginLeft={16}
        marginRight={16}
        marginTop={16}
        width={"calc(100% - 32px)"}
        onItemSelected={(id) => {}}
      />

      <Typography
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          minHeight: 56,
          padding: 16,
          marginTop: 16,
        }}
      >
        Room Status
      </Typography>
      <Card
        style={{
          width: "calc(100% - 32px)",
          minHeight: 200,
          marginLeft: 16,
          marginTop: 32,
          display: "flex",
          borderRadius: 16,
        }}
      >
        <Typography
          style={{ width: "45%", textAlign: "center", marginTop: 32 }}
        >
          Date
          <br />
          <Divider
            style={{ marginTop: 16, marginBottom: 16, marginLeft: 16 }}
          />
          Status
          <br />
          <Divider
            style={{ marginTop: 16, marginBottom: 16, marginLeft: 16 }}
          />
          Supply
          <br />
        </Typography>
        <div
          style={{
            width: 1,
            height: "100%",
            backgroundColor: "#333",
            marginLeft: 16,
          }}
        />
        <Typography
          style={{ width: "45%", textAlign: "center", marginTop: 32 }}
        >
          -
          <br />
          <Divider
            style={{ marginTop: 16, marginBottom: 16, marginLeft: 16 }}
          />
          -
          <br />
          <Divider
            style={{ marginTop: 16, marginBottom: 16, marginLeft: 16 }}
          />
          -
          <br />
        </Typography>
      </Card>

      <Card
        style={{
          marginTop: 32,
          marginLeft: 16,
          width: "calc(100% - 32px)",
          minHeight: 300,
        }}
      >
        <ServicesTransfers />
      </Card>

      <div style={{ width: "100%", minHeight: 225 }} />
    </Dialog>
  );
}
