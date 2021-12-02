const express = require('express');

// create express app
const app = express();

app.use(express.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


dbConfig.connection();
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./App/routes/note.routes.js')(app)

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});