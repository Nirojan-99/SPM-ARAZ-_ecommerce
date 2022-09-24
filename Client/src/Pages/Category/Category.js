import { Typography, Button } from "@mui/material";

import { useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Category(props) {
  const navigator = useNavigate();
  const OnClickDeleteHandler = () => {
    axios
      .delete(`http://localhost:5000/category/` + props.data.id)
      .then((res) => {
        if (res) {
          setTimeout(() => {
            toast("Succesfully delete category", { type: "success" });
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
          {props.data.name}
        </Typography>
      </TableCell>

      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.details}
      </TableCell>
      <TableCell
        align="justify"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.data.createdDate}
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
            navigator("/newCategory/" + props.data.id);
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

export default Category;
