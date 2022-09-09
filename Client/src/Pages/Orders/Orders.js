import Order from "./Order";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Orders() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "open sans",
                fontWeight: "1000",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 20,
                my: 1.5,
              }}
            >
              Your Orders
            </Typography>
          </Box>

          <br />
          <Order />
          <Order />
          <Order />
        </Box>
      </Paper>
    </>
  );
}

export default Orders;
