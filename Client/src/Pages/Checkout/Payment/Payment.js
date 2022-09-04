import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Label from "../../../Components/Label";
import NewPayment from "./NewPayment";
import DefaultPayment from "./DefaultPayment";
function Payment(props) {
  return (
    <>
      <Box
        py={1}
        my={2}
        sx={{
          borderRadius: "6px",
          bgcolor: "#FFFFFF",
        }}
      >
        <Box>
          {/* heading */}
          <Typography
            p={2}
            sx={{
              fontSize: { md: 20, xs: 17 },
              color: "#2B4865",
              textAlign: { md: "left", xs: "center" },
              fontWeight: "900",
              fontFamily: "open sans",
            }}
          >
            Payment Details
          </Typography>
          {/* form */}
          {/* <NewPayment /> */}
          {/* default payment */}
          <DefaultPayment />
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
                onClick={props.handleNext}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Payment;
