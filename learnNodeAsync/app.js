// const request = require("request");

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RldmVvb24iLCJhIjoiY2sybGw4ejY1MDhibDNnanAwemhrY29oaCJ9.MBFr-Efsr3ZhvQpD2vzsOA&limit=1";

// const url =
//   "https://api.darksky.net/forecast/5e8e642e789e98206d2ff11b5b57051f/37.8267,-122.4233?units=si&lang=zh";

// request({ url, json: true }, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else if (res.body.error) {
//     console.log(res.body.code, res.body.error);
//   } else {
//     console.log(res.body.currently);
//   }
// });

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else if (response.body.features.length === 0) {
//     console.log("Location not found");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

const add = (na, nb, callback) => {
  setTimeout(() => {
    const add = na + nb;
    console.log("log", add);
    callback(add);
  }, 2000);
};

add(1, 4, sum => console.log("from", sum));
