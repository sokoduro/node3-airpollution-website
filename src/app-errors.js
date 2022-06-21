const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=c27671e0141d7e188f09980043771a02&query=5.550,%20-0.217";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        " It is currently " +
        response.body.current.temperature +
        " degress out. There is a " +
        response.body.current.feelslike +
        "% chance of rain."
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Accra.json?access_token=pk.eyJ1Ijoic29rb2R1cm8iLCJhIjoiY2t0eTc3ZmFlMWJpYzJubXhod2UxdXlsOSJ9.Es4uFSJxZpQ0gCqkdimGyg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
