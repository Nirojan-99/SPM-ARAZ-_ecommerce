import {
  Avatar,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box, Container } from "@mui/system";

// import { makeStyles } from "@mui/material/styles";

// import { makeStyles } from "@mui/material";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";

// const useStyle = makeStyles({
//   btn: {
//     color: "#fff",
//     textDecoration: "none",
//     fontFamily: "Arial",
//     fontWeight: "bold",
//     fontSize: "15px",
//   },
// });

function Options() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "3px", textAlign: "center" }}
          pb={10}
          height="64vh"
        >
          <Grid mb={6} mt={2} container justifyContent="center">
            <Avatar
              variant="rounded"
              alt="User DP"
              src="https://stock.adobe.com/search?k=profile"
              sx={{ width: 56, height: 56 }}
            ></Avatar>
          </Grid>
          <Grid item>
            <Box
              p={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                m={1}
                p={1}
                // sx={{
                //   color: "#fff",
                //   textDecoration: "none",
                //   fontFamily: "Arial",
                //   fontWeight: "bold",
                //   fontSize: "15px",
                // }}
              >
                Outlined
              </Button>
              <br />
              <Button variant="contained" size="large">
                Outlined
              </Button>
              <br />
              <Button variant="contained" size="large">
                Outlined
              </Button>{" "}
              <br />
              <Button variant="contained" size="large">
                Outlined
              </Button>{" "}
              <br />
              <Button variant="contained" size="large">
                Outlined
              </Button>
            </Box>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

const Btn = (props) => {
  // const classes = useStyle();
  //   const { page } = useParams();
  //   const bcolor = page === props.link ? "#094F88" : "#073A63";
  return (
    <>
      <Link
        sx={{
          color: "#fff",
          textDecoration: "none",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: "15px",
        }}
        to={`${props.link}`}
      >
        <Box
          elevation={4}
          my={2}
          p={2}
          py={1.5}
          sx={{ color: "#fff", borderRadius: "6px" }}
        >
          {props.title}
        </Box>
      </Link>
    </>
  );
};

export default Options;
