import { Box, Button, TextField, Typography } from "@mui/material";

//icon
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
// component
import Input from "../../Components/Input";

function Review(props) {
  const review = 3;
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box>
          <Typography
            sx={{
              color: "#1597BB",
              fontFamily: "open sans",
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            User Name
          </Typography>
          <Typography
            sx={{
              color: "#aaa",
              fontFamily: "open sans",
              fontSize: 12,
              fontWeight: "700",
            }}
          >
            2022/12/12
          </Typography>
        </Box>
        <Box ml={2}>
          {[1, 2, 3, 4, 5].map((row, index) => {
            if (review >= row) {
              return (
                <StarIcon
                  key={index}
                  sx={{ color: "#FEC260", height: 16, width: 16 }}
                />
              );
            } else {
              return (
                <StarBorderIcon
                  key={index}
                  sx={{ color: "#333", height: 16, width: 16 }}
                />
              );
            }
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontWeight: "600", fontFamily: "open sans", fontSize: 13 }}
        >
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you can paste in the embed code for the video you
          want to add. You can also type a keyword to search online for the
          video that best fits your document.
        </Typography>
      </Box>
      {/* reply sec */}
      {true ? (
        <Box my={1} mb={2} pl={{ xs: 0, sm: 8 }}>
          <Input maxRows={4} minRows={3} />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              sx={{
                width: { xs: "100%", sm: 10, textTransform: "none" },
                my: 1,
              }}
              variant="contained"
              disableElevation
              color="info"
            >
              Reply
            </Button>
          </Box>
        </Box>
      ) : (
        // seller reply
        <Box my={1} mb={2} pl={{ xs: 0, sm: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#D8D8D8",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                py: 0.2,
                px: 0.6,
                borderRadius: 0.6,
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "open sans",
                  fontSize: 13,
                  fontWeight: "700",
                }}
              >
                Seller
              </Typography>
              <EditIcon sx={{ color: "#333", width: 15, heigh: 15, ml: 1 }} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontFamily: "open sans", fontSize: 13 }}
            >
              Video provides a powerful way to help you prove your point.
            </Typography>
          </Box>
        </Box>
      )}
      <hr
        style={{
          borderTop: "2px dashed #1597BB",
          bgcolor: "none",
        }}
      />
    </>
  );
}

export default Review;
