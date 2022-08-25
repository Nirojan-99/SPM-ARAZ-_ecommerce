import { Box, Paper, Typography } from "@mui/material";

function Loyalty() {
  return (
    <>
      <Box minHeight={350} component={Paper} elevation={1} p={2} sx={{ bgcolor: "#fff" }}>
        {/* header */}
        <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 19 ,my:2}}>
          Your Loyalty Points
        </Typography>
        {/* point chart */}
        <Box px={10} my={3}>
          <Box component={Paper} sx={{ height: 40 }} variant="outlined">
            <Box sx={{ width: "50%", bgcolor: "#2B4865", height: 40 }}></Box>
          </Box>
          {/*  */}
          <Typography sx={{ fontWeight: 700, fontSize: 14,mt:1 }}>
            200 Points
          </Typography>
          {/*  */}
          <Typography sx={{ fontWeight: 600, fontSize: 14,color:"silver",mt:3 }}>
            You can use this point when you are purchasing 
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Loyalty;
