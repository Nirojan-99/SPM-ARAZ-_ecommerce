import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid, Paper, Container } from "@mui/material";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import ShippingAddress_Form from "./ShippingAddress/ShippingAddress_Form";

const steps = ["ShippingAddress", "Paymentmethod"];
function Checkout() {
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
          *
          <Grid item p={3}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Box>
        <Box p={2} mt={2} mb={6}>
          {/* <ShippingAddress /> */}
          <ShippingAddress_Form />
        </Box>
      </Container>
    </>
  );
}

export default Checkout;
