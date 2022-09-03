import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ButtonA from "../../../Components/ButtonA";
import Input from "../../../Components/Input";
import Label from "../../../Components/Label";
function Security() {
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
              Change Password
            </Typography>
            {/* Password */}
            <Label for="cpassword" title="Current Password" />
            <Input id="cpassword" type="password" size="small" />
            {/* Password */}
            <Label for="npassword" title="New Password" />
            <Input id="npassword" type="password" size="small" />
            {/* Confirm Password */}
            <Label for="re_password" title="Confirm Password" />
            <Input id="re_password" type="password" size="small" />
            {/* save button */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="UPDATE" />
            <Box mt={2} />
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default Security;
