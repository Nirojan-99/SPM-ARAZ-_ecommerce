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

import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";
import ButtonA from "../../Components/ButtonA";

function Options() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={1}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px", textAlign: "center" }}
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
              <ButtonMenu title="My profile" link={"/profile/details"} />
              <ButtonMenu title="Security" link={"/profile/security"} />
              <ButtonMenu title="Address Book" link={"/profile/addressbook"} />
              <ButtonMenu title="Your Orders" link={"/profile/order"} />
              <ButtonMenu title="Payments Options" link={"/profile/payment"} />
              <ButtonMenu title="Points" link={"/profile/points"} />
            </Box>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

const ButtonMenu = (props) => {
  const navigator = useNavigate();
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{
          textTransform: "none",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: "15px",
          bgcolor: "#D8D8D8",
          borderRadius: 3,
        }}
        onClick={() => {
          navigator(props.link);
        }}
        style={{ backgroundColor: "#D8D8D8" }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontFamily: "Arial",
            textTransform: "none",
            color: "#1A374D",
          }}
        >
          {props.title}
        </Typography>
      </Button>
      <br />
    </>
  );
};

export default Options;
