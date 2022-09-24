import { Box, Button, MenuItem, Paper, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ButtonA from "../../Components/ButtonA";
import Input from "../../Components/Input";
import Label from "../../Components/Label";

//province data
import { DATA } from "../../Store/Province";

//icon
import DeleteIcon from "@mui/icons-material/Delete";

function RegisterStore() {
  //state
  const [districts, setDistricts] = useState([]);

  //submit
  const

  return (
    <>
      <Box>
        <Container maxWidth="sm">
          {/* title */}
          <Typography
            sx={{
              fontFamily: "open sans",
              fontWeight: "1000",
              color: "#2B4865",
              letterSpacing: -0.9,
              fontSize: 18,
              my: 1.5,
            }}
          >
            Register Store
          </Typography>
          <Box component={Paper} sx={{ bgcolor: "#fff" }} p={3} my={2.5}>
            {/* store name */}
            <Label title="Store Name" for="store_name" />
            <Input id="store_name" autoFocus={true} size="small" type="text" />
            {/* contact number */}
            <Label title="Contact Number" for="contact_number" />
            <Input
              id="contact_number"
              size="small"
              placeholder="07xxxxxxxx"
              type="number"
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
            {/* bank name */}
            <Label for="bank_name" title="Bank Name" />
            <Input id="bank_name" type="text" size="small" />
            {/* account number */}
            <Label for="account_number" title="Account Number" />
            <Input id="account_number" type="number" size="small" />
            {/* save button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SAVE" />
            <Box mt={2} />
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "open sans",
                  fontWeight: "700",
                  textTransform: "none",
                }}
                color="error"
                endIcon={<DeleteIcon />}
              >
                DELETE
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default RegisterStore;
