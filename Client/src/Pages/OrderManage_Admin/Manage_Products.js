import { Select, MenuItem } from "@mui/material";

import { useState } from "react";

import TableCell from "@mui/material/TableCell";

function Manage_Products(Props) {
  const [Status, setStatus] = useState(Props.data.orderStatus);

  const SatatusDATA = [
    { status: "Processing" },
    { status: "Shipped" },
    { status: "Delivered" },
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
        {Props.data.productID}
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
        {Props?.data?.count ?? "fdgg"}
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

export default Manage_Products;
