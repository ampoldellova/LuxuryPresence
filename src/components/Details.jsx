import {
  AccessTimeOutlined,
  Business,
  FmdGoodOutlined,
  PermPhoneMsgOutlined,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Details = () => {
  const cards = [
    {
      value: "Company Name",
      label: "Marci Metzger - THE RIDGE REALTY GROUP",
      icon: <Business sx={{ fontSize: 100 }} />,
    },
    {
      value: "Location",
      label: "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States",
      icon: <FmdGoodOutlined sx={{ fontSize: 100 }} />,
    },
    {
      value: "Contact",
      label: "(206) 919-6886",
      icon: <PermPhoneMsgOutlined sx={{ fontSize: 100 }} />,
    },
    {
      value: "Office Hours",
      label: "Open daily 8:00 am - 7:00 pm",
      icon: <AccessTimeOutlined sx={{ fontSize: 100 }} />,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, lg: 8 },
          px: { xs: 3, lg: 0 },
          py: 5,
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              border: "3px solid #141414",
              borderRadius: 2,
              width: { xs: "100%", md: 400 },
              maxWidth: 400,
              height: { xs: 150, lg: 250 },
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {card.icon}
            <Typography sx={{ fontFamily: "bold", textTransform: "uppercase" }}>
              {card.value}
            </Typography>
            <Typography
              sx={{ fontFamily: "light", fontSize: 13, textAlign: "center" }}
            >
              {card.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Details;
