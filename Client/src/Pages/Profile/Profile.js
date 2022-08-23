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

function Profile() {
  const { page } = useParams();
  return (
    <>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box>
            <Grid
              container
              spacing={{ xs: 1, sm: 2 }}
              alignContent="center"
              justifyContent={"center"}
            >
              <Grid item xs={4} display={{ sm: "block", xs: "none" }}>
                <Options />
              </Grid>
              <Grid item xs={12} sm={8}>
                {page === "addressbook" && <AddressBook />}
                {page === "editaddress" && <EditAddresss />}
                {page === "details" && <Profile_Details />}
                {page === "order" && <Orders />}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
