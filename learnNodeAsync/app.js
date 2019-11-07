const yargs = require("yargs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

yargs.command({
  command: "weather",
  describe: "enquiries weather",
  builder: {
    location: {
      describe: "enter location",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    geocode(argv.location, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        forecast(data.latitude, data.longitude, (err, forecastData) => {
          if (err) {
            console.log(err);
          } else {
            console.log(
              `${data.location}现在的天气${
                forecastData.summary
              },温度为${Math.round(
                forecastData.temperature
              )}摄氏度,降雨概率为${Math.round(
                forecastData.precipProbability * 100
              )}%`
            );
          }
        });
      }
    });
  }
});

yargs.parse();
