const express = require("express");
const helmet = require("helmet");
// const bodyParser = require("body-parser");

//routes import
const userRoutes = require("./routes/user-router");

const app = express();

app.use(helmet());
app.use(userRoutes);

app.listen(5000);
