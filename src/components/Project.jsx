import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const data = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VHaxYWSykfeRKUBfnoFAdVAswAsN5AnIHA&s",
    title: "Built responsive landing pages with modern UI and React.",
    channel: "Links",
    views: "40M views",
    createdAt: "2 days ago",
  },
  {
    src: "https://t4.ftcdn.net/jpg/05/82/71/17/360_F_582711786_QIZaSfrv2nKTzej348R8HxbX3GB2vJjl.jpg",
    title: "Created interactive dashboards using React and MUI for clear data.",
    channel: "Links",
    views: "40M views",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6StfMEJGAFG3NcPiirrwbEVuwTyMwrQjIA&s",
    title: "Developed a weather app that shows real-time forecasts using API-based data.",
    channel: "Links",
    views: "130M views",

  },
  {
    src: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2021/10/hotel-html-template.jpg?fit=740%2C463&ssl=1",
    title: "Designed a hotel management system to handle customer data.",
    channel: "Links",
    views: "130M views",
   
  },
  {
    src: "https://www.webbikeworld.com/wp-content/uploads/2019/09/livemap-helmet.jpg",
    title: "Developed an IoT smart helmet with safety features like accident detection.",
    channel: "2025",


  },
];

export default function YouTube() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <>
      <Box sx={{ position: "relative", maxWidth: "100%", mx: "auto", px: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 4 }}>
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
            Projects
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box 
          sx={{ 
            display: { xs: "none", md: "flex" }, 
            justifyContent: "flex-end", 
            gap: 1,
            mb: 2 
          }}
        >
          <IconButton 
            onClick={() => scroll(-400)}
            sx={{ 
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(74,144,226,0.2)" },
              transition: "all 0.3s ease"
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "#fff", fontSize: 20 }} />
          </IconButton>
          <IconButton 
            onClick={() => scroll(400)}
            sx={{ 
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(74,144,226,0.2)" },
              transition: "all 0.3s ease"
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Scrollable Container */}
        <Box
          ref={scrollRef}
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            gap: 3,
            p: 2,
            pb: 4,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255,255,255,0.05)",
              borderRadius: "10px",
              marginX: "20px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #5fa3ff, #b071c9)",
              },
            },
            "&::-webkit-scrollbar-thumb:vertical": {
              background: "#4a90e2",
            },
            "&::-webkit-scrollbar-thumb:horizontal": {
              background: "linear-gradient(90deg, #4a90e2, #9b59b6)",
            },
            // Firefox scrollbar
            scrollbarWidth: "thin",
            scrollbarColor: "#4a90e2 rgba(255,255,255,0.05)",
          }}
        >
          {data.map((item, index) => (
            <Box 
              key={index} 
              sx={{ 
                minWidth: 310,
                maxWidth: 310,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  "& img": {
                    boxShadow: "0 10px 30px rgba(74,144,226,0.3)",
                  }
                }
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  style={{ 
                    width: "100%", 
                    height: 218, 
                    borderRadius: 12,
                    objectFit: "cover",
                    transition: "box-shadow 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                  }}
                  alt={item.title}
                  src={item.src}
                />
                <Box 
                  sx={{ 
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    px: 1,
                    py: 0.5,
                    borderRadius: 4,
                    fontSize: "12px",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  Project {index + 1}
                </Box>
              </Box>
              <Box sx={{ pr: 2, mt: 2 }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ 
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ 
                    display: "block", 
                    color: "#4a90e2",
                    fontWeight: 500,
                    mt: 0.5
                  }}
                >
                  {item.channel} 
                  <span style={{ color: "rgba(255,255,255,0.7)", marginLeft: 4 }}>
                    • {item.views}
                  </span>
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 0.5
                  }}
                >
                  {item.createdAt}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Scroll Progress Indicator */}

      </Box>
    </>
  );
}