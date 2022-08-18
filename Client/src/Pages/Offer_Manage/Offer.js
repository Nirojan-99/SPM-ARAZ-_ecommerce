import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//icon
import DeleteIcon from "@mui/icons-material/Delete";

//react
import { useState } from "react";
import ButtonA from "../../Components/ButtonA";

function Offer() {
  const [value, setValue] = useState(null);
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
            Manage Offer
          </Typography>
          {/* form */}
          <Box
            sx={{ bgcolor: "#fff" }}
            px={3}
            pt={3}
            pb={2}
            my={2}
            mb={7}
            component={Paper}
            elevation={1}
          >
            {/* discount persentage */}
            <Label for="offer_persentage" title="Discount Persentage" />
            <Input
              id="offer_persentage"
              autoFocus={true}
              size="small"
              type="number"
            />
            {/* valid period */}
            <Label for="valid_date" title="Valid Until" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                disablePast
                renderInput={(params) => (
                  <TextField
                    color="info"
                    inputProps={{
                      style: { color: "#1597BB", fontWeight: "500" },
                    }}
                    id="valid_date"
                    fullWidth
                    size="small"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            {/* new price auto generate */}
            <Box sx={{ mb: 1 }} />
            <Label for="new_price" title="New Price (Auto Generate)" />
            <Input disabled={true} id="new_price" size="small" type="number" />
            {/* button */}
            <ButtonA fullWidth={true} title="SAVE" />
            {/* delete button sec */}
            <Box
              mt={1.5}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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

export default Offer;
