import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import House from "../assets/houses.jpg";
import React from "react";
import { Close, Search } from "@mui/icons-material";

const SearchListings = () => {
  const [sortedBy, setSortedBy] = React.useState("");
  const [bedrooms, setBedrooms] = React.useState("any number");
  const [bathrooms, setBathrooms] = React.useState("any number");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sortByOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    {
      value: "least expensive to most expensive",
      label: "Least Expensive to Most",
    },
    {
      value: "most expensive to least expensive",
      label: "Most Expensive to Least",
    },
    { value: "bedrooms (low to high)", label: "Bedrooms (Low to High)" },
    { value: "bedrooms (high to low)", label: "Bedrooms (High to Low)" },
    { value: "bathrooms (low to high)", label: "Bathrooms (Low to High)" },
    { value: "bathrooms (high to low)", label: "Bathrooms (High to Low)" },
  ];

  const bedroomsOptions = [
    { value: "any", label: "Any" },
    { value: "1+", label: "1+" },
    { value: "2+", label: "2+" },
    { value: "3+", label: "3+" },
    { value: "4+", label: "4+" },
    { value: "5+", label: "5+" },
    { value: "6+", label: "6+" },
  ];

  const bathroomsOptions = [
    { value: "any", label: "Any" },
    { value: "1+", label: "1+" },
    { value: "2+", label: "2+" },
    { value: "3+", label: "3+" },
    { value: "4+", label: "4+" },
    { value: "5+", label: "5+" },
    { value: "6+", label: "6+" },
  ];

  const changeSortBy = (event) => {
    setSortedBy(event.target.value);
  };

  const changeBedrooms = (event) => {
    setBedrooms(event.target.value);
  };

  const changeBathrooms = (event) => {
    setBathrooms(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        mt: -10,
        height: "110vh",
        minHeight: { xs: 600, sm: 0 },
      }}
    >
      <Box
        component="img"
        src={House}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   justifyContent: { xs: "center", md: "end" },
          //   alignItems: { xs: "center", lg: "stretch" },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pointerEvents: "all",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "bold",
              color: "#f8f8f8",
              fontSize: { xs: 35, md: 60 },
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Find Your Dream Home
          </Typography>

          <Typography
            sx={{
              fontFamily: "light",
              color: "#f8f8f8",
              fontSize: { xs: 16, md: 30 },
              mb: 4,
              textAlign: "center",
            }}
          >
            Discover listings tailored to your lifestyle luxury, comfort, and
            the perfect fit for your family await.
          </Typography>

          <Button
            sx={{
              border: "3px solid #f8f8f8",
              color: "#f8f8f8",
              backgroundColor: "transparent",
              borderRadius: 15,
              px: 4,
              height: 50,
              fontFamily: "bold",
            }}
            onClick={handleOpen}
          >
            Find Yours Now
          </Button>
        </Container>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ borderRadius: 15 }}
      >
        <DialogTitle
          sx={{ fontFamily: "bold", textAlign: "center", position: "relative" }}
        >
          Search Listings
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#888",
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Location"
                sx={{
                  "& .MuiOutlinedInput-root": { fontFamily: "regular" },
                  "& .MuiInputLabel-root": { fontFamily: "regular" },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Type"
                sx={{
                  "& .MuiOutlinedInput-root": { fontFamily: "regular" },
                  "& .MuiInputLabel-root": { fontFamily: "regular" },
                }}
              />
            </Box>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="sort-by-label" sx={{ fontFamily: "regular" }}>
                Sort By
              </InputLabel>
              <Select
                fullWidth
                labelId="sort-by-label"
                id="sort-by-select"
                value={sortedBy}
                label="Sort By"
                onChange={changeSortBy}
                sx={{ fontFamily: "regular" }}
              >
                {sortByOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ fontFamily: "regular" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                width: "100%",
                mt: 2,
              }}
            >
              <FormControl fullWidth>
                <InputLabel
                  id="bedrooms-by-label"
                  sx={{ fontFamily: "regular" }}
                >
                  Bedrooms
                </InputLabel>
                <Select
                  fullWidth
                  labelId="bedrooms-by-label"
                  id="bedrooms-by-select"
                  value={bedrooms}
                  label="Bedrooms"
                  onChange={changeBedrooms}
                  sx={{ fontFamily: "regular" }}
                >
                  {bedroomsOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ fontFamily: "regular" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  id="bathrooms-by-label"
                  sx={{ fontFamily: "regular" }}
                >
                  Bathrooms
                </InputLabel>
                <Select
                  fullWidth
                  labelId="bathrooms-by-label"
                  id="bathrooms-by-select"
                  value={bathrooms}
                  label="Any Number"
                  onChange={changeBathrooms}
                  sx={{ fontFamily: "regular" }}
                >
                  {bathroomsOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ fontFamily: "regular" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                width: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Min Price"
                sx={{
                  "& .MuiOutlinedInput-root": { fontFamily: "regular" },
                  "& .MuiInputLabel-root": { fontFamily: "regular" },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Max Price"
                sx={{
                  "& .MuiOutlinedInput-root": { fontFamily: "regular" },
                  "& .MuiInputLabel-root": { fontFamily: "regular" },
                }}
              />
            </Box>

            <Button
              fullWidth
              startIcon={<Search />}
              sx={{
                borderColor: "lightgray",
                fontFamily: "bold",
                backgroundColor: "#141414",
                color: "#f8f8f8",
                "&:hover": { backgroundColor: "#141414", color: "white" },
                height: { xs: 50, lg: 60 },
                fontSize: 18,
                mt: 4,
                px: 4,
              }}
              onClick={handleClose}
            >
              Search Now
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SearchListings;
