import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("Form Submitted:", form);
  //   };

  return (
    <Box sx={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}
      >
        Contact Me
      </Typography>

      <Paper elevation={4} sx={{ padding: "35px", borderRadius: "16px" }}>
        <form>
          <Stack spacing={3}>
            {/* Name */}
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              //   value={form.name}
              //   onChange={handleChange}
              required
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              //   value={form.email}
              //   onChange={handleChange}
              type="email"
              required
            />

            {/* Message */}
            <TextField
              fullWidth
              label="Message"
              name="message"
              //   value={form.message}
              //   onChange={handleChange}
              multiline
              rows={5}
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                paddingY: 1.4,
                borderRadius: "10px",
                fontWeight: 600,
              }}
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
