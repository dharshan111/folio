import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Drawer content for mobile
  const drawer = (
    <Box
      sx={{
        width: { xs: "280px", sm: "320px" },
        height: "100%",
        bgcolor: "#242424",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 500,
            fontFamily: "Krona One",
          }}
        >
          Portfolio
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "#fff",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                py: 1.5,
                px: 3,
                "&:hover": {
                  bgcolor: "rgba(74, 144, 226, 0.15)",
                  "& .MuiListItemText-primary": {
                    color: "#4a90e2",
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    transition: "color 0.2s ease",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />

      <Box sx={{ px: 3, py: 2 }}>
        <Button
          variant="contained"
          href="/path-to-your-resume.pdf"
          target="_blank"
          fullWidth
          onClick={() => setMobileOpen(false)}
          sx={{
            bgcolor: "#4a90e2",
            color: "#fff",
            py: 1.5,
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
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

  return (
    <Container maxWidth="lg">
      <div data-aos="fade-down">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: { xs: 1.5, sm: 2, md: 2 },
            px: { xs: 1, sm: 2, md: 0 },
            position: "relative",
          }}
        >
          {/* Logo */}
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#fff",
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 500,
                fontFamily: "Krona One",
                letterSpacing: "0.5px",
              }}
            >
              about.me
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 3, lg: 4 },
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
                  fontSize: { md: "0.95rem", lg: "1rem" },
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  p: 0,
                  minWidth: "auto",
                  position: "relative",
                  "&:hover": {
                    color: "#4a90e2",
                    backgroundColor: "transparent",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    bgcolor: "#4a90e2",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
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
                px: { md: 2, lg: 3 },
                py: { md: 0.8, lg: 1 },
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: { md: "0.9rem", lg: "0.95rem" },
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

          {/* Mobile Hamburger Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#fff",

              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                bgcolor: "#0a0a0a",
                boxShadow: "0 0 15px rgba(0,0,0,0.5)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    </Container>
  );
};

export default Header;
