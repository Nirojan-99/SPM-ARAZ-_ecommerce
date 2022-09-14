import { Typography, Button } from "@mui/material";

import { useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Address(props) {
  const OnClickDeleteHandler = () => {
    axios
      .delete("http://localhost:5000/address/" + props.data.id)
      .then((res) => {
        if (res) {
          toast("Succesfully delete address", { type: "success" });
        }
      })
      .catch(() => {
        toast("Unable to delete", { type: "success" });
      });
  };

  const navigator = useNavigate();
  return (
    <>
      <TableCell component="th" scope="row">
        <ToastContainer />
        <Typography
          variant="body"
          sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
        >
          {props.data.name}
        </Typography>
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.province}
        <br />
        {props.data.district} {/* <br /> */}
        {/* {props.data.address} */}
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.contactNumber}
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.defaultStatus}
      </TableCell>
      <TableCell align="justify">
        {" "}
        <Button
          variant="contained"
          size="small"
          sx={{
            fontFamily: "open sans",
            fontWeight: "700",
            textTransform: "none",
          }}
          onClick={() => {
            localStorage.removeItem("id");
            localStorage.clear();
            localStorage.setItem("id", props.data.id);
            navigator("/profile/editaddress");
          }}
        >
          Edit
        </Button>
      </TableCell>
      <TableCell align="justify">
        {" "}
        <Button
          variant="contained"
          size="small"
          sx={{
            fontFamily: "open sans",
            fontWeight: "700",
            textTransform: "none",
          }}
          onClick={() => {
            OnClickDeleteHandler();
          }}
        >
          Delete
        </Button>
      </TableCell>
    </>
  );
}

export default Address;
