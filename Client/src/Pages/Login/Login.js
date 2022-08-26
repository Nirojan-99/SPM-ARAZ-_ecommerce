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
function Login() {
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
              Welcome Back,
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

            {/* Password */}
            <Label for="password" title="Password" />
            <Input id="password" type="password" size="small" />
            <Link
              href="/signup"
              underline="none"
              color="red"
              sx={{ mr: "260px" }}
            >
              Forgot Password?
            </Link>
            <Link href="/signup" underline="none" fontSize={15}>
              Don't have Account?
            </Link>
            {/* login button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="LOG IN" />
            <Box mt={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
