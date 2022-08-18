import { Box, IconButton, Grid, Autocomplete, TextField, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import Category from "./Category";

//icon
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

//react
import { useRef, useState } from "react";
import Product from "./Product";

function Dashboard() {
  //hook
  const some = useRef();

  //taken from net
  function sideScroll(direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        some.current.scrollLeft += step;
      } else {
        some.current.scrollLeft -= step;
      }
      scrollAmount += 1;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  //category array
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6];

  //auto complete search
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  //state
  const [page, setPage] = useState(1);

  //pagination handler
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Box>
        <Container maxWidth="lg">
          {/* category sec */}
          <Box
            p={0}
            mt={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={() => {
                sideScroll("right", 25, array.length, 8);
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <Box
              ref={some}
              p={0.4}
              sx={{
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              <Box id="some" sx={{ display: "flex", flexDirection: "row" }}>
                {array.map((item, index) => {
                  return <Category key={index} />;
                })}
              </Box>
            </Box>
            <IconButton
              onClick={() => {
                sideScroll("left", 25, array.length, 8);
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
          {/*search sec  */}
          <Box
            sx={{
              bgcolor: "#406882",
              display: "flex",
              flexDirection: "row",
              borderRadius: 1,
            }}
            py={1}
            my={1}
          >
            <Grid container justifyContent={"center"} alignItems="center">
              {/* search field */}
              <Grid item sm={7} xs={12}>
                <Box
                  sx={{ display: "flex", flexDirection: "row" }}
                  px={1}
                  py={0}
                  m={0}
                >
                  <Autocomplete
                    fullWidth
                    open={open}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                    onFocus={() => {
                      //call fun TODO
                    }}
                    isOptionEqualToValue={(option, value) =>
                      option.title === value.title
                    }
                    onChange={(event, value) => {
                      console.log(value);
                    }}
                    getOptionLabel={(option) => option.title}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                      <TextField
                        color="status"
                        {...params}
                        placeholder="search..."
                        size="small"
                        InputProps={{
                          style: { color: "#fff" },
                          ...params.InputProps,
                          endAdornment: (
                            <>
                              {loading ? (
                                <CircularProgress color="inherit" size={20} />
                              ) : null}
                              {params.InputProps.endAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                  <IconButton
                    sx={{
                      bgcolor: "#FEC260",
                      borderRadius: 0.5,
                      ml: 0.3,
                      "&:hover": {
                        bgcolor: "#1597BB",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* products sec */}
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="space-evenly"
            alignItems={"center"}
            sx={{ my: 2 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 8].map((row, index) => {
              return <Product key={index} />;
            })}
          </Grid>
          {/* pagination sec */}
          <Box
          my={2.5}
            sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
          >
            <Pagination
              shape="rounded"
              count={5}
              color="primary"
              onChange={handleChange}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
