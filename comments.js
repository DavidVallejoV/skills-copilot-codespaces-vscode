// Create web server
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get comments
app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading comments file');
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to post a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading comments file');
    }
    const comments = JSON.parse(data);
    comments.push(newComment);
    fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
      if (err) {
        return res.status(500).send('Error writing comments file');
      }
      res.status(201).json(newComment);
    });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

