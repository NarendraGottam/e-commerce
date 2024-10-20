// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce API!');
});

// Connect to MongoDB (use your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});

