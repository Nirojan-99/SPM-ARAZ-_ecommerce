import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Order_Product from "./Order_Product";
function Order() {
  return (
    <>
      <Accordion sx={{ bgcolor: "#D8D8D8" }}>
        <AccordionSummary
          sx={{}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography
              style={{
                fontFamily: "open sans",
                fontWeight: "800",
                fontSize: 15,
                color: "#1A374D",
              }}
            >
              Order:#2121212516
            </Typography>

            <Typography
              style={{
                fontFamily: "open sans",
                fontWeight: "900",
                fontSize: 12,
                color: "#8C8C8C",
              }}
            >
              12/02/2132
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Order_Product />
            <Order_Product />
            <Order_Product />
            <Order_Product />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
    </>
  );
}

export default Order;
