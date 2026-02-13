import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import profileImage from "../assets/Image.jpeg"; // Adjust path based on your file structure

const Hero = () => {
  return (
    <>
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
                I’m a Frontend Developer focused on building modern, responsive,
                and user-friendly web applications. Skilled in React and
                Material UI, I create clean, scalable interfaces that balance
                performance, usability, and design while continuously improving
                my skills.
              </Typography>
            </Box>
          </div>
          <div data-aos="fade-up">
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                component="a"
                href="https://github.com/dharshan111/"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
              >
                <GitHubIcon fontSize="small" />
              </Button>

              <Button
                component="a"
                href="https://www.linkedin.com/in/dharshan-r-419391287"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
              >
                <LinkedInIcon fontSize="small" />
              </Button>

              <Button
                component="a"
                href="https://wa.me/919500732677"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </Button>

              <Button
                component="a"
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
              >
                <InstagramIcon fontSize="small" />
              </Button>
            </Box>
          </div>
        </Box>
        <div data-aos="fade-left">

        
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
        ></Box>
        </div>
      </Box>
    </>
  );
};

export default Hero;
