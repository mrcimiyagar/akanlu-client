import { Checkbox, Fab, FormControlLabel, IconButton } from "@material-ui/core";
import RequestPage from "@mui/icons-material/RequestPage";
import React, { useEffect } from "react";
import DashboardCard from "../DashboardCard";
import DashboardCardTag from "../DashboardCardTag";
import ProfileTag from "../ProfileTag";
import Notifications from "@mui/icons-material/Notifications";
import Requests from "../Requests";
import DashboardCardInfo from "../DashboardCardInfo";
import RequestDetails from "../RequestDetails";
import Voucher from "../Voucher";
import { AttachMoney } from "@material-ui/icons";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { setBottomSheetContent, setBSO } from "../../App";
import DropDown from "../DropDown";
import { Avatar, Paper, TextField } from "@material-ui/core";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SearchIcon from "@material-ui/icons/Search";
import RequestsIcon from "../../images/request.png";
import TodayRequestsIcon from "../../images/today.png";
import FaqIcon from "../../images/faq.png";
import AboutUsIcon from "../../images/about-us.png";
import ContactUsIcon from "../../images/contact-us.png";
import ContactUs from "../ContactUs";
import FAQ from "../FAQ";
import AboutUs from "../AboutUs";
import PriceDialog from "../PriceDialog";

