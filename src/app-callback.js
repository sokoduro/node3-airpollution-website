const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Accra", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(5.55, -0.217, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
