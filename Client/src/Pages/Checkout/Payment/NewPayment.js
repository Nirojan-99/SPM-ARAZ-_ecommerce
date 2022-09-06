import { Box } from "@mui/material";
import Input from "../../../Components/Input";
import Label from "../../../Components/Label";

function NewPayment() {
  return (
    <>
      <Box sx={{ px: { sm: 5, xs: 2 }, pt: 2 }}>
        <Label for="name_on_card" title="Name On Card" />
        <Input id="name_on_card" size="small" autoFocus={true} />
        <Label for="card_number" title="Card Number" />
        <Input id="card_number" size="small" type="number" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { sm: 2, xs: 0 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Label for="ex_month" title="Expiry Month" />
            <Input id="ex_month" size="small" type="number" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label for="ex_year" title="Expiry Year" />
            <Input id="ex_year" size="small" type="number" />
          </Box>
        </Box>
        <Label for="cvc" title="CVC" />
        <Input id="cvc" size="small" type="number" />
      </Box>
    </>
  );
}

export default NewPayment;
