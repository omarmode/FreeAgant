import React from "react";
import { Box, Button, Typography, Container, Link } from "@mui/material";
function Invoices() {
  return (
    <Container>
      {/* NavbarPage */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4, mt: 2 }}
      >
        {/* <Typography variant="h5" component="div">
          Invoicing
        </Typography> */}
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
            Invoicing that's simply a breeze
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            You’ve done the hard work - now get paid with professional invoices
            that help you see those fat stacks faster.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button variant="contained" color="success" size="large">
              Create your first invoice
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Design your theme
            </Button>
          </Box>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Make it easy to pay
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <Link href="#">Connect an online payment provider</Link> to
            seamlessly take payments from your customers.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Automatic payment reminders
          </Typography>
          <Typography variant="body2">
            Obviously customers always pay perfectly on time *cough* but just in
            case, you can set-up automated reminders to nudge any pesky
            late-payers
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
          alt="Invoicing Illustration"
          src="https://assets.freeagent.com/assets/invoicing/Blank-Slate--Invoicing-9203a39de42502cbf0f58b9f704164fa20b8773cab8f6e31e020b5f8ead11055.png"
        />
      </Box>

      {/* Bottom Buttons */}
      <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
          Learn more about invoicing
        </Button>
        <Button variant="contained" color="primary" sx={{ ml: 2 }}>
          Help
        </Button>
      </Box>
    </Container>
  );
}

export default Invoices;
