const express = require("express");
const products = require("./routes/product");

const errorMiddleware = require('./middlewares/errors')

const app = express();

app.use(express.json());

const baseUrl = "/api/v1";

app.use(baseUrl, products);

//moddleware to handle errors 
app.use(errorMiddleware);

module.exports = app;
