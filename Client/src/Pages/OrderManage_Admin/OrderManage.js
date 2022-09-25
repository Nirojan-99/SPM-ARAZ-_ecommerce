import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Manage_Products from "./Manage_Products";

function OrderManage() {
  const Orderdata = [
    {
      product: "Product1",
      qty: 5,
      status: "Processing",
    },
    {
      product: "Product4",
      qty: 4,
      status: "Shipped",
    },
    {
      product: "Product3",
      qty: 2,
      status: "Processing",
    },
    {
      product: "Product2",
      qty: 1,
      status: "Delivered",
    },
  ];
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "200" }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "800",
                      fontSize: 16,
                      color: "#1A374D",
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "800",
                      fontSize: 16,
                      color: "#1A374D",
                    }}
                  >
                    qyt
                  </TableCell>

                  <TableCell
                    align="justify"
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "800",
                      fontSize: 16,
                      color: "#1A374D",
                    }}
                  >
                    Mange Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Orderdata.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <Manage_Products data={row} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <br />
    </>
  );
}

export default OrderManage;
