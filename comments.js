// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from JSON file
function readComments() {
    const data = fs.readFileSync('comments.json');
    return JSON.parse(data);
}

// Write comments to JSON file
function writeComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Routes
app.get('/comments', (req, res) => {
    const comments = readComments();
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    const comments = readComments();
    comments.push(newComment);
    writeComments(comments);
    res.status(201).json(newComment);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
