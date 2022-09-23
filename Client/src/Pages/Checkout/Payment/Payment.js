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
     
    </>
  );
}

export default Payment;
