import React from "react";
import logo1 from "../assets/RidgeGroupLogo.png";
import logo2 from "../assets/EqualHousingLogo.png";
import logo3 from "../assets/RealtorLogo.png";
import logo4 from "../assets/PahrumpValleyLogo.png";
import { Box } from "@mui/material";

const Logos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 3, lg: 10 },
        mt: 5,
      }}
    >
      <Box
        component="img"
        src={logo1}
        sx={{
          height: { xs: 50, md: 80 },
        }}
      />
      <Box
        component="img"
        src={logo2}
        sx={{
          height: { xs: 50, md: 80 },
        }}
      />
      <Box
        component="img"
        src={logo3}
        sx={{
          height: { xs: 70, md: 100 },
        }}
      />
      <Box
        component="img"
        src={logo4}
        sx={{
          height: { xs: 65, md: 80 },
        }}
      />
    </Box>
  );
};

export default Logos;
