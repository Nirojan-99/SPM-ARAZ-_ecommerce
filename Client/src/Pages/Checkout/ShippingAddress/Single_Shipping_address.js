import { Grid, Typography } from "@mui/material";

import { useState } from "react";
import Table from "@mui/material/Table";

import Checkbox from "@mui/material/Checkbox";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import { Box } from "@mui/system";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";

function SingleShippingAddress(props) {
  return (
    <>
      <Grid item p={5}>
        <Box>
          <Typography
            style={{
              justifyContent: "center",
              fontsize: 30,
              color: "#2B4865",
              textAlign: "left",
              fontWeight: 600,
              fontFamily: "open sans",
            }}
          >
            {props.data.name}
          </Typography>{" "}
          <Typography
            style={{
              justifyContent: "center",
              fontsize: 30,
              color: "#2B4865",
              textAlign: "left",
              fontWeight: 600,
              fontFamily: "open sans",
            }}
          >
            {props.data.province}
          </Typography>
          <Typography
            style={{
              justifyContent: "center",
              fontsize: 30,
              color: "#2B4865",
              textAlign: "left",
              fontWeight: 600,
              fontFamily: "open sans",
            }}
          >
            {props.data.district}
          </Typography>
          <Typography
            style={{
              justifyContent: "center",
              fontsize: 30,
              color: "#2B4865",
              textAlign: "left",
              fontWeight: 600,
              fontFamily: "open sans",
            }}
          >
            {props.data.contactNumber}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default SingleShippingAddress;
