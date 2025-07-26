const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up static files
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Custom middleware to check working hours
const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();
  
  // Check if it's Monday to Friday (1-5) and between 9-17
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.render('closed', { 
      title: 'Service Unavailable',
      message: 'Our services are only available Monday to Friday, 9 AM to 5 PM.'
    });
  }
};

// Apply middleware to all routes
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home', currentPage: 'home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services', currentPage: 'services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us', currentPage: 'contact' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});