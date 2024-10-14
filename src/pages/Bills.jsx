import React from "react";
import { Box, Button, Typography, Container, Link } from "@mui/material";

function Bills() {
  return (
    <Container>
      {/* NavbarPage */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4, mt: 2 }}
      >
        <Typography variant="h5" component="div">
          Bills
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ backgroundColor: "#f4f5f7", p: 4, borderRadius: "8px" }}
      >
        {/* Text Section */}
        <Box flex={1}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Keep track of the money you owe with bills
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            With bills, you can stay on top of your outgoings by tracking what
            you owe suppliers.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mb: 3 }}
          >
            Create your first bill
          </Button>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            When to use bills
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Say you get some business cards printed, and the printer sends you
            an invoice that’s payable in 30 days. Create a bill to track the
            money you owe and the eventual payment.
          </Typography>

          <Typography variant="body2">
            Find out more about the difference between{" "}
            <Link href="#">out-of-pocket expenses</Link> and{" "}
            <Link href="#">bills</Link>.
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          component="img"
          sx={{
            maxWidth: "40%",
            marginLeft: "20px",
            maxHeight: "400px",
          }}
          alt="Bills Illustration"
          src="https://assets.freeagent.com/assets/bills/Blank-Slate--Bills-f536810cb20faa0bcb222383bfd6565a2a8d1bb98f17eb7e19d3f3f24c474f68.png"
        />
      </Box>

      {/* Bottom Buttons */}
      <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
          Learn more about Bills
        </Button>
        <Button variant="contained" color="primary">
          Help
        </Button>
      </Box>
    </Container>
  );
}

export default Bills;
