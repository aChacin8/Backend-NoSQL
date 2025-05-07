const express = require('express');
const connectDB = require('./config/db');
const {port, appUri} = require('./config/constants');

connectDB();

const app = express();
app.use(express.json());

app.use(appUri, (req, res) => {
    res.send('API is running...');
});

app.listen(port, console.log(`Server running on port ${port}${appUri}`));
