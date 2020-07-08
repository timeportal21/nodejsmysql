const express = require("express");
const helmet = require("helmet");
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();
// DB connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

//Import Routes
// const userRoutes = require("./routes/user-router");
const authRoute = require("./routes/auth");

const app = express();

// Middlewares
app.use(helmet());
// Route Middleware
app.use("/api/users", authRoute);

app.listen(5000, () => console.log("Server Up and running"));
