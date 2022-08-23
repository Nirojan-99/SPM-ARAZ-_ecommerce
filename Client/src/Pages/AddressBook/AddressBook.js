import {
  colors,
  Grid,
  Paper,
  MenuItem,
  Typography,
  Button,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import Address from "./Address";
import Heading from "./Components/Heading";

//province data
import { DATA } from "../../Store/Province";

function AddressBook() {
  const [districts, setDistricts] = useState([]);
  const [show, setshow] = useState(false);
  const [buttoncolor, setbuttoncolor] = useState("#1A374D");
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          <Grid>
            <Box
              sx={{
                bgcolor: "#D8D8D8",
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-around",
                justifyContent: "space-between",
              }}
            >
              <Box p={1}>
                <Heading Name="Name" />
              </Box>
              <Box p={1}>
                <Heading Name="Address" />
              </Box>
              <Box p={1}>
                <Heading Name="Contact No" />
              </Box>
              <Box p={1}>
                <Heading Name="default" />
              </Box>
              <Box p={1}>
                <Heading Name="sasasa" />
              </Box>
            </Box>
          </Grid>
          <Grid>
            <Address />
            <Address />
            <Address />
            <Address />
          </Grid>
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

export default AddressBook;
