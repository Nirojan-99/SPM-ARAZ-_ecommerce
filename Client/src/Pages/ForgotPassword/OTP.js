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
function OTP() {
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
              OTP Validation
            </Typography>
            {/* OTP Pin */}
            <Label title="OTP" for="otp" />
            <Input id="otp" autoFocus={true} size="small" type="number" />

            {/* submit button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SUBMIT" />
            <Box mt={2} />
            <Typography
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
              <Link href="/passwordReset" underline="none" fontSize={15}>
                Resend OTP
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default OTP;
