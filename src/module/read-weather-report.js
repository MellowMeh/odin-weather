//Code included to practice fetch requests with promises syntax
// let getWeatherReport = (city) => {
//   fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WNL4XSRW6RREQXLUGP6FJDDWE&contentType=json`,
//     { mode: "cors" }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       return console.log(response);
//     });
// };

async function readWeatherReport() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WNL4XSRW6RREQXLUGP6FJDDWE&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

export { readWeatherReport };
