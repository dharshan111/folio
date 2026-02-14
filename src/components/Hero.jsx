import React, { useState } from "react";
import { Box, Button, Typography, Container, Backdrop, CircularProgress } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import profileImage from "../assets/Image.jpeg"; // Adjust path based on your file structure

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleSocialClick = (url) => {
    setRedirectUrl(url);
    setLoading(true);
    
    // Show preloader for 1.5 seconds before redirecting
    setTimeout(() => {
      setLoading(false);
      window.open(url, "_blank", "noopener,noreferrer");
      setRedirectUrl("");
    }, 1500);
  };

  return (
    <>
      {/* Backdrop Loader */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(5px)",
        }}
        open={loading}
      >
        <CircularProgress color="inherit" size={60} thickness={4} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "poppins",
            animation: "pulse 1.5s ease-in-out infinite",
            "@keyframes pulse": {
              "0%": { opacity: 0.6 },
              "50%": { opacity: 1 },
              "100%": { opacity: 0.6 },
            },
          }}
        >
          Please wait {redirectUrl.includes("github") ? "..." : 
                        redirectUrl.includes("linkedin") ? "..." : 
                        redirectUrl.includes("wa.me") ? "..." : 
                        redirectUrl.includes("instagram") ? "..." : "..."}
        </Typography>
      </Backdrop>

      <Box
        sx={{
          py: 2,
          px: { xs: 2, md: 0 },
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box>
          <div data-aos="fade-right">
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  fontSize: "60px",
                  maxWidth: "260px",
                  lineHeight: 1,
                  fontFamily: "poppins",
                }}
              >
                Hello I'm
              </Typography>
              <Typography
                sx={{
                  fontSize: "60px",
                  maxWidth: "635px",
                  lineHeight: 1,
                  fontFamily: "poppins",
                }}
              >
                Dharshan <span style={{ color: "lightblue" }}>Developer</span>
              </Typography>
            </Box>
          </div>
          <div data-aos="fade-up">
            <Box>
              <Typography
                sx={{
                  maxWidth: "600px",
                  fontFamily: "poppins",
                  fontSize: "13px",
                }}
              >
                I’m a Frontend Developer passionate about building modern,
                responsive, and user-friendly web applications. I specialize in
                creating clean, scalable interfaces using React and Material UI,
                focusing on performance, usability, and design consistency. As a
                fresher, I’m continuously learning and eager to contribute to
                real-world products.
              </Typography>
            </Box>
          </div>
          <div data-aos="fade-up">
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                onClick={() => handleSocialClick("https://github.com/dharshan111/")}
                sx={{
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  p: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                  "&:disabled": {
                    opacity: 0.5,
                  },
                }}
                disabled={loading}
              >
                <GitHubIcon fontSize="small" />
              </Button>

              <Button
                onClick={() => handleSocialClick("https://www.linkedin.com/in/dharshan-r-419391287")}
                sx={{
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  p: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                  "&:disabled": {
                    opacity: 0.5,
                  },
                }}
                disabled={loading}
              >
                <LinkedInIcon fontSize="small" />
              </Button>

              <Button
                onClick={() => handleSocialClick("https://wa.me/919500732677")}
                sx={{
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  p: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                  "&:disabled": {
                    opacity: 0.5,
                  },
                }}
                disabled={loading}
              >
                <WhatsAppIcon fontSize="small" />
              </Button>

              <Button
                onClick={() => handleSocialClick("https://instagram.com/_.dhxrshxn._420")}
                sx={{
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  p: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                  "&:disabled": {
                    opacity: 0.5,
                  },
                }}
                disabled={loading}
              >
                <InstagramIcon fontSize="small" />
              </Button>
            </Box>
          </div>
        </Box>
        <div data-aos="fade-in">
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{
              mt: { xs: 2, md: 0 },
              width: "100%",
              height: "auto",
              maxWidth: 400,
              borderRadius: "200px 40px",
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default Hero;