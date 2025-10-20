import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import Slide1 from "../assets/Slider1.png";
import Slide2 from "../assets/Slider2.png";
import Slide3 from "../assets/Slider3.png";
import Slide4 from "../assets/Slider4.png";
import Slide5 from "../assets/Slider5.png";
import Slide6 from "../assets/Slider6.png";

import { Box, Container, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Yelp from "../assets/YelpLogo.png";
import GetItSold from "./GetItSold";

const slides = [
  { id: 1, src: Slide1 },
  { id: 2, src: Slide2 },
  { id: 3, src: Slide3 },
  { id: 4, src: Slide4 },
  { id: 5, src: Slide5 },
  { id: 6, src: Slide6 },
];

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selected, setSelected] = useState(slides[0]);

  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        py: 10,
        position: "relative",
      }}
    >
      <GetItSold />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          sx={{
            fontFamily: "transcend-regular",
            color: "#f8f8f8",
            fontSize: { xs: 30, lg: 40 },
            textAlign: "center",
            mb: 4,
          }}
        >
          Photo Gallery
        </Typography>

        <Box sx={{ height: { xs: "250px", lg: "500px" } }}>
          <Swiper
            modules={[Thumbs, EffectFade]}
            effect="fade"
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            style={{
              width: "100%",
              height: "100%",
              padding: 3,
            }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    src={slide.src}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ height: { xs: "50", lg: "100px" } }}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
            modules={[Thumbs, Scrollbar]}
            scrollbar={{ draggable: true }}
            style={{
              marginTop: 20,
              height: "100%",
            }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} onClick={() => setSelected(slide)}>
                <img
                  src={slide.src}
                  alt={`Thumb ${idx + 1}`}
                  style={{
                    opacity: selected.id === slide.id ? 1 : 0.5,
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: 5,
                    border: "1px solid #f8f8f8",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, lg: 5 },
            my: 5,
          }}
        >
          <IconButton
            onClick={() => window.open("https://www.facebook.com/MarciHomes/")}
          >
            <Facebook sx={{ color: "#f8f8f8", fontSize: { xs: 30, md: 40 } }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.instagram.com/marciandlauren_nvrealtors/"
              )
            }
          >
            <Instagram
              sx={{ color: "#f8f8f8", fontSize: { xs: 30, md: 40 } }}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/marci-metzger-30642496/")
            }
          >
            <LinkedIn sx={{ color: "#f8f8f8", fontSize: { xs: 30, md: 40 } }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
              )
            }
          >
            <Box
              component="img"
              src={Yelp}
              sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Carousel;
