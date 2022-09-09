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

function ResetPassword() {
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
              Reset Password
            </Typography>

            {/* Password */}
            <Label for="password" title="New Password" />
            <Input id="password" type="password" size="small" />
            {/* Confirm Password */}
            <Label for="re_password" title="Confirm Password" />
            <Input id="re_password" type="password" size="small" />
            {/* save button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="SUBMIT" />
            <Box mt={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ResetPassword;
