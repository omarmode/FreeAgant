import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Contacts = () => {
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
          Contacts
        </Typography>
        <Box>
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            sx={{ mr: 2 }}
          >
            Import Contacts
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} color="success">
            Add New Contact
          </Button>
        </Box>
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
            All your customers and suppliers at a glance
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Easily track who owes you money, and who you owe, with contacts.
            It’s a 21st-century rolodex with real-time reporting - give it a
            spin!
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mb: 3 }}
          >
            Create your first contact
          </Button>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Quickly spot your best and worst customers
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            The customer dashboard shows information including income received
            and late payment details, so you know exactly who’s in the bad
            books.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Import contacts
          </Typography>
          <Typography variant="body2">
            Get started quickly by importing your existing contact lists from
            Google Mail, Outlook and other systems.
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
          alt="Contacts Illustration"
          src="https://assets.freeagent.com/assets/contacts/Blank-Slate--Contacts-e2f5f6ef111b87f0ea9a0b90993dc39a8cfcf48f4c2ce3a78badaac3b7785d39.png"
        />
      </Box>
    </Container>
  );
};

export default Contacts;
