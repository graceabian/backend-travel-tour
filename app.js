//[SECTION] Dependecies and Modules
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");




//[SECTION] Environment Variable Setup
dotenv.config();
const port = process.env.PORT;
const credentials = process.env.MONGO_URL;

//[SECTION] Server Setup
const app = express();
    app.use(express.json());

//[SECTION] Database Connect
mongoose.connect(credentials);
const db = mongoose.connection;
db.once('open', () => console.log(`Connected to Atlas`));

//[SECTION] Server Routes	


//[SECTION] Server Response

app.get('/', (req, res) => {
    res.send(`Project Deployed Successfully`);
});

app.listen(port, () => {
    console.log(`API is now online on port ${port}`);
});
