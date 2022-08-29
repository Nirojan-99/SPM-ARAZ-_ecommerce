import {
  Box,
  Button,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ButtonA from "../../Components/ButtonA";
import Input from "../../Components/Input";
import Label from "../../Components/Label";

function ForgotPassword() {
  return (
    <>
      <Box
        sx={{
          my: 10,
        }}
      >
        <Container maxWidth="sm">
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
              Reset Password
            </Typography>
            {/* Email */}
            <Label title="Email" for="email" />
            <Input
              id="email"
              autoFocus={true}
              size="small"
              placeholder="xxxxxx@gmail.com"
              type="text"
            />

            {/* submit button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SUBMIT" />
            <Box mt={2} />
            {/* <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "500",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 15,
                my: 1,
                textAlign: "right",
              }}
            >
              1.00
            </Typography> */}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ForgotPassword;