export default function Dashboard(props) {
  const [hotels, setHotels] = React.useState([]);
  const [rooms, setRooms] = React.useState([]);
  const [selectedHotelId, setSelectedHotelId] = React.useState(0);
  const [selectedRoomId, setSelectedRoomId] = React.useState(0);
  const [aboutUsOpen, setAboutUsOpen] = React.useState(false);
  const [faqOpen, setFaqOpen] = React.useState(false);
  const [contactUsOpen, setContactUsOpen] = React.useState(false);
  const [requestsOpen, setRequestsOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [voucherOpen, setVoucherOpen] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = React.useState(false);
  const [cities2, setCities2] = React.useState([]);
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());
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
  const [isInitialOfProiceDialog, setIsInitialOfPriceDialog] =
    React.useState(true);

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
    let extra = document.getElementById("extra");
    let cwb = document.getElementById("cwb");
    let cnb = document.getElementById("cnb");
    if (extra !== null) extra.disabled = true;
    if (cwb !== null) cwb.disabled = true;
    if (cnb !== null) cnb.disabled = true;
    setBSO(false);
    setBottomSheetContent(null);
    setTimeout(() => {
      if (isInitialOfProiceDialog) {
        setIsInitialOfPriceDialog(false);
      } else {
        setBottomSheetContent(priceQuestionPane);
        setBSO(true);
      }
    }, 250);
  }, [extraEnabled, cwbEnabled, cnbEnabled, updateToggle]);

  const priceQuestionPane = (
    <div style={{ width: "100%", height: 500 }}>
      <Avatar
        style={{
          zIndex: 99999,
          width: 150,
          height: 150,
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -72px)",
        }}
      >
        <AttachMoneyIcon style={{ width: 96, height: 96 }} />
      </Avatar>
      <Fab
        color={"secondary"}
        style={{
          zIndex: 99999,
          position: "absolute",
          left: "calc(50% - 125px)",
          transform: "translate(-50%, -28px)",
        }}
        onClick={() => {
          setBSO(false);
          setTimeout(() => {
            setBottomSheetContent(null);
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
              )}&password=${localStorage.getItem("password")}&cnb=${
                cnbChecked ? 1 : 0
              }&cwb=${cwbChecked ? 1 : 0}&extra=${extraChecked ? 1 : 0}`,
              requestOptions
            )
              .then((response) => response.json())
              .then((result) => {
                setPriceData(result);
              })
              .catch((error) => console.log("error", error));
          }, 250);
        }}
      >
        <SearchIcon />
      </Fab>
      <Paper
        style={{
          borderRadius: "24px 24px 24px 24px",
          width: "100%",
          height: "calc(100% - 75px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          overflowY: "auto",
          marginTop: 112,
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

  useEffect(() => {
    if (initial === false) {
      setInitial(true);
    } else {
      setBSO(false);
      setBottomSheetContent(null);
      setTimeout(() => {
        setBottomSheetContent(priceQuestionPane);
        setBSO(true);
      }, 500);
    }
  }, [from, to]);
  useEffect(() => {
    if (cities2.length > 0) {
      setBottomSheetContent(priceQuestionPane);
      setBSO(true);
    }
  }, [cities2]);
  useEffect(() => {
    if (hotels.length > 0) {
      setBottomSheetContent(priceQuestionPane);
      setBSO(true);
    }
  }, [hotels]);
  useEffect(() => {
    if (rooms.length > 0) {
      setBottomSheetContent(priceQuestionPane);
      setBSO(true);
    }
  }, [rooms]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        overflow: "auto",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProfileTag zIndex={2} />

      <Fab
        color={"secondary"}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          position: "fixed",
          left: 32,
          top: 32,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          zIndex: 2,
        }}
        onClick={() => {
          setBottomSheetContent(priceQuestionPane);
          setBSO(true);
        }}
      >
        <AttachMoney style={{ fill: "#000" }} />
      </Fab>

      <div style={{ width: "100%", height: 72 }} />

      <DashboardCard
        backgroundColor={
          "linear-gradient(135deg, rgba(65, 88, 208, 0.5) 0%, rgba(200, 80, 192, 0.5) 46%, rgba(255, 204, 112, 0.5) 100%)"
        }
        zIndex={1}
        onClick={() => {
          setRequestsOpen(true);
        }}
      >
        <Avatar
          style={{ width: "100%", height: "100%", padding: 24 }}
          src={RequestsIcon}
        />
      </DashboardCard>

      <DashboardCard
        backgroundColor={
          "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(98, 132, 255, 0.5) 50%, rgba(255, 0, 0, 0.5) 100%)"
        }
        zIndex={1}
        onClick={() => {
          setRequestsOpen(true);
        }}
      >
        <Avatar
          style={{ width: "100%", height: "100%", padding: 24 }}
          src={TodayRequestsIcon}
        />
      </DashboardCard>

      <DashboardCard
        backgroundColor={
          "linear-gradient(135deg, rgba(0, 219, 222, 0.5) 0%, rgba(252, 0, 255, 0.5) 100%)"
        }
        zIndex={1}
        onClick={() => {
          setFaqOpen(true);
        }}
      >
        <Avatar
          style={{ width: "100%", height: "100%", padding: 24 }}
          src={FaqIcon}
        />
      </DashboardCard>

      <DashboardCard
        backgroundColor={
          "linear-gradient(135deg, rgba(65, 88, 208, 0.5) 0%, rgba(200, 80, 192, 0.5) 46%, rgba(255, 204, 112, 0.5) 100%)"
        }
        zIndex={1}
        onClick={() => {
          setAboutUsOpen(true);
        }}
      >
        <Avatar
          style={{ width: "100%", height: "100%", padding: 24 }}
          src={AboutUsIcon}
        />
      </DashboardCard>

      <DashboardCard
        backgroundColor={
          "linear-gradient(135deg, rgba(0, 219, 222, 0.5) 0%, rgba(252, 0, 255, 0.5) 100%)"
        }
        zIndex={1}
        onClick={() => {
          setContactUsOpen(true);
        }}
      >
        <Avatar
          style={{ width: "100%", height: "100%", padding: 24 }}
          src={ContactUsIcon}
        />
      </DashboardCard>

      <Requests
        setOpen={setRequestsOpen}
        open={requestsOpen}
        onVoucherClicked={(id) => {
          setSelectedRequest(id);
          setVoucherOpen(true);
        }}
        onDetailsClicked={(id) => {
          setSelectedRequest(id);
          setDetailsOpen(true);
        }}
      />

      <RequestDetails
        setOpen={setDetailsOpen}
        open={detailsOpen}
        selectedId={selectedRequest}
      />

      <Voucher
        setOpen={setVoucherOpen}
        open={voucherOpen}
        selectedId={selectedRequest}
      />

      <ContactUs setOpen={setContactUsOpen} open={contactUsOpen} />

      <FAQ setOpen={setFaqOpen} open={faqOpen} />

      <AboutUs setOpen={setAboutUsOpen} open={aboutUsOpen} />

      <div style={{ width: "100%", height: 100 }} />

      {priceData !== undefined ? (
        <PriceDialog
          data={priceData}
          onClose={() => {
            setPriceData(undefined);
          }}
        />
      ) : null}
    </div>
  );
}
