import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ButtonA from "../../Components/ButtonA";
import AddressBook from "../AddressBook/AddressBook";
import Options from "./Options";
import { useParams } from "react-router";
import EditAddresss from "../AddressBook/EditAddresss";
import Profile_Details from "./Components/Profile_Details";
import Order from "../Orders/Order";
import Orders from "../Orders/Orders";
import Loyalty from "../Loyalty/Loyalty";

import Security from "./Components/Security";

function Profile() {
  const { page } = useParams();
  return (
    <>
      <Container maxWidth="lg">
        <Box my={3} minHeight={400}>
          <Grid
            container
            spacing={{ xs: 1, sm: 2 }}
            alignItems="stretch"
            justifyContent={"center"}
          >
            <Grid item xs={3} display={{ sm: "block", xs: "none" }}>
              <Options />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box>
                {page === "addressbook" && <AddressBook />}
                {page === "editaddress" && <EditAddresss />}
                {page === "details" && <Profile_Details />}
                {page === "order" && <Orders />}
                {/* lavaniyah */}
                {page === "loyalty" && <Loyalty />}

                {page === "security" && <Security />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
