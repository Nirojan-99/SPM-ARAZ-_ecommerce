import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import OrderManage from "./OrderManage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function OrderManages() {
  const { token, role, userID } = useSelector((state) => state.loging);

  //base url
  const baseURL = "http://localhost:5000/";

  //state
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}Order/seller/${userID}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((er) => {});
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
                fontFamily: "open sans",
                fontWeight: "1000",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 20,
                my: 2,
              }}
            >
              Manage Orders
            </Typography>
          </Box>

          {order?.map((item, index) => {
            return <OrderManage key={index} data={item} />;
          })}
        </Box>
      </Paper>
    </>
  );
}

export default OrderManages;
