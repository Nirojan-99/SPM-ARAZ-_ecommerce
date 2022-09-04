import { Select, MenuItem } from "@mui/material";

import { useState } from "react";

import TableCell from "@mui/material/TableCell";

function Order_Product(Props) {
  const [Status, setStatus] = useState("processing");

  const SatatusDATA = [
    { status: "processing" },
    { status: "shipped" },
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
    </>
  );
}

export default Order_Product;
