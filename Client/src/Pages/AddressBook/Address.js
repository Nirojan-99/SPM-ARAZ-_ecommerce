import { Typography, Button } from "@mui/material";

import { useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Address(props) {
  const userId = "63187f8829fe6a6deecec97a";

  const OnClickDeleteHandler = () => {
    axios
      .delete(
        `http://localhost:5000/User/addresses/?indexNo=${props.index}&userId=${userId}`
      )
      .then((res) => {
        console.log(res.data.msg);

        toast("Succesfully delete address", { type: "success" });
      })
      .catch(() => {
        toast("Unable to delete", { type: "error" });
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
            localStorage.removeItem("indexNo");
            localStorage.clear();
            localStorage.setItem("indexNo", props.index);
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
            console.log(props.index);
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
