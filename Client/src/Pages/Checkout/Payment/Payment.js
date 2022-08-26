import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
function Payment(props) {
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
            Payment
          </Typography>
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
              onClick={props.handleBack}
            >
              Back
            </Button>
          </Box>
          <Box ml={1} pr={5}>
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
      </Box>
    </>
  );
}

export default Payment;
