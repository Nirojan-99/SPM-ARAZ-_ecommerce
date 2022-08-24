import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid, Paper, Container } from "@mui/material";
import ShippingAddress from "./ShippingAddress/ShippingAddress";

const steps = ["ShippingAddress", "Paymentmethod"];
function Checkout() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container p={3} alignContent="center" justifyContent="center">
          <Grid
            mt={5}
            item
            sx={{
              alignItems: "center",
              textAlign: "center",
              borderRadius: "6px",
              bgcolor: "#FFFFFF",
              width: "80%",
              height: "10%",
            }}
          >
            <Box p={3}>
              <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid item p={3} mt={2} mb={6}>
            <ShippingAddress />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
