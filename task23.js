// src/App.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Box,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// The Header component
const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MUI Practice
      </Typography>
      <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);

// The Footer component
const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4, textAlign: 'center' }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} My Company. All rights reserved.
    </Typography>
  </Box>
);

// The Cards component
const Cards = () => (
  <Grid container spacing={4} sx={{ mt: 4 }}>
    {[1, 2, 3].map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={`https://via.placeholder.com/600x400?text=Card+${item}`}
            alt={`Card ${item}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card {item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a sample card component to practice using Material-UI.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

// The Accordion component
const Accordions = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Accordion Section</Typography>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the content for the first accordion panel. It can hold any content you need.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the content for the second accordion panel.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
);

// The Carousel component (requires react-responsive-carousel installation)
const MyCarousel = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Image Carousel</Typography>
    <Carousel>
      <div>
        <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  </Box>
);

// The Forms component
const Forms = () => {
  // Controlled Inputs: State and form validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required.";
    if (!email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert(`Form Submitted! Name: ${name}, Email: ${email}`);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Forms & Validation</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

// Main App component
const App = () => (
  <>
    <Header />
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h3" gutterBottom align="center">
          Main Content
        </Typography>
        <Cards />
        <Accordions />
        <MyCarousel />
        <Forms />
      </Paper>
    </Container>
    <Footer />
  </>
);

export default App;