import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import logo from "../assets/logo-white.png";
import "../styles/NavigationButtons.css";
import React from "react";
import {
  Close,
  FormatListBulleted,
  HouseOutlined,
  InfoOutlined,
  Menu,
  RealEstateAgentOutlined,
} from "@mui/icons-material";

const navTabs = [
  { label: "Home", icon: <HouseOutlined sx={{ color: "#141414", mr: 1 }} /> },
  {
    label: "Listings",
    icon: <FormatListBulleted sx={{ color: "#141414", mr: 1 }} />,
  },
  {
    label: "Let's move",
    icon: <RealEstateAgentOutlined sx={{ color: "#141414", mr: 1 }} />,
  },
  { label: "About Us", icon: <InfoOutlined sx={{ color: "#141414", mr: 1 }} /> },
];

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        color="transparent"
        sx={{ py: 1, boxShadow: 0 }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "space-between", lg: "center" },
              alignItems: "center",
              width: "100%",
              gap: 8,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Button
                className="nav-button"
                sx={{
                  fontFamily: "transcend-regular",
                  pointerEvents: "auto",
                  color: "white",
                }}
              >
                Home
              </Button>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontFamily: "regular", color: "white" }}
              >
                |
              </Typography>
              <Button
                className="nav-button"
                sx={{
                  fontFamily: "transcend-regular",
                  pointerEvents: "auto",
                  color: "white",
                }}
              >
                Listings
              </Button>
            </Box>
            <Box
              component="img"
              sx={{
                height: { xs: 60, lg: 120 },
              }}
              alt="Logo"
              src={logo}
            />
            <IconButton
              sx={{ display: { lg: "none" } }}
              onClick={handleDrawerOpen}
            >
              <Menu sx={{ color: "white" }} />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box
                sx={{
                  width: 250,
                  background: "#f8f8f8",
                  height: "100%",
                  position: "relative",
                }}
                role="presentation"
              >
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#141414",
                    zIndex: 1,
                  }}
                  aria-label="close drawer"
                >
                  <Close />
                </IconButton>
                <List sx={{ mt: 5 }}>
                  {navTabs.map((tab) => (
                    <ListItem key={tab.label} disablePadding>
                      <ListItemButton>
                        {tab.icon}
                        <Typography
                          sx={{
                            color: "#141414",
                            fontFamily: "light",
                          }}
                        >
                          {tab.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Button
                className="nav-button"
                sx={{
                  fontFamily: "transcend-regular",
                  pointerEvents: "auto",
                  color: "white",
                }}
              >
                Let's move
              </Button>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontFamily: "regular", color: "white" }}
              >
                |
              </Typography>
              <Button
                className="nav-button"
                sx={{
                  fontFamily: "transcend-regular",
                  pointerEvents: "auto",
                  color: "white",
                }}
              >
                About Us
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
