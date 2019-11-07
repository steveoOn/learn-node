const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

// app.get("/help", (req, res) => {
//   res.send({
//     name: "siwen",
//     age: 32
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });

app.get("/weather", (req, res) => {
  res.send({
    forecast: "20",
    location: "Su zhou"
  });
});

app.listen(3000, () => {
  console.log("Server is ready on port 3000");
});
