import { Grid, Paper, Typography, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Label from "../../Components/Label";
import InputLabel from "@mui/material/InputLabel";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

function Order_Product(Props) {
  const [Status, setStatus] = useState("penting");

  const SatatusDATA = [
    { status: "penting" },
    { status: "shipping" },
    { status: "delivered" },
  ];
  return (
    <>
      <TableCell
        align="left"
        style={{
          fontFamily: "open sans",
          fontWeight: "600",
          fontSize: 16,
          color: "#1A374D",
        }}
      >
        {Props.data.product}
      </TableCell>
      <TableCell
        align="left"
        style={{
          fontFamily: "open sans",
          fontWeight: "600",
          fontSize: 16,
          color: "#1A374D",
        }}
      >
        {Props.data.qty}
      </TableCell>
      <TableCell
        align="left"
        style={{
          fontFamily: "open sans",
          fontWeight: "600",
          fontSize: 16,
          color: "#1A374D",
        }}
      >
        {Props.data.status}
      </TableCell>
      <TableCell
        align="left"
        style={{
          fontFamily: "open sans",
          fontWeight: "600",
          fontSize: 16,
          color: "#1A374D",
        }}
      >
        <Select
          sx={{ color: "#FFF", fontWeight: "500", bgcolor: "#406882" }}
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          fullWidth
          required
          size="small"
          color="info"
          id="Status"
          value={Status}
        >
          {SatatusDATA.map((row, index) => {
            return (
              <MenuItem
                key={index}
                sx={{
                  fontFamily: "open sans",
                  fontSize: 15,
                  color: "#333",
                }}
                value={row.status}
              >
                {row.status}
              </MenuItem>
            );
          })}
        </Select>
      </TableCell>

      {/* <Box>
          <Typography
            sx={{
              color: "#2B4865",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Product 1
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#1597BB",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Qty: 2
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#1597BB",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {Status}
          </Typography>
        </Box>
        <Box mt={-1}>
          <Select
            sx={{ color: "#1597BB", fontWeight: "500" }}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            fullWidth
            required
            size="small"
            color="info"
            id="Status"
            value={Status}
          >
            {DATA.map((row, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{
                    fontFamily: "open sans",
                    fontSize: 15,
                    color: "#333",
                  }}
                  value={row.status}
                >
                  {row.status}
                </MenuItem>
              );
            })}
          </Select>
        </Box> */}
    </>
  );
}

export default Order_Product;
