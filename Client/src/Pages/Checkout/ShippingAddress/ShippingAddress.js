import { Button, Grid, Paper, Typography, Pagination } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import { Address_DATA } from "../../AddressBook/AddressData";
import SingleShippingAddress from "./Single_Shipping_address";

import Radio from "@mui/material/Radio";
import { useState } from "react";

function ShippingAddress() {
  const [selectedValue, setSelectedValue] = useState("1");
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
      <Box
        p={3}
        sx={{
          borderRadius: "6px",
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid container>
          <Box
            p={3}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
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
                Default Shipping Address
              </Typography>
            </Box>
            <Box mt={1}>
              <Button
                variant="outlined"
                sx={{
                  textAlign: { sm: "left", xs: "right" },
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8D874",
                  },
                }}
              >
                add new Shipping Address
              </Button>
            </Box>
          </Box>

          <Box
            p={2}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              borderRadius: "20px",
              // bgcolor: "#E8E5E5",
              justifyContent: "center",
            }}
          >
            <Box sx={{}}>
              <Grid
                container
                p={2}
                m={2}
                spacing={2}
                sx={{
                  width: "92%",
                  border: 0,
                  borderRadius: "6px",
                  // bgcolor: "#D8D8D8",
                  justifyContent: "center",
                }}
              >
                {Address_DATA.map((row, index) => (
                  <Grid
                    item
                    m={2}
                    key={index}
                    sx={{
                      // width: { xs: "100%",md:"50%" },
                      justifyContent: "center",
                      // width: "100%",
                      borderRadius: "10px",
                      border: "3px solid #406882",
                      "&:hover": {
                        transform: "scale(1.01)",
                        bgcolor: "#D8D874",
                        transitionDuration: ".2s",
                        transitionProperty: "all",
                      },
                    }}
                  >
                    <Radio
                      {...controlProps(row._id)}
                      sx={{ marginTop: "8px", color: "#406882" }}
                    />
                    <SingleShippingAddress data={row} />
                  </Grid>
                ))}
              </Grid>
              {/* pagination */}
              <Box
                my={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  shape="rounded"
                  count={5}
                  color="primary"
                  // onChange={handleChange}
                />
              </Box>
            </Box>
          </Box>

          <Box
            p={3}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", sm: "row", xs: "row" },
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Box>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                }}
              >
                Next
              </Button>
            </Box>
            <Box ml={1} pl={1}>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default ShippingAddress;
