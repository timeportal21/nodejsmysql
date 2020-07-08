const express = require("express");
const helmet = require("helmet");
// const bodyParser = require("body-parser");
require("./config/database");

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

//Import Routes
// const userRoutes = require("./routes/user-router");
const authRoute = require("./routes/auth");

const app = express();

// Middlewares
app.use(helmet());
// Route Middleware
app.use("/api/users", authRoute);

app.listen(5000, () => console.log("Server Up and running"));
