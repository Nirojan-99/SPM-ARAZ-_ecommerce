import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

//icon
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useEffect, useState } from "react";
import Review from "./Review";
import axios from "axios";
import { useParams } from "react-router";
import calNewPrice from "../../Helper/calNewPrice";

const review = 4;
function Product() {
  //state
  const [previewImage, setPreviewImage] = useState([]);

  //image handler
  const setImage = (index) => {
    setPreviewImage(imageArray[index]);
  };

  //id
  const { id } = useParams();

  //url
  const baseURL = "http://localhost:5000/";

  //data
  const [imageArray, setImageArray] = useState([]);
  const [product, setProduct] = useState({});

  //get images
  const getImages = (name) => {
    axios
      .get(`${baseURL}products/images/${name}`)
      .then((res) => {
        console.log(res)
        return res.data;
      })
      .catch((er) => {
        console.log(er);
      });
  };

  //get data
  useEffect(() => {
    axios
      .get(`${baseURL}products/${id}`)
      .then((res) => {
        const product = res.data.product;
        setProduct(product);
        res.data.product?.images?.forEach((element) => {
          const data = getImages(element);
          setImageArray((pre) => {
            const array = [...pre];
            array.push(data);
            return array;
          });
        });
      })
      .catch((er) => {});
  }, []);
  return (
    <>
      <Box>
        <Container maxWidth="md">
          {/* product detail sec */}
          <img src={imageArray[0]}/>
          <Box my={4} component={Paper} elevation={1} sx={{ bgcolor: "#fff" }}>
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
                  <Typography
                    sx={{
                      fontFamily: "Open sans",
                      fontWeight: "900",
                      fontSize: 17,
                      color: "#1597BB",
                      letterSpacing: -0.5,
                    }}
                  >
                    {product.title}
                  </Typography>
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
                      {review?.length}
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
                      Rs : {calNewPrice(product.price, product?.offer)}
                    </Typography>
                  </Box>
                  {/* discount sec */}
                  <Box>
                    {product?.offer?.percentage && (
                      <Typography
                        sx={{
                          color: "silver",
                          fontSize: 14,
                          fontFamily: "open sans",
                          fontWeight: "700",
                        }}
                      >
                        <s>
                          Rs : {product.price} {product?.offer?.percentage}
                        </s>
                      </Typography>
                    )}
                  </Box>
                  {/* descrption sec */}
                  <Box sx={{ mt: 2, flexGrow: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontFamily: "open sans",
                        fontSize: 13,
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* end of product details */}
          {/* review sec */}
          <Box
            my={4}
            component={Paper}
            elevation={1}
            p={2}
            sx={{ bgcolor: "#fff" }}
          >
            {/* title */}
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "900",
                color: "#1597BB",
                letterSpacing: -0.6,
                fontSize: 20,
              }}
            >
              Reviews
            </Typography>
            {/* divider */}
            <hr style={{ borderTop: "2px dashed #1597BB", bgcolor: "none" }} />
            {/* reviews */}
            {product?.review?.map((item, index) => {
              return <Review key={index} />;
            })}
            {product?.review || <Typography>No review</Typography>}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Product;
