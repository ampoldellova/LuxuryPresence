import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image1 from "../assets/soldImage1.png";
import Image2 from "../assets/soldImage2.png";
import Image3 from "../assets/soldImage3.png";
import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const GetItSold = () => {
  const [ref, inView] = useInView();

  return (
    <Container maxWidth="xl">
      <Box
        ref={ref}
        sx={{
          mt: -20,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, lg: 8 },
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <Card
          sx={{
            width: 300,
            height: 500,
            boxShadow: 0,
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            src={Image2}
            sx={{ height: 300, objectFit: "cover" }}
          />
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{
                fontFamily: "bold",
                fontSize: { xs: 15, md: 20 },
                color: "#f8f8f8",
                mb: 2,
              }}
            >
              Don't Just List it...
            </Typography>
            <Typography
              sx={{
                fontFamily: "light",
                fontSize: 13,
                color: "#f8f8f8",
              }}
            >
              Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 300,
            height: 600,
            boxShadow: 0,
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            src={Image1}
            sx={{ height: 300, objectFit: "cover" }}
          />
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{
                fontFamily: "bold",
                fontSize: { xs: 15, md: 20 },
                color: "#f8f8f8",
                mb: 1,
              }}
            >
              Top Residential Sales Last 5 Years
            </Typography>
            <Typography
              sx={{
                fontFamily: "regular",
                fontSize: 13,
                color: "#f8f8f8",
              }}
            >
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 300,
            height: 500,
            boxShadow: 0,
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            src={Image3}
            sx={{ height: 300, objectFit: "cover", objectPosition: "right" }}
          />
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{
                fontFamily: "bold",
                fontSize: { xs: 15, md: 20 },
                color: "#f8f8f8",
                mb: 2,
              }}
            >
              Guide to Buyers
            </Typography>
            <Typography
              sx={{
                fontFamily: "regular",
                fontSize: 13,
                color: "#f8f8f8",
              }}
            >
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, & more!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default GetItSold;
