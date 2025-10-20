import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        height: 100,
        backgroundColor: "#141414",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#f8f8f8",
          textAlign: "center",
          fontFamily: "transcend-light",
          fontSize: { xs: 12, md: 16 },
        }}
      >
        Copyright © 2023 Marci METZGER Homes - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
