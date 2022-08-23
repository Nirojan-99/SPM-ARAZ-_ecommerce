import { Typography } from "@mui/material";
function Text(props) {
  return (
    <>
      <Typography
        variant="body"
        sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
      >
        {props.title}
      </Typography>
    </>
  );
}

export default Text;
