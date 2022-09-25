import { Button, Grid, Paper, Typography, Pagination } from "@mui/material";
import { Box } from "@mui/system";
// import { Address_DATA } from "../../AddressBook/AddressData";
import SingleShippingAddress from "./Single_Shipping_address";

import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import ShippingAddress_Form from "./ShippingAddress_Form";
import axios from "axios";
import { useSelector } from "react-redux";

function ShippingAddress(props) {
  const [shipping, setshipping] = useState();
  const [empty, setempty] = useState("");
  console.log("welcome");
  const { products } = useSelector((state) => state.order);
  console.log(products);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/User/shippingAddress/63187f6429fe6a6deecec979"
      )
      .then((res) => {
        // if (res.data.msg == "get") {
        console.log(res.data.address);
        setshipping(res.data.address);
        // } else {
        //   console.log("empty");
        // }
      })
      .catch(() => {});
  }, []);
  const [hideshippingaddress, sethideshippingaddress] = useState(false);
  const [show, setshow] = useState(true);
  const [selectedValue, setSelectedValue] = useState("1");

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
          {show && (
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
                  onClick={() => {
                    sethideshippingaddress(true);
                    setshow(false);
                  }}
                >
                  Add New Shipping Address
                </Button>
              </Box>
            </Box>
          )}

          {hideshippingaddress ? (
            <ShippingAddress_Form />
          ) : (
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
                  {/* {Address_DATA.map((row, index) => ( */}
                  {shipping.map((row, index) => {
                    return (
                      <Grid
                        item
                        my={2}
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
                          {...controlProps(index)}
                          sx={{ marginTop: "8px", color: "#406882" }}
                        />
                        <SingleShippingAddress data={row} />
                        {/* <Grid item p={5}>
                          <Box>
                            <Typography
                              style={{
                                justifyContent: "center",
                                fontsize: 30,
                                color: "#2B4865",
                                textAlign: "left",
                                fontWeight: 600,
                                fontFamily: "open sans",
                              }}
                            >
                              {row.name}
                            </Typography>{" "}
                            <Typography
                              style={{
                                justifyContent: "center",
                                fontsize: 30,
                                color: "#2B4865",
                                textAlign: "left",
                                fontWeight: 600,
                                fontFamily: "open sans",
                              }}
                            >
                              {row.province}
                            </Typography>
                            <Typography
                              style={{
                                justifyContent: "center",
                                fontsize: 30,
                                color: "#2B4865",
                                textAlign: "left",
                                fontWeight: 600,
                                fontFamily: "open sans",
                              }}
                            >
                              {row.district}
                            </Typography>
                            <Typography
                              style={{
                                justifyContent: "center",
                                fontsize: 30,
                                color: "#2B4865",
                                textAlign: "left",
                                fontWeight: 600,
                                fontFamily: "open sans",
                              }}
                            >
                              {row.contactNumber}
                            </Typography>
                          </Box>
                        </Grid> */}
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          )}

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
            <Box></Box>
            <Box ml={1} pl={1}>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                }}
                onClick={props.handleNext}
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
