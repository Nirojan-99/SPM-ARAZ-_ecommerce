import { Paper } from "@mui/material";
import { Box } from "@mui/system";
function Profile_Details() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={3}
          sx={{ bgcolor: "#FFFFFF", borderRadius: "6px" }}
          pt={5}
          pb={10}
        >
          profile Details
        </Box>
      </Paper>
    </>
  );
}

export default Profile_Details;
