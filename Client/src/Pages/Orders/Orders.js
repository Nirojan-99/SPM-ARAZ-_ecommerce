import Order from "./Order";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Orders() {
  const { userID, role } = useSelector((state) => state.loging);
  const [orderdata, setorderdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Order/user?userId=${userID}`)
      .then((res) => {
        setorderdata(res.data.orderList);
      })
      .catch(() => {});
  }, []);
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
          {orderdata.map((row) => {
            return <Order data={row} />;
          })}
          {/* <Order />
          <Order /> */}
        </Box>
      </Paper>
    </>
  );
}

export default Orders;
