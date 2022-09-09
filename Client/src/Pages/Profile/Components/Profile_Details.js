import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ButtonA from "../../../Components/ButtonA";
import Input from "../../../Components/Input";
import Label from "../../../Components/Label";
import { login } from "../../../Store/auth";
import { useSelector } from "react-redux";

function Profile_Details() {
  const { userID, role } = useSelector((state) => state.loging);
  console.log(userID, role);
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          {/* profile Details */}
          <Container maxWidth="sm">
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
              Profile Picture
            </Typography>
            {/* User name */}
            <Label title="UserName" for="uname" />
            <Input id="uname" autoFocus={true} size="small" type="text" />

            {/* contact number */}
            <Label title="Contact Number" for="contact_number" />
            <Input
              id="contact_number"
              size="small"
              placeholder="07xxxxxxxx"
              type="number"
            />
            {/* gender */}
            <Label title="Gender" for="gender" />
            <Select
              sx={{ mb: 1, color: "#1597BB", fontWeight: "500" }}
              fullWidth
              required
              size="small"
              color="info"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            {/* dob */}
            <Label title="Date of Birth" for="dob" />
            <Input id="dob" size="small" type="date" />
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

            {/* update button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="UPDATE" />
            <Box mt={2} />
            {/* Email */}
            <Label title="Email" for="email" />
            <Input
              id="email"
              size="small"
              placeholder="xxxxxx@gmail.com"
              type="text"
            />
            {/* OTP button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SEND OTP" />
            <Box mt={2} />
            {/* OTP Pin */}
            <Label title="OTP" for="otp" />
            <Input id="otp" size="small" type="number" />

            {/* submit button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SUBMIT" />
            <Box mt={2} />
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default Profile_Details;
