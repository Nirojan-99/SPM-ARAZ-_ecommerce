import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Product from "./Product";

function Cart() {
  return (
    <>
      <Box>
        <Container maxWidth="md">
            <Box p={.5} my={2}>

            </Box>
          {[1, 2, 3, 4].map((item, index) => {
            return <Product key={index} />;
          })}
        </Container>
      </Box>
    </>
  );
}

export default Cart;
