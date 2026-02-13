import React from "react";
import { Typography, Box, Grid, Paper, Chip } from "@mui/material";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%", color: "#E44D26" },
    { name: "CSS", level: "85%", color: "#1572B6" },
    { name: "JavaScript", level: "80%", color: "#F7DF1E" },
    { name: "React", level: "85%", color: "#61DAFB" },
    { name: "Material UI", level: "75%", color: "#007FFF" },
    { name: "Tailwind", level: "50%", color: "#d8dde2" },
    { name: "Postman", level: "70%", color: "#FF6C37" },
    { name: "Figma", level: "65%", color: "#f33e47" },
    { name: "Github", level: "85%", color: "#757eff" },
    { name: "Netlify", level: "80%", color: "#46fa64" }, 
    { name: "Vercel", level: "80%", color: "#de37ff" },
    { name: "Communication", level: "85%", color: "#0ceff7" },
  ];

  return (
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 2, sm: 3, md: 3 },
      width: "100%",
      maxWidth: "1200px",
      mx: "auto",
      display:{xs:"block", md:"none"}
    }}>
      {/* Section Title */}
      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Typography 
          sx={{ 
            fontSize: { xs: "28px", sm: "32px", md: "40px" }, 
            fontFamily: "poppins", 
            display: "flex", 
            justifyContent: "center",
            fontWeight: 600,
            color: "#fff",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              width: { xs: "60px", sm: "80px" },
              height: "4px",
              background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
              borderRadius: "2px",
            }
          }}
        >
          Technical Skills
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3 }} 
        sx={{ 
          mx: "auto",
          width: "100%",
        }}
      >
        {skills.map((skill, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            key={index}
            sx={{ width: "100%" }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 2.5 },
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: { xs: "14px", sm: "16px" },
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                "&:hover": {
                  borderColor: skill.color,
                  transform: { xs: "none", sm: "scale(1.02)" },
                  boxShadow: { xs: "none", sm: `0 0 15px ${skill.color}30` },
                },
              }}
            >
              {/* Skill Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{ 
                    color: "#fff", 
                    fontFamily: "Poppins", 
                    fontWeight: 500,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                  }}
                >
                  {skill.name}
                </Typography>
                <Chip
                  label={skill.level}
                  size="small"
                  sx={{
                    bgcolor: skill.color,
                    color: "#000",
                    fontWeight: 600,
                    fontSize: { xs: "11px", sm: "12px" },
                    height: { xs: 22, sm: 24 },
                    "& .MuiChip-label": {
                      px: { xs: 1, sm: 1.5 },
                    },
                  }}
                />
              </Box>

              {/* Progress Bar Container - SINGLE BOX with mobile animation */}
              <Box
                sx={{
                  height: { xs: "6px", sm: "8px" },
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                  // Mobile animation only (max-width: 600px)
                  "@media (max-width: 600px)": {
                    "& .progress-fill": {
                      animation: "progress 1.2s ease-out forwards",
                    }
                  },
                  "@keyframes progress": {
                    "0%": { width: "0%" },
                    "100%": { width: skill.level },
                  },
                }}
              >
                <Box
                  className="progress-fill"
                  sx={{
                    width: skill.level,
                    height: "100%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    borderRadius: "10px",
                    boxShadow: `0 0 10px ${skill.color}40`,
                    // No animation property here - controlled by parent
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;