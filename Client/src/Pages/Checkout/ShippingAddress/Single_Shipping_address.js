import { Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import Table from "@mui/material/Table";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import { Box } from "@mui/system";
function SingleShippingAddress(props) {
  return (
    <>
      <TableCell align="justify">
        <Typography
          style={{
            fontsize: 20,
            color: "#2B4865",
            textAlign: "left",
            fontWeight: 500,
            fontFamily: "open sans",
          }}
        >
          {props.data.name}
        </Typography>
      </TableCell>
      <TableCell align="justify">
        {" "}
        <Typography
          style={{
            fontsize: 20,
            color: "#2B4865",
            textAlign: "left",
            fontWeight: 500,
            fontFamily: "open sans",
          }}
        >
          {props.data.Province}
        </Typography>
      </TableCell>
      <TableCell align="justify">
        <Typography
          style={{
            fontsize: 20,
            color: "#2B4865",
            textAlign: "left",
            fontWeight: 500,
            fontFamily: "open sans",
          }}
        >
          {props.data.districts}
        </Typography>
      </TableCell>
      <TableCell align="justify">
        <Typography
          style={{
            fontsize: 20,
            color: "#2B4865",
            textAlign: "left",
            fontWeight: 500,
            fontFamily: "open sans",
          }}
        >
          {props.data.contactnumber}
        </Typography>{" "}
      </TableCell>
    </>
  );
}

export default SingleShippingAddress;
