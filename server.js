const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the project root
app.use(express.static(path.join(__dirname)));

// Handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', name, email, message);
  res.send('<h1>Thank you for contacting us!</h1><p>We will get back to you soon.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
