import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
function MangeOrder() {
  return (
    <>
      <Grid
        sx={{
          bgcolor: "#D8D8D8",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography>Product 1</Typography>
        </Box>
        <Box>
          <Typography>Qty: 2</Typography>
        </Box>
        <Box>
          <Typography>Pending</Typography>
        </Box>
        <Box>
          <Typography>Pending</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default MangeOrder;
