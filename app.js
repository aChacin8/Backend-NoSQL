const express = require('express');
const connectDB = require('./config/db');
const {port, appUri} = require('./config/constants');
const healthCheckRoute = require('./routes/healtCheckRoute');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

connectDB();

const app = express();
app.use(express.json());

app.use(appUri, healthCheckRoute); // Middleware para manejar rutas
app.use (`${appUri}/users`, userRoutes)
app.use (`${appUri}/auth`, authRoutes)


app.listen(port, console.log(`Server running on port ${port}${appUri}`));
