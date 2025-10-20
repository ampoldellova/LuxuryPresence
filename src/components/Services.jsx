import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";

const Services = ({ ref1, inView1, ref2, inView2, ref3, inView3 }) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: { xs: 25, lg: 50 },
        borderTopRightRadius: { xs: 25, lg: 50 },
        bgcolor: "#f8f8f8",
        pt: 5,
        pb: 10,
        position: "relative",
        zIndex: 1,
        top: -50,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "transcend-regular",
            color: "#A27B5C",
            fontSize: { xs: 30, md: 40 },
            textAlign: "center",
            mb: 4,
          }}
        >
          Our Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            ref={ref1}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              boxShadow: 0,
              transition:
                "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s",
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? "translateY(0)" : "translateY(40px)",
              mb: { xs: 6, lg: 0 },
            }}
          >
            <Box
              component="img"
              src={Service1}
              alt="Service 1"
              sx={{
                height: { xs: 300, md: 370 },
                borderStyle: "solid",
                borderWidth: { xs: 25, md: 50 },
                borderColor: "#2C3930",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", lg: "start" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "transcend-regular",
                  textAlign: { xs: "center", lg: "left" },
                  fontSize: { xs: 23, sm: 26, md: 30 },
                  my: { xs: 3, lg: 2 },
                  px: { xs: 2, lg: 5 },
                }}
              >
                Real Estate Done Right
              </Typography>
              <Typography
                sx={{
                  fontFamily: "regular",
                  fontSize: { xs: 14, lg: 20 },
                  textAlign: { xs: "center", lg: "left" },
                  px: { xs: 2, lg: 5 },
                }}
              >
                Nervous about your property adventure? Don’t be. Whether you're
                getting ready to buy or sell your residence, looking at
                investment properties, or just curious about the markets, our
                team ensures you get the best experience possible!
              </Typography>
            </Box>
          </Box>

          <Box
            ref={ref2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              boxShadow: 0,
              transition:
                "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s",
              opacity: inView2 ? 1 : 0,
              transform: inView2 ? "translateY(0)" : "translateY(40px)",
              mb: { xs: 6, lg: 0 },
            }}
          >
            <Box
              component="img"
              src={Service2}
              alt="Service 2"
              sx={{
                height: { xs: 300, md: 370 },
                display: { xs: "block", md: "none" },
                borderStyle: "solid",
                borderWidth: { xs: 25, md: 50 },
                borderColor: "#C63C51",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", lg: "start" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "transcend-regular",
                  textAlign: { xs: "center", lg: "left" },
                  fontSize: { xs: 23, sm: 26, md: 30 },
                  my: { xs: 3, lg: 2 },
                  px: { xs: 2, lg: 5 },
                }}
              >
                Commercial & Residential
              </Typography>
              <Typography
                sx={{
                  fontFamily: "regular",
                  fontSize: { xs: 14, lg: 20 },
                  textAlign: { xs: "center", lg: "left" },
                  px: { xs: 2, lg: 5 },
                }}
              >
                Large or small, condo or mansion, we can find it and get at the
                price that's right. Fixer-uppers? Luxury? We can help with all
                of it! We live, work, and play in this community. Happy to help
                you find where to put you hard-earned dollars.
              </Typography>
            </Box>

            <Box
              component="img"
              src={Service2}
              alt="Service 1"
              sx={{
                height: { xs: 300, md: 370 },
                display: { xs: "none", md: "block" },
                borderStyle: "solid",
                borderWidth: { xs: 25, md: 50 },
                borderColor: "#C63C51",
              }}
            />
          </Box>

          <Box
            ref={ref3}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              boxShadow: 0,
              transition:
                "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s",
              opacity: inView3 ? 1 : 0,
              transform: inView3 ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <Box
              component="img"
              src={Service3}
              alt="Service 1"
              sx={{
                height: { xs: 300, md: 370 },
                borderStyle: "solid",
                borderWidth: { xs: 25, md: 50 },
                borderColor: "#A27B5C",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", lg: "start" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "transcend-regular",
                  textAlign: { xs: "center", lg: "left" },
                  fontSize: { xs: 23, sm: 26, md: 30 },
                  my: { xs: 3, lg: 2 },
                  px: { xs: 2, lg: 5 },
                }}
              >
                Rely on Expertise
              </Typography>
              <Typography
                sx={{
                  fontFamily: "regular",
                  fontSize: { xs: 14, lg: 20 },
                  textAlign: { xs: "center", lg: "left" },
                  px: { xs: 2, lg: 5 },
                }}
              >
                If you have questions about affordability, credit, and loan
                options, trust us to connect you with the right people to get
                the answers you need in a timely fashion. We make sure you feel
                confident and educated every step of the way.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            p: 5,
          }}
        >
          <Box
            component="img"
            src={logo1}
            sx={{
              height: { xs: 50, md: 80 },
              mt: 4,
            }}
          />
          <Box
            component="img"
            src={logo2}
            sx={{
              height: { xs: 50, md: 80 },
              mt: 4,
            }}
          />
          <Box
            component="img"
            src={logo3}
            sx={{
              height: { xs: 70, md: 100 },
              mt: 4,
            }}
          />
          <Box
            component="img"
            src={logo4}
            sx={{
              height: { xs: 65, md: 80 },
              mt: 4,
            }}
          />
        </Box> */}
      </Container>
    </Box>
  );
};

export default Services;
