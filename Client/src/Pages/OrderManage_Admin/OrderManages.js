import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OrderManage from "./OrderManage";

function OrderManages() {
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
              Manage Orders
            </Typography>
          </Box>

          <br />
          <OrderManage />
          <OrderManage />
          <OrderManage />
        </Box>
      </Paper>
    </>
  );
}

export default OrderManages;
