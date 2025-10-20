import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/banner.jpg";
import { Box, Button, Typography } from "@mui/material";

const Banner = ({ visible }) => {
  const [offsetY, setOffsetY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src={banner}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: "transform",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.3)",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: "transform",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <Typography
            sx={{
              fontFamily: "regular",
              color: "white",
              fontSize: { xs: 10, md: 20 },
              textTransform: "uppercase",
            }}
          >
            MARCI METZGER - THE RIDGE REALTY GROUP
          </Typography>
          <Typography
            sx={{
              fontFamily: "transcend-light",
              color: "white",
              fontSize: { xs: 30, md: 60 },
              textTransform: "uppercase",
            }}
          >
            Pahrump Realtor
          </Typography>
          <Button
            sx={{
              height: { xs: 25, md: 50 },
              marginTop: 2,
              backgroundColor: "white",
              pointerEvents: "auto",
              px: 4,
              borderRadius: 15,
              fontFamily: "bold",
              fontSize: { xs: 10, md: 16 },
              color: "black",
              "&:hover": {
                backgroundColor: "#181818",
                color: "white",
              },
            }}
          >
            Call Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
