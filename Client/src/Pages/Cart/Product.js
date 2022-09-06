import {
  Box,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { useState } from "react";

//icon
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function Product(props) {
  const [count, setCount] = useState(1);
  return (
    <Box sx={{ bgcolor: "#fff" }} mb={2} p={0}>
      <Grid
        sx={{ borderRadius: 10 }}
        container
        justifyContent={"start"}
        alignItems="stretch"
      >
        <Grid item xs={12} sm={3}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              minHeight: 100,
              height: "100%",
              overflow: "scroll",
              borderRadius: { sm: "3px 0 0 3px", xs: "3px 3px 0 0 " },
            }}
            image={"http://localhost:5000/products/images/IMG_20200311_202624.jpg"}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
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
                onClick={() => {
                  //TODO
                }}
                sx={{
                  cursor: "pointer",
                  py: 0.7,
                  fontFamily: "Open sans",
                  fontWeight: "900",
                  fontSize: 16,
                  color: "#1597BB",
                  letterSpacing: -0.5,
                }}
              >
                Computer with 2TB hard disk and 256 SSD, 11th generation.. he sj
                vd
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Checkbox color="secondary" sx={{ color: "#1597BB" }} />
            </Box>
            {/* rating sec */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {[1, 2, 3, 4, 5].map((row, index) => {
                if (4 >= row) {
                  return <StarIcon key={index} sx={{ color: "#FEC260" }} />;
                } else {
                  return <StarBorderIcon key={index} sx={{ color: "#333" }} />;
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
                  fontSize: 13,
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
                  fontSize: 12,
                  fontFamily: "open sans",
                  fontWeight: "700",
                }}
              >
                <s>Rs : 200,000.00 -15%</s>
              </Typography>
            </Box>
            {/* quantity sec */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#2B4865", mr: 3, fontWeight: 700 }}>
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
                    fontSize: 30,
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
                    fontSize: 30,
                    ml: 2,
                    color: "#fff",
                  }}
                />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton>
                <DeleteIcon color="error" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
