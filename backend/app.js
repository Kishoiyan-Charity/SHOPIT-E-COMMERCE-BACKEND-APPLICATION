const express = require("express");
const products = require("./routes/product");

const app = express();

app.use(express.json());

const baseUrl = "/api/v1";

app.use(baseUrl, products);

module.exports = app;
