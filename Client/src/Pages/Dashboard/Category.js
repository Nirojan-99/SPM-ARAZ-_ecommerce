import { Box, Typography } from "@mui/material";

function Category(props) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FEC260",
          cursor: "pointer",
          height: { xs: 45, md: 55 },
          width: { xs: 45, md: 55 },
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        p={{ xs: 0.5, md: 2 }}
        m={{ xs: 0.5, md: 1 }}
      >
        <Typography
          sx={{ fontFamily: "open sans", fontSize: {xs:10,md:13}, fontWeight: 500 ,textAlign:"center"}}
        >
          Category & Category
        </Typography>
      </Box>
    </>
  );
}

export default Category;
