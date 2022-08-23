import {
  colors,
  Grid,
  Paper,
  MenuItem,
  Typography,
  Button,
  Select,
} from "@mui/material";
function Heading(props) {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          fontFamily: "open sans",
          fontWeight: "800",
          fontSize: 13,
          color: "#1A374D",
        }}
      >
        {props.Name}
      </Typography>
    </>
  );
}

export default Heading;
