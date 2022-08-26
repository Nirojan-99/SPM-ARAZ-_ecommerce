import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid, Paper, Container, Typography, Button } from "@mui/material";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import ShippingAddress_Form from "./ShippingAddress/ShippingAddress_Form";
import { useState } from "react";
import Payment from "./Payment/Payment";

const steps = ["ShippingAddress", "Payment"];
function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ShippingAddress handleNext={handleNext} />;
      case 1:
        return <Payment handleNext={handleNext} handleBack={handleBack} />;
      // case 2:
      //   return <OTP id={ID} handleNext={handleNext} handleBack={handleBack} />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <>
      <Container maxWidth="lg">
        <Box
          mt={5}
          item
          sx={{
            alignItems: "center",
            textAlign: "center",
            borderRadius: "6px",
            bgcolor: "#FFFFFF",
            width: "100%",
            height: "100%",
          }}
        >
          {" "}
          <Grid item p={3}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Box>
        {activeStep === steps.length ? (
          <>
            <Box
              mt={2}
              mb={6}
              p={3}
              sx={{
                borderRadius: "6px",
                bgcolor: "#FFFFFF",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is{" "}
                <span style={{ color: "green" }}>#{"63263262362"}</span>. We have emailed
                your order confirmation, and will send you an update when your
                order has shipped.
              </Typography>
              <Box
                p={3}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <Box sx={{ flexGrow: 1 }}> */}
                <Button variant="outlined" href="/">
                  Keep Shoping
                </Button>
                <Button
                  variant="contained"
                  href="/"
                  sx={{
                    fontWeight: "700",
                    fontFamily: "open sans",
                    textTransform: "none",
                  }}
                >
                  Printe Invoice
                </Button>
                {/* </Box> */}
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box p={2} mt={2} mb={10}>
              {getStepContent(activeStep)}
            </Box>
            {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box> */}
          </>
        )}

        {/* <Box p={2} mt={2} mb={6}>
          <ShippingAddress_Form />
        </Box> */}
      </Container>
    </>
  );
}

export default Checkout;
