import { Grid, Paper, Typography, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Label from "../../Components/Label";
import InputLabel from "@mui/material/InputLabel";

function Order_Product() {
  const [districts, setDistricts] = useState("penting");

  const DATA = [
    { status: "penting" },
    { status: "shipping" },
    { status: "delivered" },
  ];
  return (
    <>
      <Grid
        p={1}
        sx={{
          bgcolor: "#D8D8D8",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#2B4865",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Product 1
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#1597BB",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Qty: 2
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#1597BB",
              fontFamily: "open sans",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {districts}
          </Typography>
        </Box>
        <Box mt={-1}>
          <Select
            sx={{ color: "#1597BB", fontWeight: "500" }}
            onChange={(event) => {
              setDistricts(event.target.value);
            }}
            fullWidth
            required
            size="small"
            color="info"
            id="Status"
            value={districts}
          >
            {DATA.map((row, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{
                    fontFamily: "open sans",
                    fontSize: 15,
                    color: "#333",
                  }}
                  value={row.status}
                >
                  {row.status}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </Grid>
    </>
  );
}

export default Order_Product;
