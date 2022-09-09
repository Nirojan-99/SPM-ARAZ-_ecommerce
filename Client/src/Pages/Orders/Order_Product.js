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
    </>
  );
}

export default Order_Product;
