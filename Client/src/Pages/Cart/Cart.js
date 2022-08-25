import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Product from "./Product";

function Cart() {
  return (
    <>
      <Box>
        <Container maxWidth="md">
          <Box p={0.5} my={2}>
            {[1].map((item, index) => {
              return <Product key={index} />;
            })}
          </Box>
          {/* price sec */}
          <Box component={Paper} elevation={2} p={1.5} my={2}>
            <Box
              mb={2}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
              }}
            >
              {/* sub total sec */}
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: 18, sm: 20 } }}
              >
                Sub-Total : 12.00
              </Typography>
              {/* ponit sec */}
              <Box
                mt={{ sm: 0, xs: 1 }}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>Points : 100</Typography>
                <Button
                  sx={{ ml: 2, fontWeight: 700 }}
                  variant="outlined"
                  color="secondary"
                >
                  RADEEM
                </Button>
              </Box>
            </Box>
            {/* line */}
            <hr
              style={{
                borderTop: "2px dashed #333",
                bgcolor: "none",
                width: "100%",
              }}
            />
            {/* calculation sec */}
            <Box mt={2}>
              {/* cal sec */}
              <Box sx={{ width: { md: "25%", xs: "55%", sm: "35%" } }}>
                <Grid container>
                  {/* sub total */}
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#1597BB" }}>
                      Sub Total
                    </Typography>
                  </Grid>
                  <Grid xs={2}> : </Grid>
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#333" }}>
                      1000
                    </Typography>
                  </Grid>
                  {/* loyalty */}
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#1597BB" }}>
                      Loyalty
                    </Typography>
                  </Grid>
                  <Grid xs={2}> : </Grid>
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#333" }}>
                      00
                    </Typography>
                  </Grid>
                  {/* delivary */}
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#1597BB" }}>
                      Delivary
                    </Typography>
                  </Grid>
                  <Grid xs={2}> : </Grid>
                  <Grid xs={5}>
                    <Typography sx={{ fontWeight: 600, color: "#333" }}>
                      100
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              {/* line */}
              <hr
                style={{
                  borderTop: "2px dashed #333",
                  bgcolor: "none",
                  width: "100%",
                }}
              />
              {/* total */}
              <Box sx={{ width: { md: "25%", xs: "55%", sm: "35%" } }}>
                <Grid container>
                  <Grid xs={5}>
                    <Typography
                      sx={{ fontWeight: 800, color: "#333", fontSize: 20 }}
                    >
                      Total
                    </Typography>
                  </Grid>
                  <Grid xs={2}> : </Grid>
                  <Grid xs={5}>
                    <Typography
                      sx={{ fontWeight: 600, color: "#333", fontSize: 20 }}
                    >
                      1000
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Cart;
