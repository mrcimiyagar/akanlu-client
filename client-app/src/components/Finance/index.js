import { Card } from "@material-ui/core";
import React from "react";
import CreditCardImg from "../../images/credit-card.jpg";
import FinanceChart from "../FinanceChart";
import FinanceTabs from "../FinanceTabs";
import Invoices from "../Invoices";

export default function Finance(props) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleSelectedTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        overflow: "auto",
      }}
    >
      <FinanceTabs setSelectedTab={handleSelectedTabChange} selectedTab={selectedTab} />

      {selectedTab === 0 ? (
        <div style={{ width: "100%" }}>
          <Card
            style={{
              width: "calc(100% - 64px)",
              height: 200,
              marginTop: 32,
              marginLeft: 32,
              marginRight: 32,
              borderRadius: 16,
            }}
          >
            <img
              alt={"credit-card"}
              src={CreditCardImg}
              style={{ width: "100%", height: "100%" }}
            />
          </Card>

          <Card
            style={{
              width: "calc(100% - 64px)",
              marginLeft: 32,
              marginRight: 32,
              marginTop: 32,
              paddingTop: 32,
              paddingBottom: 32,
              borderRadius: 16,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            <FinanceChart />
          </Card>

          <Card
            style={{
              width: "calc(100% - 64px)",
              marginLeft: 32,
              marginRight: 32,
              marginTop: 32,
              paddingTop: 32,
              borderRadius: 16,
              paddingBottom: 32,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            <FinanceChart />
          </Card>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <Invoices invoices={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]} />
        </div>
      )}

      <div style={{ width: "100%", height: 100 }} />
    </div>
  );
}
