import { CardMedia, Grid, Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

//image
import storeRoof from "../../Assets/roof.png";

const Text = (props) => {
  return (
    <Typography
      sx={{
        fontFamily: "Open sans",
        fontWeight: "600",
        fontSize: 13,
        color: "#1597BB",
        letterSpacing: -0.5,
      }}
    >
      {props.value}
    </Typography>
  );
};

function Store() {
  return (
    <>
      <Grid item sm={6} md={4}>
        <Box sx={{ bgcolor: "#fff",borderRadius:"10px 10px 0 0 ", }}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              borderRadius:"10px 10px 0 0"
            }}
            image={storeRoof}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
            }}
            p={1}
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
              Kunam Store
            </Typography>
            {/* divider */}
            <hr
              style={{
                borderTop: "2px dashed #1597BB",
                bgcolor: "none",
                width: "100%",
              }}
            />
            {/* address sec */}
            {/* user name */}
            <Text value="User Name" />
            {/* province */}
            <Text value="Province," />
            {/* District */}
            <Text value="District," />
            {/* town */}
            <Text value="town." />
            {/* mobile no */}
            <Text value="0778862178" />
            {/* divider */}
            <hr
              style={{
                borderTop: "2px dashed #1597BB",
                bgcolor: "none",
                width: "100%",
              }}
            />
            {/* tottal product */}
            <Text value="Total Products : 50" />
            {/* divider */}
            <hr
              style={{
                borderTop: "2px dashed #1597BB",
                bgcolor: "none",
                width: "100%",
              }}
            />
            {/* button sec */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button color="error">Delete</Button>
              <Box sx={{ flexGrow: 1 }} />
              <Button>Disapprove</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Store;
