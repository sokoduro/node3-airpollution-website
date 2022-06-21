const request = require("request");

//const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

const url =
  "https://api.openweathermap.org/data/2.5/air_pollution?lat=6.2012&lon=1.6913&appid=7351d39ca42c52a64d3bd17dcf8138d9";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.list);
  //console.log("co", data.list[0].components.co);
  //   console.log("no", data.list[0].components.no);
  //   console.log("no2", data.list[0].components.no2);
  //   console.log("o3", data.list[0].components.o3);
  //   console.log("so2", data.list[0].components.so2);
  //   console.log("pm2_5", data.list[0].components.pm2_5);
  //   console.log("pm10", data.list[0].components.pm10);
  //   console.log("nh3", data.list[0].components.nh3);
  //   console.log(data.list[0].main.aqi);
  //   console.log(data.coord);
});
