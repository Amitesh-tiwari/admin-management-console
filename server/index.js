const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8300;

// Connect to MongoDB using Mongoose

mongoose.connect('mongodb://127.0.0.1:27017/Admin_dashboard')

const userSchema = new mongoose.Schema({
    UserId :{
        type : Number,
        required : true,
        unique : true
    },
    Status :{
        type: Boolean,
        required: true,
    },
    UserName: {
        type: String,
        required: true,
        unique : true
    },
    UserEmail: {
        type: String,
        required: true,
        unique : true,
        lowercase : true,
    },
    UserPassword: {
        type: String,
        required: true,
        unique : true,
    },
},{timestamps : true}
);

// Your other backend routes and middleware can be defined here
app.get('/', (req, res) => {
    // Handle the request and send a response
    res.json({ message: 'Hello from the backend!' });
});
// Example route
app.get('/api/users', (req, res) => {
    // Handle the request and send a response
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});