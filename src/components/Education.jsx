import React from "react";
import { Typography, Box, Grid, Paper, Chip } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ComputerIcon from "@mui/icons-material/Computer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Education = () => {
  const educationData = [
    {
      type: "education",
      degree: "B.Tech in Information Technology",
      institution: "K. S. rangasamy College of Technology",
      location: "Tiruchengode, Nammakal",
      period: "2021 - 2025",
      gpa: "7.32/10",
      description: "Specialized in Information Technology",
      achievements: [
        "Published research paper on Smart Helmet",
        "Teaching Seminar for Dark web awareness",
        "Dean's List all semesters",
      ],
      icon: <SchoolIcon />,
      color: "#4a90e2",
    },
    {
      type: "course",
      title: "Dark Web",
      organization: "presentation",
      location: "Online",
      period: "2023",
      description:
        "Second prize in paper presentation on 'Darkweb' at Sengundhar College Erode",
      icon: <MenuBookIcon />,
      color: "#e74c3c",
    },
    {
      type: "achievement",
      title: "Google Code Jam",
      organization: "Google",
      location: "International",
      period: "2021",
      description: "Ranked in top 500 globally",
      icon: <EmojiEventsIcon />,
      color: "#f1c40f",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
       

        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { xs: "32px", md: "40px" },
          fontWeight: 700,
          fontFamily: "poppins",
          mb: 6,
          position: "relative",
          color: "#fff",
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
        Education & Achievements
      </Typography>

      {/* Main Education Section - Without Timeline */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: "#fff",
          fontFamily: "poppins",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <SchoolIcon sx={{ color: "#4a90e2" }} />
        Academic Journey
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column - Education Cards */}
        <Grid item xs={12} lg={8}>
          <Box sx={{ position: "relative" }}>
            {educationData
              .filter((item) => item.type === "education")
              .map((edu, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 3,
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: edu.color,
                      transform: "scale(1.02)",
                      "&:before": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: edu.color,
                        }}
                      >
                        {edu.icon}
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: edu.color }}
                        >
                          {edu.period}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#fff", mb: 0.5 }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: edu.color, fontWeight: 500, mb: 1 }}
                      >
                        {edu.institution}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          mb: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        <Chip
                          icon={<LocationOnIcon />}
                          label={edu.location}
                          size="small"
                          sx={{
                            color: "#000",
                            bgcolor: "rgba(255, 255, 255, 0.94)",
                          }}
                        />
                        <Chip
                          label={`GPA: ${edu.gpa}`}
                          size="small"
                          sx={{
                            color: "#4caf50",
                            bgcolor: "rgba(76,175,80,0.1)",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", mb: 2 }}
                      >
                        {edu.description}
                      </Typography>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: edu.color,
                            fontWeight: 600,
                            display: "block",
                            mb: 1,
                          }}
                        >
                          Key Achievements:
                        </Typography>
                        <Box
                          component="ul"
                          sx={{ m: 0, pl: 2, color: "#fff" }}
                        >
                          {edu.achievements.map((achievement, i) => (
                            <Typography
                              component="li"
                              variant="body2"
                              key={i}
                              sx={{ mb: 0.5 }}
                            >
                              {achievement}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
          </Box>
        </Grid>

        {/* Right Column - Certifications & Courses */}
        <Grid item xs={12} lg={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "poppins",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EmojiEventsIcon sx={{ color: "#f1c40f" }} />
            Achievements
          </Typography>

          {educationData
            .filter(
              (item) => item.type === "achievement" || item.type === "course",
            )
            .map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2.5,
                  mb: 2,
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: item.color,
                    transform: "translateX(-8px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ color: item.color, fontSize: 28 }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: "#fff" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: item.color, display: "block" }}
                    >
                      {item.organization} • {item.period}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#fff" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
