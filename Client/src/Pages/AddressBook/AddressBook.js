import { Paper, MenuItem, Button, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

// label and input
import Label from "../../Components/Label";
import Input from "../../Components/Input";
// address Components
import Address from "./Address";
// all the table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

// usetheme
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

// using icons for table pageination
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

//province data
import { DATA } from "../../Store/Province";
import { Address_DATA } from "./AddressData";
// import axios
import axios from "axios";

function AddressBook() {
  // take from fetching data
  const [getAlladdress, setgetAlladdress] = useState([]);
  useEffect(() => {
    // fetching data
    // TODO
    axios.get().then().catch();
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  // this status usestate use for status management
  const [Status, setStatus] = useState([]);
  const [districts, setDistricts] = useState([]);
  // hide from the addnew address
  const [show, setshow] = useState(false);
  // using change the color after clicking
  const [buttoncolor, setbuttoncolor] = useState("#1A374D");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Address_DATA.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "open sans",
                fontWeight: "1000",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 20,
                my: 1.5,
              }}
            >
              Your Address
            </Typography>
          </Box>
          <br />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: "200", bgcolor: "#D8D8D8" }}
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
                    Address
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
                    Contact No
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
                    default
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
                    edit details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? Address_DATA.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : Address_DATA
                ).map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <Address data={row} />
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      3,
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={Address_DATA.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>

          <br />
          <Box mt={1} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setshow(true);
                setbuttoncolor("#D8D8D8");
              }}
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                textTransform: "none",
              }}
              style={{ backgroundColor: buttoncolor }}
            >
              Add New Address
            </Button>
          </Box>
          <br />
          {show && (
            <Box p={1} mt={2} sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Label for="full_name" title="Full Name" />
              <Input type="text" id="Full_Name" size="small" autoFocus={true} />
              <Label for="contact_number" title="Contact Number" />
              <Input
                type="text"
                id="contact_number"
                size="small"
                autoFocus={true}
              />
              {/* province */}
              <Label for="province" title="Province" />
              <Select
                sx={{ mb: 1, color: "#1597BB", fontWeight: "500" }}
                onChange={(event) => {
                  setDistricts(() => {
                    let data = DATA.filter((item, index) => {
                      return item.province === event.target.value;
                    });
                    return data[0].districts;
                  });
                }}
                fullWidth
                required
                size="small"
                color="info"
                id="province"
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
                      value={row.province}
                    >
                      {row.province}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* district */}
              <Label for="district" title="District" />
              <Select
                sx={{ mb: 1, color: "#1597BB", fontWeight: "500" }}
                fullWidth
                required
                size="small"
                color="info"
                id="district"
              >
                {districts.map((row, index) => {
                  return (
                    <MenuItem
                      key={index}
                      sx={{
                        fontFamily: "open sans",
                        fontSize: 15,
                        color: "#333",
                      }}
                      value={row}
                    >
                      {row}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* address */}
              <Label for="address" title="Address" />
              <Input
                id="address"
                multiple={true}
                minRows={3}
                maxRows={4}
                type="text"
                size="small"
              />
              <br />
              <Button
                variant="contained"
                size="small"
                onClick={() => {}}
                sx={{
                  fontFamily: "open sans",
                  fontWeight: "700",
                  textTransform: "none",
                  letterSpacing: 1.5,
                }}
              >
                Save
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </>
  );
}

// this function using for Pagination

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
//

export default AddressBook;
