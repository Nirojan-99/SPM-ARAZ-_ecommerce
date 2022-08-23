import { Grid, Typography, Button } from "@mui/material";
import ButtonA from "../../Components/ButtonA";
import { Box } from "@mui/system";
import Text from "./Components/Text";

function Address(props) {
  return (
    <>
      <Box
        m={2}
        p={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="body"
            sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
          >
            Sayanthan
          </Typography>
        </Box>
        <Box sx={{ align: "justify" }}>
          <Typography
            variant="body"
            sx={{
              color: "#2B4865",
              fontSize: 15,
              align: "justify",
              fontFamily: "open sans",
            }}
          >
            Province
            <br />
            District
            <br />
            town.
          </Typography>
          {/* <Text title="sayanthan" /> */}
        </Box>
        <Box>
          <Typography
            variant="body"
            sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
          >
            0778862178
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body"
            sx={{ color: "#2B4865", fontSize: 15, fontFamily: "open sans" }}
          >
            default
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              fontFamily: "open sans",
              fontWeight: "700",
              textTransform: "none",
            }}
            onClick={() => {}}
          >
            edit
          </Button>
        </Box>
      </Box>
      <hr
        style={{
          borderTop: "2px dashed #333",
          bgcolor: "none",
          margin: "5px 0",
        }}
      />
    </>
  );
}

export default Address;
