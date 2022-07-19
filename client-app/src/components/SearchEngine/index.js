import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import SearchEngineSections from "../SearchEngineSections";
import DropDown from "../DropDown";
import { Avatar, Fab, Paper, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { setBottomSheetContent, setBSO } from "../../App";
import HotelsDialog from "../HotelsDialog";
import HotelProfileDialog from "../HotelProfileDialog";
import RoomProfileDialog from "../RoomProfileDialog";

export default function SearchEngine(props) {
  const [selectedCountryId, setSelectedCountryId] = React.useState(0);
  const [selectedCityId, setSelectedCityId] = React.useState(0);
  const [countries, setCountries] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [showHotels, setShowHotels] = React.useState(false);
  const [showHotelProfile, setShowHotelProfile] = React.useState(false);
  const [selectedHotel, setSelectedHotel] = React.useState(undefined);
  const [selectedRoom, setSelectedRoom] = React.useState(undefined);
  const [showSelectedRoom, setShowSelectedRoom] = React.useState(false);

  const searchPane = (
    <div style={{ width: "100%", height: 350 }}>
      <Avatar
        style={{
          zIndex: 99999,
          width: 150,
          height: 150,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <SearchIcon style={{ width: 96, height: 96 }} />
      </Avatar>
      <Fab
        color={"secondary"}
        style={{
          zIndex: 99999,
          position: "absolute",
          left: "calc(50% - 150px)",
          transform: "translate(-50%, 47px)",
        }}
        onClick={() => {
          setBSO(false);
          setTimeout(() => {
            setBottomSheetContent(null);
            setShowHotels(true);
          }, 250);
        }}
      >
        <SearchIcon />
      </Fab>
      <Paper
        style={{
          borderRadius: "24px 24px 0 0",
          width: "100%",
          height: "calc(100% - 75px)",
          position: "absolute",
          top: 100,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <TextField
          id="profileEditFirstName"
          variant={"outlined"}
          label={"جستجوی هتل"}
          style={{
            marginTop: 16 + 76 + 8,
            marginLeft: 16,
            marginRight: 16,
            width: "calc(100% - 32px)",
          }}
        />
        <DropDown
          compId={"countries"}
          label={"کشور"}
          items={countries}
          defaultSelection={selectedCountryId}
          marginLeft={16}
          marginRight={16}
          marginTop={16}
          width={"calc(100% - 32px)"}
          onItemSelected={(id) => {
            setSelectedCountryId(id);
          }}
        />
        <DropDown
          compId={"cities"}
          label={"شهر"}
          items={cities}
          defaultSelection={selectedCityId}
          marginLeft={16}
          marginRight={16}
          marginTop={16}
          width={"calc(100% - 32px)"}
          onItemSelected={(id) => {
            setSelectedCityId(id);
          }}
        />
      </Paper>
    </div>
  );

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

  const [searchBarFixed, setSearchBarFixed] = React.useState(false);

  useEffect(() => {
    const searchScrollView = document.getElementById("searchScrollView");
    searchScrollView.addEventListener(
      "scroll",
      function () {
        var st = searchScrollView.scrollTop;
        if (st > 16) {
          setSearchBarFixed(true);
        } else {
          setSearchBarFixed(false);
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    if (selectedCountryId !== 0) {
      setBSO(false);
      setTimeout(() => {
        setBottomSheetContent(null);
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://akanlu.com:5001/api/Hotels/GetAllCities/?countryid=" + selectedCountryId,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            result.forEach((city) => {
              city.id = city.cityID;
              city.title = city.cityName;
            });
            setCities(result);
          })
          .catch((error) => console.log("error", error));
      }, 250);
    }
  }, [selectedCountryId]);

  useEffect(() => {
    if (cities.length > 0) {
      setBottomSheetContent(searchPane);
      setBSO(true);
    }
  }, [cities]);

  useEffect(() => {
    if (selectedHotel !== undefined) {
      setShowHotelProfile(true);
    }
  }, [selectedHotel]);

  return (
    <div
      id="searchScrollView"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <SearchBar
        style={{
          transition:
            "margin-left .25s, margin-top .25s, margin-right .25s, width .25s",
          width: !searchBarFixed ? "calc(100% - 64px)" : "100%",
          marginLeft: searchBarFixed ? 0 : 32,
          marginRight: searchBarFixed ? 0 : 32,
          marginTop: 256,
          position: !searchBarFixed ? "relative" : "fixed",
          zIndex: 2,
        }}
        onClick={() => {
          setBottomSheetContent(searchPane);
          setBSO(true);
        }}
      />

      <HotelsDialog
        selectedCityId={selectedCityId}
        show={showHotels}
        onClose={() => setShowHotels(false)}
        onHotelSelected={(hotelId) => {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          fetch(
            "https://akanlu.com:5001/api/Hotels/GetHotelByHotelId/?hotelid=" + hotelId,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              setSelectedHotel(result[0]);
              setShowHotelProfile(true);
            })
            .catch((error) => console.log("error", error));
        }}
      />

      <HotelProfileDialog
        hotel={selectedHotel}
        show={showHotelProfile}
        onRoomSelected={room => {setSelectedRoom(room); setShowSelectedRoom(true);}}
        onClose={() => setShowHotelProfile(false)}
      />

      <RoomProfileDialog
        room={selectedRoom}
        show={showSelectedRoom}
        onClose={() => setShowSelectedRoom(false)}
      />
    </div>
  );
}
