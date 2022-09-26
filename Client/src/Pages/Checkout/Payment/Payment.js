import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Label from "../../../Components/Label";
import NewPayment from "./NewPayment";
import DefaultPayment from "./DefaultPayment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Payment(props) {
  const { token, role, userID } = useSelector((state) => state.loging);

  const [val, setVal] = useState(false);
  //state
  const [payment, setpayment] = useState();
  const [isLoaded, setLoaded] = useState(false);

  //handle click
  const handleNew = () => {
    setVal(true);
  };

  const baseURL = "http://localhost:5000/";

  useEffect(() => {
    axios
      .get(`${baseURL}User/${userID}/payment`)
      .then((res) => {
        setLoaded(true);
        setpayment(res.data);
      })
      .catch((er) => {
        setLoaded(true);
      });
  }, []);

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
          {!isLoaded && (
            <Typography sx={{ textAlign: "center", mb: 4, color: "silver" }}>
              Loading...
            </Typography>
          )}
          {isLoaded ? (
            payment?.nameOnCard !== null && payment !== null ? (
              val ? (
                <NewPayment next={props.handleNext} />
              ) : (
                <DefaultPayment
                  data={payment}
                  new={handleNew}
                  next={props.handleNext}
                />
              )
            ) : (
              <NewPayment next={props.handleNext} />
            )
          ) : null}
        </Box>
      </Box>
    </>
  );
}

export default Payment;
