import { weatherReportConstructor } from "./create-weather-report";
import { readWeatherReport } from "./read-weather-report";

const weatherReportArray = [];

async function updateWeatherReport(city) {
  const weatherData = await readWeatherReport(city);
  const weatherReport = await weatherReportConstructor(weatherData);
  weatherReportArray.push(weatherReport);
  console.log(weatherReportArray);
}

export { updateWeatherReport, weatherReportArray };
