city = ["Obuasi", "Accra", "Takoradi", "Kumasi", "Tamale"];

const cname = city[2];
console.log(cname);

fetch("http://localhost:3000/weather?address=" + cname).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      const derror = data.error;
      console.log(derror);
    } else {
      const dlocation = data.location;
      const dforecast = data.forecast;
      console.log(dlocation);
      console.log(dforecast);
    }
  });
});
