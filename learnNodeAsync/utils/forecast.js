const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/5e8e642e789e98206d2ff11b5b57051f/${latitude},${longitude}?units=si&lang=zh`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback(err, undefined);
    } else if (res.body.error) {
      const err = {
        errCode: res.body.code,
        errBody: res.body.error
      };
      callback(err, undefined);
    } else {
      callback(undefined, res.body.currently);
    }
  });
};

module.exports = forecast;
