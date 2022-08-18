import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Icons
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
// axios
import axios from "axios";

function Favorite_Product(props) {
  const review = 4;
  // addshoppingcart fun
  const AddShoppingCart = () => {};
  // delete fun
  const OnDelete = () => {
    axios
      .delete(`http://localhost:5000/api/${props.data._id}`)
      .then((res) => {})
      .catch((er) => {});
  };
  return (
    <>
      <Grid item sx={{ width: { md: 850, xs: 440, sm: 700 } }}>
        <Box
          component={Paper}
          elevation={1}
          sx={{
            borderRadius: 2,
            bgcolor: "#fff",
            display: "flex",
            "&:hover": { transform: "scale(1.01)" },
            transitionDuration: ".2s",
            transitionProperty: "all",
          }}
        >
          <Grid item>
            <Box>
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  height: { md: 200, sm: 240, xs: 265 },
                  overflow: "scroll",
                  borderRadius: "5px 5px 2px 2px ",
                }}
                image={
                  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
                }
              />
            </Box>
          </Grid>
          {/* title */}
          <Box p={2}>
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontWeight: "800",
                fontSize: 14,
                color: "#2B4865",
                letterSpacing: -0.5,
              }}
            >
              Computer with 2TB hard disk and 256 SSD, 11th generation..
            </Typography>
            {/* Rating */}
            <Box
              my={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              {[1, 2, 3, 4, 5].map((row, index) => {
                if (review >= row) {
                  return (
                    <StarIcon
                      key={index}
                      sx={{ color: "#FEC260", fontSize: 13 }}
                    />
                  );
                } else {
                  return (
                    <StarBorderIcon
                      key={index}
                      sx={{ color: "#333", fontSize: 13 }}
                    />
                  );
                }
              })}
              <Typography
                sx={{
                  color: "#333",
                  fontSize: 10,
                  fontFamily: "open sans",
                  fontWeight: "700",
                  ml: 2,
                }}
              >
                102 Rating
              </Typography>
            </Box>
            {/* price */}
            <Box pt={3}>
              <Typography
                sx={{
                  color: "red",
                  fontSize: 15,
                  fontFamily: "open sans",
                  fontWeight: "800",
                }}
              >
                Rs : 200,000.00
              </Typography>
            </Box>
            {/* discout price */}
            <Box>
              <Typography
                sx={{
                  color: "silver",
                  fontSize: 12,
                  fontFamily: "open sans",
                  fontWeight: "700",
                }}
              >
                <s>Rs : 200,000.00 -15%</s>
              </Typography>
            </Box>
          </Box>
          <Box
            my={5}
            sx={{
              p: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* add to cart button */}
            <IconButton
              aria-label="delete"
              variant="contained"
              size="large"
              onClick={AddShoppingCart}
              sx={{
                m: 1,
                size: 30,
                color: "#fff",
                bgcolor: "#FEC260",
                "&:hover": { bgcolor: "#1597BB" },
              }}
            >
              <AddShoppingCartOutlinedIcon />
            </IconButton>
            {/* delete button */}
            <IconButton
              aria-label="delete"
              variant="contained"
              size="large"
              onClick={OnDelete}
              sx={{
                m: 1,
                size: 30,
                color: "#fff",
                bgcolor: "#FF0000",
                "&:hover": { bgcolor: "#1597BB" },
              }}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Favorite_Product;
