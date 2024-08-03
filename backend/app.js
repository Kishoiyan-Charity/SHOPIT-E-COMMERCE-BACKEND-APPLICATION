const express = require("express");
const products = require("./routes/product");
const auth = require("./routes/auth");
const cookieParser = require('cookie-parser')


const errorMiddleware = require('./middlewares/errors')

const app = express();

app.use(express.json());
app.use(cookieParser());

// const baseUrl = "/api/v1";


app.use("/api/v1", products);

app.use("/api/v1", auth);

//moddleware to handle errors 
app.use(errorMiddleware);

module.exports = app;
