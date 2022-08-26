import { Paper, MenuItem, Button, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Label from "../../../Components/Label";
import Input from "../../../Components/Input";
import { DATA } from "../../../Store/Province";

function ShippingAddress_Form() {
  const [districts, setDistricts] = useState([]);
  return (
    <>
      <Box
        p={3}
        sx={{
          borderRadius: "6px",
          bgcolor: "#FFFFFF",
        }}
      >
        <Box>
          <Typography
            p={2}
            sx={{
              fontsize: { md: 45, xs: 25 },
              color: "#2B4865",
              textAlign: { md: "left", xs: "center" },
              fontWeight: "1000",
              fontFamily: "open sans",
            }}
          >
            ADD NEW SHIPPING ADDRESS
          </Typography>
        </Box>
        <Box p={3} mt={2} sx={{ display: "flex", flexDirection: "column" }}>
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
            ADD
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ShippingAddress_Form;
