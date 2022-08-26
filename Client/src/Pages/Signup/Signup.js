import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ButtonA from "../../Components/ButtonA";
import Input from "../../Components/Input";
import Label from "../../Components/Label";

function SignUp() {
  return (
    <>
      <Box>
        <Container maxWidth="sm">
          {/* title */}

          <Box component={Paper} sx={{ bgcolor: "#fff" }} p={3} my={2.5}>
            {/* title */}
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "1000",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 20,
                my: 1,
                textAlign: "center",
              }}
            >
              Register
            </Typography>
            {/* store name */}
            <Label title="UserName" for="store_name" />
            <Input id="uname" autoFocus={true} size="small" type="text" />
            {/* Email */}
            <Label title="Email" for="email" />
            <Input
              id="email"
              size="small"
              placeholder="xxxxxx@gmail.com"
              type="text"
            />
            {/* contact number */}
            <Label title="Contact Number" for="contact_number" />
            <Input
              id="contact_number"
              size="small"
              placeholder="07xxxxxxxx"
              type="number"
            />
            {/* address */}
            <Label for="address" title="Address" />
            <Input
              id="address"
              multiple={true}
              minRows={3}
              maxRows={4}
              type="text"
              size="small"
            />
            {/* Password */}
            <Label for="password" title="Password" />
            <Input id="password" type="password" size="small" />
            {/* Confirm Password */}
            <Label for="re_password" title="Confirm Password" />
            <Input id="re_password" type="password" size="small" />
            {/* save button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="REGISTER" />
            <Box mt={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SignUp;
