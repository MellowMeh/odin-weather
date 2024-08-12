import { generateWeatherWidget } from "./create-weather-widget";
import {
  updateWeatherReport,
  weatherReportArray,
} from "./update-weather-report";

async function displayDaily(cityOne, cityTwo) {
  if (weatherReportArray.length === 0) {
    const firstCity = await updateWeatherReport(cityOne);
    const secondCity = await updateWeatherReport(cityTwo);
    const log = await console.log(weatherReportArray);
  }

  const titleOne = await generateWeatherWidget(
    "",
    "",
    weatherReportArray[0].title
  );

  const conditionsOne = await generateWeatherWidget(
    weatherReportArray[0].currentConditionsIcon,
    weatherReportArray[0].currentConditionsIcon
  );

  const feelsLikeOne = await generateWeatherWidget(
    "feels like",
    "feels like",
    weatherReportArray[0].currentFeelsLike + " °f"
  );

  const humidityOne = await generateWeatherWidget(
    "humidity",
    "humidity",
    weatherReportArray[0].currentHumidity + "%"
  );

  const temperatureOne = await generateWeatherWidget(
    "temperature",
    "temperature",
    weatherReportArray[0].currentTemperature + "°f"
  );

  const titleTwo = await generateWeatherWidget(
    "",
    "",
    weatherReportArray[1].title
  );

  const conditionsTwo = await generateWeatherWidget(
    weatherReportArray[1].currentConditionsIcon,
    weatherReportArray[1].currentConditionsIcon
  );

  const feelsLikeTwo = await generateWeatherWidget(
    "feels like",
    "feels like",
    weatherReportArray[1].currentFeelsLike + " °f"
  );

  const humidityTwo = await generateWeatherWidget(
    "humidity",
    "humidity",
    weatherReportArray[1].currentHumidity + "%"
  );

  const temperatureTwo = await generateWeatherWidget(
    "temperature",
    "temperature",
    weatherReportArray[1].currentTemperature + "°f"
  );
}

export { displayDaily };
