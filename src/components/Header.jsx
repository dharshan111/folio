import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

const Header = () => {
  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Logo */}
      <Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 500,
            fontFamily: "Krona One",
          }}
        >
          about.me
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box
        component="nav"
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {navItems.map((item) => (
          <Button
            key={item.label}
            href={item.href}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Poppins",
              p: 0,
              minWidth: "auto",
              "&:hover": {
                color: "lightgray",
                backgroundColor: "transparent",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
        <Button
          variant="contained"
          href="/path-to-your-resume.pdf"
          target="_blank"
          sx={{
            bgcolor: "#4a90e2",
            color: "#fff",
            px: 2,
            py:1,
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: "15px",
            textTransform: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "#3a7bc8",
              boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
