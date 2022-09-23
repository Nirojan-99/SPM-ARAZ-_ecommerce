import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function DefaultPayment(props) {
  payment = props.data;
  const total = useSelector((state) => state.order.total);

  const addPayment = () => {
    // props.handleNext()
     //add transaction
  };

  return (
    <>
      {isLoaded && payment !== null ? (
        <Box sx={{ px: { sm: 5, xs: 2 }, pt: 2 }}>
          <Box
            sx={{ bgcolor: "silver", borderRadius: 4 }}
            p={2}
            mt={1}
            mx={{ sm: 5, xs: 0 }}
          >
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontSize: 20,
                fontWeight: 900,
                color: "blue",
              }}
            >
              VISA
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontSize: 17,
                fontWeight: 700,
                color: "black",
                mt: 3,
              }}
            >
              ****{" "}
              {payment?.cardNumber.substring(payment?.cardNumber.length, -2)}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontSize: 17,
                fontWeight: 700,
                color: "black",
                mt: 1,
              }}
            >
              {payment.expiryMonth}/{payment.expiryYear}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontSize: 17,
                fontWeight: 700,
                color: "black",
                mt: 1,
                textAlign: "right",
              }}
            >
              {payment.nameOnCard}
            </Typography>
          </Box>
          {/* btn */}
          <Box mx={{ sm: 5, xs: 0 }}>
            <Button
              onClick={() => props.new()}
              disableTouchRipple
              disableRipple
              disableFocusRipple
              sx={{ textTransform: "none" }}
              color="info"
            >
              + add New Card
            </Button>
          </Box>
          {/* button */}
          <Box
            py={3}
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "row", xs: "row" },
              justifyContent: "space-between",
              px: { sm: 5, xs: 2 },
            }}
          >
            {/* button sec */}
            <Box>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                }}
                onClick={props.handleBack}
              >
                Back
              </Button>
            </Box>
            <Box ml={1}>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  fontWeight: "700",
                  fontFamily: "open sans",
                  textTransform: "none",
                }}
                onClick={addPayment}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      ) : // props.new()
      null}
    </>
  );
}

export default DefaultPayment;
