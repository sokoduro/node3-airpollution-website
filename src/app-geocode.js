const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=c27671e0141d7e188f09980043771a02&query=5.550,%20-0.217";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      " It is currently " +
      response.body.current.temperature +
      " degress out. There is a " +
      response.body.current.feelslike +
      "% chance of rain."
  );
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Accra.json?access_token=pk.eyJ1Ijoic29rb2R1cm8iLCJhIjoiY2t0eTc3ZmFlMWJpYzJubXhod2UxdXlsOSJ9.Es4uFSJxZpQ0gCqkdimGyg";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
