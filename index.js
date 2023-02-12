const express = require("express");
const fs = require("fs");
const cors = require("cors");
const voucher_codes = require("voucher-code-generator");
const e = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Grandma bakery server running!");
});

app.get("/products", (req, res) => {
  fs.readFile("./data/products.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const products = JSON.parse(jsonString);
      res.send(products);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
});



app.listen(port, () => {
  console.log(`Grandma bakery app listening on port ${port}`);
});
