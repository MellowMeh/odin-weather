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

async function createWeatherReport(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WNL4XSRW6RREQXLUGP6FJDDWE&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const weatherReport = {
    title: weatherData.resolvedAddress,
    currentFeelsLike: weatherData.currentConditions.feelslike,
    currentHumidity: weatherData.currentConditions.humidity,
    currentTemperature: weatherData.currentConditions.temp,
    currentConditionsIcon: weatherData.currentConditions.icon,
    todayMaximumTemperature: weatherData.days[0].tempmax,
    todayMinimumTemperature: weatherData.days[0].tempmin,
    todayConditionsIcon: weatherData.days[0].icon,
    dayTwoMaximumTemperature: weatherData.days[1].tempmax,
    dayTwoMinimumTemperature: weatherData.days[1].tempmin,
    dayTwoConditionsIcon: weatherData.days[1].icon,
    dayThreeMaximumTemperature: weatherData.days[2].tempmax,
    dayThreeMinimumTemperature: weatherData.days[2].tempmin,
    dayThreeConditionsIcon: weatherData.days[2].icon,
    dayFourMaximumTemperature: weatherData.days[3].tempmax,
    dayFourMinimumTemperature: weatherData.days[3].tempmin,
    dayFourConditionsIcon: weatherData.days[3].icon,
    dayFiveMaximumTemperature: weatherData.days[4].tempmax,
    dayFiveMinimumTemperature: weatherData.days[4].tempmin,
    dayFiveConditionsIcon: weatherData.days[4].icon,
    daySixMaximumTemperature: weatherData.days[5].tempmax,
    daySixMinimumTemperature: weatherData.days[5].tempmin,
    daySixConditionsIcon: weatherData.days[5].icon,
    daySevenMaximumTemperature: weatherData.days[6].tempmax,
    daySevenMinimumTemperature: weatherData.days[6].tempmin,
    daySevenConditionsIcon: weatherData.days[6].icon,
  };
  console.log(weatherReport);
}

export { createWeatherReport };
