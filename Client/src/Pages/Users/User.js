import { Typography, Button } from "@mui/material";

import { useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function User(props) {
  const OnClickDeleteHandler = () => {
    axios
      .delete(`http://localhost:5000/User/` + props.data.id)
      .then((res) => {
        if (res) {
          setTimeout(() => {
            toast("Succesfully delete user", { type: "success" });
          }, 1500);
          window.location.reload();
        }
      })
      .catch(() => {
        toast("Unable to delete", { type: "success" });
      });
  };

  return (
    <>
      <TableCell component="th" scope="row">
        <ToastContainer />
        <Typography
          variant="body"
          sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
        >
          {props.data.id}
        </Typography>
      </TableCell>

      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.name}
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.email}
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.userType}
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

export default User;
