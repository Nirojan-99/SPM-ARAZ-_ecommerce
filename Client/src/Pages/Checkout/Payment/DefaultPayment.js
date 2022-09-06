import { Box, Button, Typography } from "@mui/material";

function DefaultPayment() {
  return (
    <>
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
            **** 1234
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
            08/23
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
            User Name
          </Typography>
        </Box>
        {/* btn */}
        <Box mx={{ sm: 5, xs: 0 }}>
          <Button
            disableTouchRipple
            disableRipple
            disableFocusRipple
            sx={{ textTransform: "none" }}
            color="info"
          >
            + add New Card
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DefaultPayment;
