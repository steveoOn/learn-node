const path = require("path");
const express = require("express");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicPath = path.join(__dirname, "../public");

// setting up hbs view engine
app.set("view engine", "hbs");

// serve static html file
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

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "siwen"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide address"
    });
  }
  console.log(req.query);
  // Tips!!! if destructure a object without default value will case callback function crash.
  // Thereby, it won't get err message send from server. In this case, use empty object "{}" as a
  // default value to fix the issue!!!
  geocode(req.query.address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return res.send({
        err
      });
    }

    forecast(
      latitude,
      longitude,
      (err, { summary, temperature, precipProbability } = {}) => {
        if (err) {
          return res.send({
            err
          });
        }

        res.send({
          forecast: {
            summary,
            temperature,
            precipProbability
          },
          location,
          address: req.query.address
        });
      }
    );
  });
});

// "*"表示匹配所有到目前位置未匹配到到 path
app.get("*", (req, res) => {
  res.send("404 Page");
});

app.listen(3000, () => {
  console.log("Server is ready on port 3000");
});
