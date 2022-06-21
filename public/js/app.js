console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  const infomsg =
    "Take note of chemical abbreviations as follows- Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor  " +
    " co Сoncentration of CO (Carbon monoxide), μg/m3  " +
    "no Сoncentration of NO (Nitrogen monoxide), μg/m3  " +
    "no2 Сoncentration of NO2 (Nitrogen dioxide), μg/m3  " +
    "o3 Сoncentration of O3 (Ozone), μg/m3  " +
    "so2 Сoncentration of SO2 (Sulphur dioxide), μg/m3  " +
    "pm2_5 Сoncentration of PM2.5 (Fine particles matter), μg/m3  " +
    "pm10 Сoncentration of PM10 (Coarse particulate matter), μg/m3  " +
    "nh3 Сoncentration of NH3 (Ammonia), μg/m3  ";

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  messageThree.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        messageThree.textContent = infomsg;
      }
    });
  });
});
