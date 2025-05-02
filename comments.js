// Create web server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Comment schema and model
const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// Create a new comment
app.post('/comments', async (req, res) => {
    const { name, email, comment } = req.body;
    const newComment = new Comment({ name, email, comment });
    await newComment.save();
    res.status(201).send(newComment);
});

// Get all comments
app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.status(200).send(comments);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});