import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import contactimage from "../assets/contact.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSnackbar({
      open: true,
      message: "Message sent successfully! I'll get back to you soon.",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Section Title */}
        <div data-aos="fade-in">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 700,
              fontFamily: "poppins",
              mb: 6,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
                borderRadius: "2px",
              },
            }}
          >
            Get In Touch
          </Typography>
        </div>

        <div data-aos="zoom-out">
          <Box>
            {/* Right Column - Contact Form */}

            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "auto",
                width: "100%",
              }}
            >
              <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Contact Image */}
                  <Box
                    component="img"
                    src={contactimage}
                    alt="Contact"
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxWidth: 400,
                      mb: 4,
                      p: 2,
                      borderRadius: "200px",
                      boxShadow: "0 10px 40px rgba(243, 245, 248, 0.05)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  />
                </Box>
              </div>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "#fff",
                  fontFamily: "poppins",
                }}
              >
                Send Me a Message
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  mb: 4,
                  fontFamily: "poppins",
                }}
              >
                Have a project in mind? I'd love to hear about it. Fill out the
                form below and I'll get back to you within 24 hours.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "rgb(177, 176, 176)",
                        borderRadius: "20px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#4a90e2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#4a90e2",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "rgb(177, 176, 176)",
                        borderRadius: "20px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#4a90e2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#4a90e2",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "rgb(177, 176, 176)",
                        borderRadius: "20px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#4a90e2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#4a90e2",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.8,
                    background: "linear-gradient(45deg, #4a90e2, #9b59b6)",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(45deg, #5fa3ff, #b071c9)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(74,144,226,0.4)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>
        </div>
        {/* Success Message Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{
              width: "100%",
              borderRadius: "12px",
              fontWeight: 500,
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Contact;
