import React from "react";
import { Phone, Send } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Realtor from "../assets/Realtor.png";
import Details from "./Details";
import Logos from "./Logos";

const CallOrVisit = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Realtor}
            sx={{
              height: { xs: 250, lg: 350 },
              borderRadius: 99,
              objectFit: "cover",
            }}
          />
          <Typography
            sx={{
              fontFamily: "transcend-regular",
              fontSize: { xs: 30, lg: 40 },
              color: "#141414",
              textAlign: "center",
              mt: 2,
            }}
          >
            MARCI METZGER
          </Typography>

          <Typography
            sx={{
              fontFamily: "regular",
              fontSize: { xs: 15, lg: 20 },
              color: "#141414",
              textAlign: "center",
            }}
          >
            Realtor for nearly 3 decades!
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Phone sx={{ color: "#141414", mr: 1 }} />
            <Typography
              sx={{
                fontFamily: "regular",
                fontSize: { xs: 15, lg: 20 },
                color: "#141414",
                textAlign: "center",
              }}
            >
              206-919-6886
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "90vw", lg: 500 },
            maxWidth: "100%",
            alignSelf: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "transcend-regular",
              fontSize: { xs: 25, lg: 40 },
              color: "#141414",
              textAlign: "center",
            }}
          >
            Send Me a Message
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            sx={{
              "& .MuiOutlinedInput-root": { fontFamily: "regular" },
              "& .MuiInputLabel-root": { fontFamily: "regular" },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            sx={{
              "& .MuiOutlinedInput-root": { fontFamily: "regular" },
              "& .MuiInputLabel-root": { fontFamily: "regular" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Message"
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": { fontFamily: "regular" },
                "& .MuiInputLabel-root": { fontFamily: "regular" },
              }}
            />
          </Box>
          <Button
            fullWidth
            startIcon={<Send />}
            sx={{
              borderColor: "lightgray",
              fontFamily: "bold",
              backgroundColor: "#141414",
              color: "#f8f8f8",
              "&:hover": { backgroundColor: "#141414", color: "white" },
              borderRadius: 15,
              height: { xs: 50, lg: 60 },
              fontSize: 18,
              px: 4,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Details />

      <Logos />
    </Box>
  );
};

export default CallOrVisit;
