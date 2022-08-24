import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import { Address_DATA } from "../../AddressBook/AddressData";
import SingleShippingAddress from "./Single_Shipping_address";

import Radio from "@mui/material/Radio";
import { useState } from "react";

// all the table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
function ShippingAddress() {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{
            // width: "123vh",
            borderRadius: "6px",
            bgcolor: "#FFFFFF",
          }}
        >
          <Box>
            <Typography
              p={2}
              style={{
                fontsize: 25,
                color: "#2B4865",
                textAlign: "left",
                fontWeight: "1000",
                fontFamily: "open sans",
              }}
            >
              Default Shipping Address
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box p={5} sx={{}}>
              <TableContainer component={Paper}>
                <Table
                  size="medium"
                  sx={{ minWidth: "100", bgcolor: "#D8D8D8" }}
                  aria-label="caption table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "open sans",
                          fontWeight: "800",
                          fontSize: 16,
                          color: "#1A374D",
                        }}
                      >
                        Options
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "open sans",
                          fontWeight: "800",
                          fontSize: 16,
                          color: "#1A374D",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "open sans",
                          fontWeight: "800",
                          fontSize: 16,
                          color: "#1A374D",
                        }}
                      >
                        Province
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "open sans",
                          fontWeight: "800",
                          fontSize: 16,
                          color: "#1A374D",
                        }}
                      >
                        Districts
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          fontFamily: "open sans",
                          fontWeight: "800",
                          fontSize: 16,
                          color: "#1A374D",
                        }}
                      >
                        Contact Number
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Address_DATA.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <Radio
                          {...controlProps(row._id)}
                          sx={{ marginTop: "8px" }}
                        />
                        <SingleShippingAddress data={row} />
                        <br />
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Button>addnew</Button>
            </Box>

            <Box>
              <Button>addnew</Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default ShippingAddress;
