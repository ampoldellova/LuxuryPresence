import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ height: 100, backgroundColor: "#141414" }}>
      <Typography
        sx={{
          color: "#f8f8f8",
          textAlign: "center",
          lineHeight: "100px",
          fontFamily: "transcend-light",
        }}
      >
        Copyright © 2023 Marci METZGER Homes - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
