import { Grid } from "@mui/material";
import { Typography, Container, Pagination } from "@mui/material";
// box in matrial ui
import { Box } from "@mui/system";
import Favorite_Product from "./Favorite_Product";

function Favorite_Products() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          {/* title */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "1000",
                color: "#2B4865",
                letterSpacing: -0.9,
                fontSize: 20,
                my: 1.5,
              }}
            >
              Your Whishlist
            </Typography>
          </Box>
          <Grid
           mt={2}
            mb={7}
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[1, 2, 3, 4].map((row, index) => {
              return <Favorite_Product key={index} />;
            })}
          </Grid>
        </Container>
      </Box>
      {/* pagination */}
      <Box
        my={3}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Pagination
          shape="rounded"
          count={5}
          color="primary"
          // onChange={handleChange}
        />
      </Box>
    </>
  );
}

export default Favorite_Products;
