import {
  Box,
  Button,
  CardMedia,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

//icon
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import Review from "./Review";
import Input from "../../Components/Input";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const imageArray = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur=2",
  "https://picsum.photos/200/300.jpg",
  "https://picsum.photos/200/300.jpg",
];

const review = 4;

function ProductDetails() {
  //state
  const [previewImage, setPreviewImage] = useState(imageArray[0]);
  const [isFavorite, setFavorite] = useState(false);
  const [count, setCount] = useState(1);

  //image handler
  const setImage = (index) => {
    setPreviewImage(imageArray[index]);
  };

  return (
    <>
      <Box>
        <Container maxWidth="md">
          <Box
            my={{ sm: 4, xs: 2 }}
            component={Paper}
            elevation={1}
            sx={{ bgcolor: "#fff" }}
          >
            <Grid
              sx={{ borderRadius: 10 }}
              container
              justifyContent={"start"}
              alignItems="stretch"
            >
              <Grid item xs={12} sm={4}>
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      minHeight: 250,
                      height: 300,
                      overflow: "scroll",
                      borderRadius: "5px 0 0 0px",
                    }}
                    image={previewImage}
                  />
                  {/* multiple image sec */}
                  <Box
                    p={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      bgcolor: "#2B4865",
                    }}
                  >
                    <Grid container sx={{ p: 0, m: 0 }}>
                      {imageArray.map((row, index) => {
                        return (
                          <Grid key={index} item xs={12 / imageArray.length}>
                            <Box mx={0.5}>
                              <img
                                onClick={() => {
                                  setImage(index);
                                }}
                                onMouseOver={() => {
                                  setImage(index);
                                }}
                                style={{
                                  width: "100%",
                                  maxHeight: "60px",
                                  minHeight: "50px",
                                  margin: 1,
                                  cursor: "pointer",
                                  border: "1px solid #fff",
                                }}
                                src={imageArray[index]}
                              />
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  p={1.5}
                >
                  {/* title sec */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "start",
                      justifyContent: "top",
                    }}
                  >
                    <Typography
                      sx={{
                        py: 0.7,
                        fontFamily: "Open sans",
                        fontWeight: "900",
                        fontSize: 17,
                        color: "#1597BB",
                        letterSpacing: -0.5,
                      }}
                    >
                      Computer with 2TB hard disk and 256 SSD, 11th generation..
                      he sj vd
                    </Typography>
                    <IconButton
                      onClick={() => {
                        setFavorite((pre) => !pre);
                      }}
                      disableRipple
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      {isFavorite ? (
                        <FavoriteIcon sx={{ fontSize: 35, color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ fontSize: 35 }} />
                      )}
                    </IconButton>
                  </Box>
                  {/* rating sec */}
                  <Box
                    my={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((row, index) => {
                      if (review >= row) {
                        return (
                          <StarIcon key={index} sx={{ color: "#FEC260" }} />
                        );
                      } else {
                        return (
                          <StarBorderIcon key={index} sx={{ color: "#333" }} />
                        );
                      }
                    })}
                    <Typography
                      sx={{
                        color: "#333",
                        fontSize: 12,
                        fontFamily: "open sans",
                        fontWeight: "700",
                        ml: 2,
                      }}
                    >
                      102 Rating
                    </Typography>
                  </Box>
                  {/* peice sec */}
                  <Box>
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
                  {/* discount sec */}
                  <Box>
                    <Typography
                      sx={{
                        color: "silver",
                        fontSize: 14,
                        fontFamily: "open sans",
                        fontWeight: "700",
                      }}
                    >
                      <s>Rs : 200,000.00 -15%</s>
                    </Typography>
                  </Box>
                  {/* quantity sec */}
                  <Box
                    mt={{ xs: 2, sm: 5 }}
                    mb={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#2B4865", mr: 3 }}>
                      Quanitity
                    </Typography>
                    <IconButton
                      onClick={() => {
                        setCount((pre) => {
                          return ++pre;
                        });
                      }}
                      disableRipple
                    >
                      <AddIcon
                        sx={{
                          bgcolor: "#1597BB",
                          fontSize: 35,
                          mr: 2,
                          color: "#fff",
                        }}
                      />
                    </IconButton>
                    <Typography sx={{ fontSize: 18 }}>{count}</Typography>
                    <IconButton
                      onClick={() => {
                        setCount((pre) => {
                          if (pre === 1) {
                            return 1;
                          } else {
                            return --pre;
                          }
                        });
                      }}
                      disableRipple
                    >
                      <RemoveIcon
                        sx={{
                          bgcolor: "#1597BB",
                          fontSize: 35,
                          ml: 2,
                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </Box>
                  {/* button sec */}
                  <hr
                    style={{
                      borderTop: "2px dashed #1597BB",
                      bgcolor: "none",
                      width: "100%",
                    }}
                  />
                  {/* add to cart or buy sec */}
                  <Box
                    mt={2}
                    mb={1}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      color="success"
                      variant="contained"
                      disableElevation
                      endIcon={<AddShoppingCartIcon />}
                      sx={{ color: "#1A374D", ml: { xs: 0, sm: 3 } }}
                    >
                      Add to Cart
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                      color="info"
                      variant="contained"
                      disableElevation
                      endIcon={<ShoppingCartCheckoutIcon />}
                      sx={{ color: "#fff", mr: { xs: 0, sm: 3 } }}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* descrption sec */}
          <Box
            p={2.5}
            my={4}
            component={Paper}
            elevation={1}
            sx={{ bgcolor: "#fff" }}
          >
            {/* title sec */}
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontWeight: "900",
                fontSize: 16,
                color: "#1597BB",
                letterSpacing: -0.5,
                mb: 1,
              }}
            >
              More Details
            </Typography>
            {/* details sec */}
            <Typography
              sx={{
                fontWeight: "600",
                fontFamily: "open sans",
                fontSize: 13,
              }}
            >
              Video provides a powerful way to help you prove your point. When
              you click Online Video, you can paste in the embed code for the
              video you want to add. You can also type a keyword to search
              online for the video that best fits your document. To make your
              document look professionally produced, Word provides header,
              footer, cover page, and text box designs that complement each
              other. For example, you can add a matching cover page, header, and
              sidebar. Click Insert and then choose the elements you
            </Typography>
          </Box>
          {/* review sec */}
          <Box
            p={2.5}
            my={4}
            component={Paper}
            elevation={1}
            sx={{ bgcolor: "#fff" }}
          >
            {/* title sec */}
            <Typography
              sx={{
                fontFamily: "Open sans",
                fontWeight: "900",
                fontSize: 16,
                color: "#1597BB",
                letterSpacing: -0.5,
                mb: 1,
              }}
            >
              Reviews
            </Typography>
            <hr
              style={{
                borderTop: "2px dashed #1597BB",
                bgcolor: "none",
              }}
            />
            {/* customer review form */}
            <Box mt={1.5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Bad</Typography>
                <RadioGroup
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                  defaultValue="1"
                  name="radio-buttons-group"
                >
                  <Box
                    ml={3}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((item, index) => {
                      return (
                        <FormControlLabel
                          value={item}
                          key={index}
                          control={
                            <Radio sx={{ color: "#1597BB", p: 0, m: 0.5 }} />
                          }
                        />
                      );
                    })}
                  </Box>
                </RadioGroup>
                <Typography>Good</Typography>
              </Box>
              {/* form */}
              <Box py={2} pl={{ xs: 0, sm: 5 }}>
                <Input placeholder="write your review.." size="small" minRows={3} maxRows={5} />
              </Box>
            </Box>
            {/* button */}
            <Box mb={2} sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: { xs: 0, sm: 1 } }} />
              <Button
                sx={{ width: { xs: "100%", sm: 100 } }}
                color="info"
                variant="contained"
                disableElevation
              >
                SUBMIT
              </Button>
            </Box>
            <hr
              style={{
                borderTop: "2px dashed #1597BB",
                bgcolor: "none",
              }}
            />
            {/* review */}
            {[1, 2, 3, 4].map((item, index) => {
              return <Review key={index} />;
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductDetails;
