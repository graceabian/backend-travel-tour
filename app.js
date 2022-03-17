const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");



dotenv.config();
const port = process.env.PORT;
const credentials = process.env.MONGO_URL;

const app = express();
    app.use(express.json())

mongoose.connect(credentials);
	const db = mongoose.connection;
	db.once('open', () => console.log(`Connected to Atlas`));




app.listen(port, () => {
    console.log(`API is now onlien on port ${port}`)
});