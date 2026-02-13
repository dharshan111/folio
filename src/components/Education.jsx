import React from "react";
import { Typography, Box, Grid, Paper, Chip } from "@mui/material";
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
      institution: "K. S. Rangasamy College of Technology",
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
      organization: "Presentation",
      location: "Sengundhar College, Erode",
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
        maxWidth: 1400,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        py: { xs: 4, sm: 5, md: 6 },
        width: "100%",
      }}
    >
      {/* Section Title */}
      <div data-aos="zoom-in">
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "40px" },
            fontWeight: 700,
            fontFamily: "poppins",
            mb: { xs: 4, sm: 5, md: 6 },
            position: "relative",
            color: "#fff",
            textAlign: "center",
            width: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -12,
              width: { xs: "60px", sm: "70px", md: "80px" },
              height: "4px",
              background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
              borderRadius: "2px",
            },
          }}
        >
          Education & Achievements
        </Typography>
      </div>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 4 }}
        sx={{
          width: "100%",
          mx: 0, // Remove default negative margin
        }}
      >
        {/* Left Column - Education Cards - Full width on tablet */}
        <Grid
          item
          xs={12}
          md={12}
          lg={8}
          sx={{
            width: "100%",
            px: { xs: 0, sm: 0, md: 0 },
          }}
        >
          {/* Academic Journey Title */}
          <div data-aos="zoom-out-up">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, sm: 3, md: 4 },
                color: "#fff",
                fontFamily: "poppins",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              <SchoolIcon
                sx={{ color: "#4a90e2", fontSize: { xs: 24, sm: 26, md: 28 } }}
              />
              Academic Journey
            </Typography>
          </div>
          <div data-aos="zoom-out-up">
            <Box sx={{ position: "relative", width: "100%" }}>
              {educationData
                .filter((item) => item.type === "education")
                .map((edu, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(10px)",
                      borderRadius: { xs: "16px", sm: "18px", md: "20px" },
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      "&:hover": {
                        borderColor: edu.color,
                        transform: {
                          xs: "none",
                          sm: "scale(1.01)",
                          md: "scale(1.02)",
                        },
                        boxShadow: {
                          sm: `0 0 20px ${edu.color}20`,
                          md: `0 0 30px ${edu.color}30`,
                        },
                      },
                    }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 1.5, sm: 2, md: 2 }}
                      sx={{ width: "100%", mx: 0 }}
                    >
                      {/* Period Section - Responsive layout */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            color: edu.color,
                            mb: { xs: 0.5, sm: 0.5, md: 0 },
                            flexDirection: {
                              xs: "row",
                              sm: "row",
                              md: "column",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "flex-start",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {edu.icon}
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: edu.color,
                                fontSize: {
                                  xs: "0.8rem",
                                  sm: "0.85rem",
                                  md: "0.9rem",
                                },
                              }}
                            >
                              {edu.period}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Content Section */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={9}
                        lg={9}
                        sx={{ width: "100%" }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#fff",
                            mb: 0.5,
                            fontSize: {
                              xs: "1.1rem",
                              sm: "1.15rem",
                              md: "1.25rem",
                            },
                            lineHeight: 1.3,
                          }}
                        >
                          {edu.degree}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: edu.color,
                            fontWeight: 500,
                            mb: 1,
                            fontSize: {
                              xs: "0.9rem",
                              sm: "0.95rem",
                              md: "1rem",
                            },
                          }}
                        >
                          {edu.institution}
                        </Typography>

                        {/* Chips - Responsive wrapping */}
                        <Box
                          sx={{
                            display: "flex",
                            gap: { xs: 1, sm: 1.5, md: 2 },
                            mb: { xs: 1.5, sm: 1.5, md: 2 },
                            flexWrap: "wrap",
                          }}
                        >
                          <Chip
                            icon={
                              <LocationOnIcon
                                sx={{ fontSize: { xs: 14, sm: 16 } }}
                              />
                            }
                            label={edu.location}
                            size="small"
                            sx={{
                              color: "#000",
                              bgcolor: "rgba(255, 255, 255, 0.94)",
                              height: { xs: 24, sm: 28, md: 32 },
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                              "& .MuiChip-icon": {
                                fontSize: { xs: 14, sm: 16 },
                              },
                            }}
                          />
                          <Chip
                            label={`GPA: ${edu.gpa}`}
                            size="small"
                            sx={{
                              color: "#4caf50",
                              bgcolor: "rgba(76,175,80,0.1)",
                              height: { xs: 24, sm: 28, md: 32 },
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                            }}
                          />
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "#fff",
                            mb: { xs: 1.5, sm: 1.5, md: 2 },
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.85rem",
                              md: "0.9rem",
                            },
                            lineHeight: 1.6,
                          }}
                        >
                          {edu.description}
                        </Typography>

                        {/* Achievements Section */}
                        <Box sx={{ width: "100%" }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: edu.color,
                              fontWeight: 600,
                              display: "block",
                              mb: 0.5,
                              fontSize: {
                                xs: "0.7rem",
                                sm: "0.75rem",
                                md: "0.8rem",
                              },
                            }}
                          >
                            Key Achievements:
                          </Typography>
                          <Box
                            component="ul"
                            sx={{
                              m: 0,
                              pl: { xs: 1.5, sm: 1.5, md: 2 },
                              color: "#fff",
                              width: "100%",
                            }}
                          >
                            {edu.achievements.map((achievement, i) => (
                              <Typography
                                component="li"
                                variant="body2"
                                key={i}
                                sx={{
                                  mb: 0.5,
                                  fontSize: {
                                    xs: "0.75rem",
                                    sm: "0.8rem",
                                    md: "0.85rem",
                                  },
                                  lineHeight: 1.5,
                                }}
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
          </div>
        </Grid>

        {/* Right Column - Certifications & Courses - Responsive width */}
        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          sx={{
            width: "100%",
            px: { xs: 0, sm: 0, md: 0 },
            mt: { xs: 2, sm: 2, md: 2, lg: 0 },
          }}
        >
          {/* Achievements Title */}
          <div data-aos="zoom-out-up">

          
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: { xs: 2, sm: 2.5, md: 3 },
              color: "#fff",
              fontFamily: "poppins",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            <EmojiEventsIcon
              sx={{ color: "#f1c40f", fontSize: { xs: 24, sm: 26, md: 28 } }}
            />
            Achievements & Courses
          </Typography>
            </div>
          {/* Achievement Cards */}
          {educationData
            .filter(
              (item) => item.type === "achievement" || item.type === "course",
            )
            .map((item, index) => (
              <div data-aos="zoom-out-up">

              
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 2.5, lg: 2.5 },
                  mb: { xs: 2, sm: 2, md: 2 },
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: { xs: "14px", sm: "15px", md: "16px" },
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  width: "100%",
                  "&:hover": {
                    borderColor: item.color,
                    transform: {
                      xs: "none",
                      sm: "translateX(-5px)",
                      md: "translateX(-8px)",
                    },
                    boxShadow: { sm: `0 0 20px ${item.color}20` },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 1.5, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: item.color,
                      fontSize: { xs: 24, sm: 26, md: 28 },
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: item.color,
                        display: "block",
                        fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.75rem" },
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {item.organization} • {item.period}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.75rem" },
                        display: "block",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                    {item.location && (
                      <Chip
                        icon={
                          <LocationOnIcon
                            sx={{ fontSize: { xs: 12, sm: 12, md: 14 } }}
                          />
                        }
                        label={item.location}
                        size="small"
                        sx={{
                          mt: 1,
                          color: "#000",
                          bgcolor: "rgba(255, 255, 255, 0.94)",
                          height: { xs: 22, sm: 22, md: 24 },
                          fontSize: {
                            xs: "0.65rem",
                            sm: "0.65rem",
                            md: "0.7rem",
                          },
                          "& .MuiChip-icon": {
                            fontSize: { xs: 12, sm: 12, md: 14 },
                          },
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Paper>
              </div>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
