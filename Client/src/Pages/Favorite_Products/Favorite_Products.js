import { Grid } from "@mui/material";
import { Typography, Container, Pagination } from "@mui/material";
// box in matrial ui
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Favorite_Product from "./Favorite_Product";




function Favorite_Products() {

  const [favorite, setfavorite] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/User/Favorite/get/63187f6429fe6a6deecec979")
      .then((res) => {
        console.log(res.data.product);
        setfavorite(res.data);
      })
      .catch();
  }, []);
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
            {[1,2].map((row, index) => {
              return <Favorite_Product key={index} data={row} />;
            })}
          </Grid>
        </Container>
      </Box>
      {/* pagination */}
      <Box
        my={3}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Pagination shape="rounded" count={5} color="primary"   />
      </Box>
    </>
  );
}

export default Favorite_Products;
