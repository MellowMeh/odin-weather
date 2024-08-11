import { generateWeatherWidget } from "./create-weather-widget";
import { weatherReportArray } from "./update-weather-report";

async function displayWeekly() {
  const titleOne = await generateWeatherWidget("", '', weatherReportArray[0].title);
  const dayOneCityOne = await generateWeatherWidget(
    weatherReportArray[0].todayConditionsIcon,
    "today",
    weatherReportArray[0].todayMaximumTemperature,
    weatherReportArray[0].todayMinimumTemperature
  );
  const dayTwoCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayTwoConditionsIcon,
    "two",
    weatherReportArray[0].dayTwoMaximumTemperature,
    weatherReportArray[0].dayTwoMinimumTemperature
  );
  const dayThreeCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayThreeConditionsIcon,
    "three",
    weatherReportArray[0].dayThreeMaximumTemperature,
    weatherReportArray[0].dayThreeMinimumTemperature
  );
  const dayFourCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayFourConditionsIcon,
    "four",
    weatherReportArray[0].dayFourMaximumTemperature,
    weatherReportArray[0].dayFourMinimumTemperature
  );
  const dayFiveCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayFiveConditionsIcon,
    "five",
    weatherReportArray[0].dayFiveMaximumTemperature,
    weatherReportArray[0].dayFiveMinimumTemperature
  );
  const daySixCityOne = await generateWeatherWidget(
    weatherReportArray[0].daySixConditionsIcon,
    "six",
    weatherReportArray[0].daySixMaximumTemperature,
    weatherReportArray[0].daySixMinimumTemperature
  );
  const daySevenCityOne = await generateWeatherWidget(
    weatherReportArray[0].daySevenConditionsIcon,
    "seven",
    weatherReportArray[0].daySevenMaximumTemperature,
    weatherReportArray[0].daySevenMinimumTemperature
  );

  const titleTwo = await generateWeatherWidget("", '', weatherReportArray[1].title);
  const dayOneCityTwo = await generateWeatherWidget(
    weatherReportArray[1].todayConditionsIcon,
    "today",
    weatherReportArray[1].todayMaximumTemperature,
    weatherReportArray[1].todayMinimumTemperature
  );
  const dayTwoCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayTwoConditionsIcon,
    "two",
    weatherReportArray[1].dayTwoMaximumTemperature,
    weatherReportArray[1].dayTwoMinimumTemperature
  );
  const dayThreeCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayThreeConditionsIcon,
    "three",
    weatherReportArray[1].dayThreeMaximumTemperature,
    weatherReportArray[1].dayThreeMinimumTemperature
  );
  const dayFourCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayFourConditionsIcon,
    "four",
    weatherReportArray[1].dayFourMaximumTemperature,
    weatherReportArray[1].dayFourMinimumTemperature
  );
  const dayFiveCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayFiveConditionsIcon,
    "five",
    weatherReportArray[1].dayFiveMaximumTemperature,
    weatherReportArray[1].dayFiveMinimumTemperature
  );
  const daySixCityTwo = await generateWeatherWidget(
    weatherReportArray[1].daySixConditionsIcon,
    "six",
    weatherReportArray[1].daySixMaximumTemperature,
    weatherReportArray[1].daySixMinimumTemperature
  );
  const daySevenCityTwo = await generateWeatherWidget(
    weatherReportArray[1].daySevenConditionsIcon,
    "seven",
    weatherReportArray[1].daySevenMaximumTemperature,
    weatherReportArray[1].daySevenMinimumTemperature
  );
}

export { displayWeekly };
