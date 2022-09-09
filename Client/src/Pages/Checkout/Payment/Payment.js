import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Label from "../../../Components/Label";
import NewPayment from "./NewPayment";
import DefaultPayment from "./DefaultPayment";
import { useState } from "react";

function Payment(props) {
  const [val, setVal] = useState(true);

  //handle click
  const handleNew = () => {
    setVal(false);
  };

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
          {val ? <DefaultPayment new={handleNew} /> : <NewPayment />}

         
        </Box>
      </Box>
    </>
  );
}

export default Payment;
