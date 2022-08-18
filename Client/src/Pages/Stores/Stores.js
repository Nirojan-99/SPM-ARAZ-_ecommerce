import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";

import { useState } from "react";

//icons
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Store from "./Store";

function Stores() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
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
              Stores
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          {/*  */}
          <Box
            sx={{
              bgcolor: "#406882",
              display: "flex",
              flexDirection: "row",
              borderRadius: 1,
            }}
            py={1}
            mb={2}
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
          {/* stores sec */}
          <Grid
            container
            justifyContent={"space-evenly"}
            alignItems="center"
            rowSpacing={3}
            columnSpacing={5}
            sx={{ my: 3 }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((row, index) => {
              return <Store key={index} />;
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Stores;
