import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ProfileTag from "../ProfileTag";
import Requests from "../Requests";
import RequestDetails from "../RequestDetails";
import Voucher from "../Voucher";
import { Paper, TextField } from "@material-ui/core";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactUs from "../ContactUs";
import FAQ from "../FAQ";
import AboutUs from "../AboutUs";
import PriceDialog from "../PriceDialog";
import { Grid } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import Pricing from "../Pricing";
import Invoice from '../Invoice';
import { setBSO } from "../../App";

export default function Dashboard(props) {
  const [aboutUsOpen, setAboutUsOpen] = React.useState(false);
  const [faqOpen, setFaqOpen] = React.useState(false);
  const [contactUsOpen, setContactUsOpen] = React.useState(false);
  const [requestsOpen, setRequestsOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [voucherOpen, setVoucherOpen] = React.useState(false);
  const [invoiceOpen, setInvoiceOpen] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = React.useState(false);
  const [priceData, setPriceData] = React.useState(undefined);
  const [showPricing, setShowPricing] = React.useState(false);
  useEffect(() => setBSO(false), []);
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

      <div style={{ width: "100%", height: 72 }} />

      <Grid container spacing={1} style={{ direction: 'ltr', padding: 16, marginTop: 32 }}>
        <Grid item xs={7}>
          <Paper style={{
            display: 'flex',
            height: 112,
            borderRadius: 16,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background:
              "linear-gradient(315deg, rgba(25,118,210,1) 0%, rgba(3,168,244,0.5) 100%)",
          }}
            onClick={() => {
              setRequestsOpen(true);
            }}>
            <FeedIcon style={{ fill: '#fff', width: 40, height: 40 }} />
            <Typography style={{ marginLeft: 8, color: '#fff' }} variant={'h6'}>
              Requests
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper style={{
            display: 'flex',
            height: 112,
            borderRadius: 16,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background:
              "linear-gradient(315deg, rgba(230, 74, 25, 1) 0%, rgba(255, 87, 34, 0.5) 100%)",
          }}
            onClick={() => {
              setAboutUsOpen(true);
            }}>
            <InfoIcon style={{ fill: '#fff', width: 40, height: 40 }} />
            <Typography style={{ marginLeft: 8, color: '#fff' }} variant={'h6'}>
              About
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper style={{
            display: 'flex',
            height: 112,
            borderRadius: 16,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background:
              "linear-gradient(315deg, rgba(0, 121, 107, 1) 0%, rgba(0, 150, 136, 0.5) 100%)",
          }}
            onClick={() => {
              setFaqOpen(true);
            }}>
            <LiveHelpIcon style={{ fill: '#fff', width: 40, height: 40 }} />
            <Typography style={{ marginLeft: 8, color: '#fff' }} variant={'h6'}>
              FAQ
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper style={{
            display: 'flex',
            height: 112,
            borderRadius: 16,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background:
              "linear-gradient(315deg, rgba(81, 45, 168,1) 0%, rgba(103, 58, 183,0.5) 100%)",
          }}
          onClick={() => {
            setShowPricing(true);
          }}>
            <AttachMoneyIcon style={{ fill: '#fff', width: 40, height: 40 }} />
            <Typography style={{ marginLeft: 8, color: '#fff' }} variant={'h6'}>
              Pricing
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={7}>
          <Paper style={{
            display: 'flex',
            height: 112,
            borderRadius: 16,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background:
              "linear-gradient(315deg, rgba(245, 124, 0,1) 0%, rgba(255, 152, 0,0.5) 100%)",
          }}
            onClick={() => {
              setContactUsOpen(true);
            }}>
            <PhoneIcon style={{ fill: '#fff', width: 40, height: 40 }} />
            <Typography style={{ marginLeft: 8, color: '#fff' }} variant={'h6'}>
              Contact us
            </Typography>
          </Paper>
        </Grid>
      </Grid>

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
        onInvoiceClicked={(id) => {
          setSelectedRequest(id);
          setInvoiceOpen(true);
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

      <Invoice
        onClose={() => setInvoiceOpen(false)}
        show={invoiceOpen}
        selectedGUID={selectedRequest}
      />

      <ContactUs setOpen={setContactUsOpen} open={contactUsOpen} />

      <FAQ setOpen={setFaqOpen} open={faqOpen} />

      <AboutUs setOpen={setAboutUsOpen} open={aboutUsOpen} />

      <Pricing open={showPricing} setOpen={setShowPricing} />

      <div style={{ width: "100%", height: 100 }} />
    </div>
  );
}
