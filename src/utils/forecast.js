const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // const url =
  //   "http://api.weatherstack.com/current?access_key=c27671e0141d7e188f09980043771a02&query=" +
  //   latitude +
  //   "," +
  //   longitude +
  //   "&units=f";

  const url =
    "https://api.openweathermap.org/data/2.5/air_pollution?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=7351d39ca42c52a64d3bd17dcf8138d9";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "o3 =" +
          response.body.list[0].components.o3 +
          "    ---   nh3 =" +
          response.body.list[0].components.nh3 +
          "    ---   co =" +
          response.body.list[0].components.co +
          "    ---   no =" +
          response.body.list[0].components.no +
          "    ---   no2 =" +
          response.body.list[0].components.no2 +
          "    ---   so2 =" +
          response.body.list[0].components.so2 +
          "    ---   pm 2.5 =" +
          response.body.list[0].components.pm2_5 +
          "    ---   pm10 =" +
          response.body.list[0].components.pm10 +
          " ---Air Quality Index =" +
          response.body.list[0].main.aqi +
          "Date    " +
          new Date(response.body.list[0].dt * 1000).toDateString()
      );
    }
  });

  // console.log("co", data.list[0].components.co);
  // console.log("no", data.list[0].components.no);
  // console.log("no2", data.list[0].components.no2);
  // console.log("o3", data.list[0].components.o3);
  // console.log("so2", data.list[0].components.so2);
  // console.log("pm2_5", data.list[0].components.pm2_5);
  // console.log("pm10", data.list[0].components.pm10);
  // console.log("nh3", data.list[0].components.nh3);
  // console.log(data.list[0].main.aqi);
  // console.log(data.coord);

  // request({ url: url, json: true }, (error, response) => {
  //   if (error) {
  //     callback("Unable to connect to weather service!", undefined);
  //   } else if (response.body.error) {
  //     callback("Unable to find location", undefined);
  //   } else {
  //     callback(
  //       undefined,
  //       response.body.current.weather_descriptions[0] +
  //         ". It is currently " +
  //         response.body.current.temperature +
  //         " degress out. There is a " +
  //         response.body.current.feelslike +
  //         "% chance of rain."
  //     );
  //   }
  // });
};

module.exports = forecast;
