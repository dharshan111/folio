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
    // { name: "Node Js", level: "75%", color: "#17cc86" },
    // { name: "mongodb", level: "65%", color: "#0cf76e" },
    // { name: "Express JS", level: "65%", color: "#4b8864" },
    // { name: "Jest", level: "65%", color: "#eb58ba" },
    { name: "Figma", level: "65%", color: "#f33e47" },
    { name: "Github", level: "85%", color: "#757eff" },
    { name: "Netlify", level: "80%", color: "#46fa64" }, 
    { name: "Vercel", level: "80%", color: "#de37ff" },
    { name: "Communication", level: "85%", color: "#0ceff7" },
  ];

  return (
    <Box sx={{ py: 8, px: 3, display:{xs:"none", md:"block"} }}>
                <Box sx={{ mb: 4,}}>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: "32px", md: "40px" }, 
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
                        width: "80px",
                        height: "4px",
                        background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
                        borderRadius: "2px",
                      }
                    }}
                  >
                    Technical Skills
                  </Typography>
                </Box>
      <Grid container spacing={3} sx={{ mx: "auto",}}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "0.3s",                
                "&:hover": {
                  borderColor: skill.color,
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  mb: 1,
                 
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: 500 }}
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
                    fontSize: "12px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  height: "8px",
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  
                }}
              >
                <Box
                  sx={{
                    width: skill.level,
                    height: "100%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    borderRadius: "10px",
                    animation: "progress 1.5s ease-in-out",
                    "@keyframes progress": {
                      "0%": { width: "0%" },
                      "100%": { width: skill.level },
                    },
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
