"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PendingPayment from "./pendingpayment";
import ApprovedPayment from "./approvedpayment";
import RejectedPayment from "./rejectedpayment";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(children, "children");
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Asesi() {
  const [value, setValue] = React.useState(0);
  console.log(value, "value");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Approved" {...a11yProps(1)} />
          <Tab label="Rejected" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div hidden={value !== 0}>
        <PendingPayment />
      </div>
      <div hidden={value !== 1}>
        <ApprovedPayment />
      </div>
      <div hidden={value !== 2}>
        <RejectedPayment />
      </div>
    </Box>
  );
}

// export default function Asesi() {
//   return <p>aseso</p>;
// }
