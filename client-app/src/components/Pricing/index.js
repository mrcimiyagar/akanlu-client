import { Avatar, Paper, Slide, Typography } from "@material-ui/core";
import { Checkbox, Dialog, Fab, FormControlLabel, IconButton, TextField } from "@mui/material";
import React, { useEffect } from "react";
import RequestsTable from "../RequestsTable";
import Close from "@mui/icons-material/Close";
import { AttachMoney, Search } from "@material-ui/icons";
import DropDown from "../DropDown";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Pricing(props) {
  const [hotels, setHotels] = React.useState([]);
  const [rooms, setRooms] = React.useState([]);
  const [selectedHotelId, setSelectedHotelId] = React.useState(0);
  const [selectedRoomId, setSelectedRoomId] = React.useState(0);
  const [cities2, setCities2] = React.useState([]);
  const [from, setFromInner] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());
  const setFrom = (dt) => {
    setFromInner(dt);
    let dtTo = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    dtTo.setDate(dtTo.getDate() + 1);
    setTo(dtTo);
  };
  const [selectedCountryId2, setSelectedCountryId2] = React.useState(0);
  const [selectedCityId2, setSelectedCityId2] = React.useState(0);
  const [initial, setInitial] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const [extraEnabled, setExtraEnabled] = React.useState(false);
  const [cwbEnabled, setCwbEnabled] = React.useState(false);
  const [cnbEnabled, setCnbEnabled] = React.useState(false);
  const [extraChecked, setExtraChecked] = React.useState(false);
  const [cwbChecked, setCwbChecked] = React.useState(false);
  const [cnbChecked, setCnbChecked] = React.useState(false);
  const [updateToggle, setUpdateToggle] = React.useState(false);
  const [priceData, setPriceData] = React.useState(undefined);

  useEffect(() => {
    if (props.open) {

    }
  }, [props.open]);

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
    setUpdateToggle(!updateToggle);
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
    }
  }, [selectedCountryId2]);

  useEffect(() => {
    if (selectedCityId2 !== 0) {
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
    }
  }, [selectedCityId2]);

  useEffect(() => {
    if (selectedHotelId !== 0) {
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
    }
  }, [selectedHotelId]);

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
        <div style={{ width: "100%", height: '100%' }}>
          <Fab
            color={"secondary"}
            style={{
              zIndex: 99999,
              position: "absolute",
              left: 16,
              bottom: 16
            }}
            onClick={() => {
              var month = from.getUTCMonth() + 1;
              var day = from.getUTCDate();
              var year = from.getUTCFullYear();
              let fromDate =
                year +
                "-" +
                (month < 10 ? "0" : "") +
                month +
                "-" +
                (day < 10 ? "0" : "") +
                day;

              month = to.getUTCMonth() + 1;
              day = to.getUTCDate();
              year = to.getUTCFullYear();
              let toDate =
                year +
                "-" +
                (month < 10 ? "0" : "") +
                month +
                "-" +
                (day < 10 ? "0" : "") +
                day;

              var requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(
                `https://akanlu.com:5001/api/Hotels/HotelPricingInquery/?hotelid=${selectedHotelId}&roomid=${selectedRoomId}&checkin=${fromDate}&checkout=${toDate}&username=${localStorage.getItem(
                  "username"
                )}&password=${localStorage.getItem("password")}&cnb=${cnbChecked ? 1 : 0
                }&cwb=${cwbChecked ? 1 : 0}&extra=${extraChecked ? 1 : 0}`,
                requestOptions
              )
                .then((response) => response.json())
                .then((result) => {
                  setPriceData(result);
                })
                .catch((error) => console.log("error", error));
            }}
          >
            <Search />
          </Fab>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflowY: "auto"
            }}
          >
            <TextField
              id="profileEditFirstName"
              variant={"outlined"}
              label={"جستجوی هتل"}
              style={{
                marginLeft: 16,
                marginRight: 16,
                width: "calc(100% - 32px)",
              }}
            />
            <DropDown
              compId={"countries"}
              label={"کشور"}
              items={countries}
              defaultSelection={selectedCountryId2}
              marginLeft={16}
              marginRight={16}
              marginTop={16}
              width={"calc(100% - 32px)"}
              onItemSelected={(id) => {
                setSelectedCountryId2(id);
              }}
            />
            <DropDown
              compId={"cities"}
              label={"شهر"}
              items={cities2}
              defaultSelection={selectedCityId2}
              marginLeft={16}
              marginRight={16}
              marginTop={16}
              width={"calc(100% - 32px)"}
              onItemSelected={(id) => {
                setSelectedCityId2(id);
              }}
            />
            <DropDown
              compId={"hotels"}
              label={"هتل"}
              items={hotels}
              defaultSelection={selectedHotelId}
              marginLeft={16}
              marginRight={16}
              marginTop={16}
              width={"calc(100% - 32px)"}
              onItemSelected={(id) => {
                setSelectedHotelId(id);
              }}
            />
            <DropDown
              compId={"rooms"}
              label={"اتاق"}
              items={rooms}
              defaultSelection={selectedRoomId}
              marginLeft={16}
              marginRight={16}
              marginTop={16}
              width={"calc(100% - 32px)"}
              onItemSelected={(id) => {
                setSelectedRoomId(id);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="از تاریخ"
                inputFormat="MM/dd/yyyy"
                value={from}
                onChange={setFrom}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant={"filled"}
                    style={{
                      marginTop: 16,
                      marginLeft: 16,
                      width: "calc(100% - 32px)",
                    }}
                  />
                )}
              />
              <br />
              <MobileDatePicker
                label="تا تاریخ"
                inputFormat="MM/dd/yyyy"
                value={to}
                onChange={setTo}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant={"filled"}
                    style={{
                      marginTop: 16,
                      marginLeft: 16,
                      width: "calc(100% - 32px)",
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            <FormControlLabel
              control={
                <Checkbox
                  id={"extra"}
                  disabled={!extraEnabled}
                  checked={extraChecked}
                  onChange={(event) => {
                    setExtraChecked(event.target.checked);
                  }}
                  style={{ marginLeft: 16 }}
                />
              }
              label={"Extra Bed"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  id={"cwb"}
                  disabled={!cwbEnabled}
                  checked={cwbChecked}
                  onChange={(event) => {
                    setCwbChecked(event.target.checked);
                  }}
                />
              }
              label={"CWB"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  id={"cnb"}
                  disabled={!cnbEnabled}
                  checked={cnbChecked}
                  onChange={(event) => {
                    setCnbChecked(event.target.checked);
                  }}
                />
              }
              label={"CNB"}
            />
            <div style={{ width: "100%", height: 112 }} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
