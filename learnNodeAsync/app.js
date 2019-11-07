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
    geocode(argv.location, (err, { latitude, longitude, location }) => {
      if (err) {
        console.log(err);
      } else {
        forecast(
          latitude,
          longitude,
          (err, { summary, temperature, precipProbability }) => {
            if (err) {
              console.log(err);
            } else {
              console.log(
                `${location}现在的天气${summary},温度为${Math.round(
                  temperature
                )}摄氏度,降雨概率为${Math.round(precipProbability * 100)}%`
              );
            }
          }
        );
      }
    });
  }
});

yargs.parse();
