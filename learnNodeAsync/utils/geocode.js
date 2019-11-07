const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic3RldmVvb24iLCJhIjoiY2sybGw4ejY1MDhibDNnanAwemhrY29oaCJ9.MBFr-Efsr3ZhvQpD2vzsOA&limit=1`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback(error, undefined);
    } else if (response.body.features.length === 0) {
      callback("Location not found", undefined);
    } else {
      const data = {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      };

      callback(undefined, data);
    }
  });
};

module.exports = geocode;
