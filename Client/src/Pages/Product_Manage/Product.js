import {
  Box,
  Button,
  Grid,
  Paper,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
//component
import Label from "../../Components/Label";
import Input from "../../Components/Input";

//react
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

//icons
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ButtonA from "../../Components/ButtonA";

function Product() {
  //product id
  const { id } = useParams();

  //state
  const [isLoaded, setIsloaded] = useState(false);
  const [categories, setCategories] = useState([]);

  //data
  const [imageArray, setImageArray] = useState([]);

  const baseURL = "http://localhost:5000/categories";

  useEffect(() => {
    if (id) {
      // logic to fetch product data
      //   TODO
    }
    axios
      .get(baseURL)
      .then((res) => {
        setCategories(res.data.data);
        setIsloaded(true);
      })
      .catch((er) => {
        setIsloaded(true);
      });
  }, []);

  //drag image handler
  const imageHandler = (file, index) => {
    // console.log(file);
    setImageArray((pre) => {
      let array = [...pre];
      array[index] = URL.createObjectURL(file);
      return array;
    });
    console.log(imageArray);
  };

  return (
    <>
      <Box>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            elevation={1}
            p={3}
            my={2.5}
            sx={{ bgcolor: "#fff" }}
          >
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "900",
                color: "#1597BB",
                letterSpacing: -0.6,
                fontSize: 20,
              }}
            >
              {id ? "Edit Product" : "Add New Product"}
            </Typography>
            <Box mt={2} sx={{ display: "flex", flexDirection: "column" }}>
              {/* product name */}
              <Label for="product_name" title="Product Name" />
              <Input
                type="text"
                id="product_name"
                size="small"
                autoFocus={true}
              />
              {/* product category */}
              <Label for="product_category" title="Product Category" />
              <Select
                sx={{ mb: 1 }}
                fullWidth
                required
                size="small"
                color="info"
                id="product_category"
              >
                {categories.map((row, index) => {
                  return (
                    <MenuItem
                      key={index}
                      sx={{
                        fontFamily: "open sans",
                        fontSize: 15,
                        color: "#333",
                      }}
                      value={row}
                    >
                      {row}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* product description */}
              <Label for="product_description" title="Product Description" />
              <Input
                size="small"
                id="product_description"
                minRows={5}
                maxRows={10}
              />
              {/* product price */}
              <Label for="product_pice" title="Product Price (Rs)" />
              <Input size="small" id="product_pice" type="number" />
              {/* product images */}
              <Label for="product_image" title="Product Images" />
              <Grid
                container
                columnSpacing={0.5}
                rowSpacing={0.5}
                sx={{ mb: 2 }}
                justifyContent="space-around"
              >
                {[0, 1, 2, 3, 4, 5].map((row, index) => {
                  return (
                    <Grid item key={index}>
                      <Tooltip title="Select image">
                        <label htmlFor={`file_${index}`}>
                          <Box
                            p={0.5}
                            key={index}
                            sx={{
                              bgcolor: "#D8D8D8",
                              borderRadius: 1,
                              cursor: "pointer",
                            }}
                          >
                            {imageArray[index] ? (
                              <img
                                style={{ width: 70, height: 70, margin: 1 }}
                                src={imageArray[index]}
                              />
                            ) : (
                              <AddToPhotosIcon
                                sx={{
                                  color: "#406882",
                                  width: 72,
                                  height: 72,
                                }}
                              />
                            )}
                          </Box>
                        </label>
                      </Tooltip>
                      <input
                        type={"file"}
                        hidden={true}
                        id={`file_${index}`}
                        accept="image/*"
                        onChange={(event) => {
                          imageHandler(event.target.files[0], index);
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              {/* button */}
              <ButtonA title="SAVE" />
              {/* bottom section */}
              <Box mt={1} sx={{ display: "flex", flexDirection: "row" }}>
                <Button sx={{ textTransform: "none" }} color="error">
                  Delete
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  sx={{ textTransform: "none" }}
                  href={`/products/${id}/offers`}
                  color="info"
                >
                  Manage Offer
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Product;
