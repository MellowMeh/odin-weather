import { secondsInDay } from "date-fns/constants";
import { currentDayOfWeek, fifthDayOfWeek, fourthDayOfWeek, secondDayOfWeek, seventhDayOfWeek, sixthDayOfWeek, thirdDayOfWeek } from "./create-days-of-week";
import { generateWeatherWidget } from "./create-weather-widget";
import { weatherReportArray } from "./update-weather-report";

async function displayWeekly() {
  const titleOne = await generateWeatherWidget("", '', weatherReportArray[0].title);
  const dayOneCityOne = await generateWeatherWidget(
    weatherReportArray[0].todayConditionsIcon,
    currentDayOfWeek,
    weatherReportArray[0].todayMaximumTemperature,
    weatherReportArray[0].todayMinimumTemperature
  );
  const dayTwoCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayTwoConditionsIcon,
    secondDayOfWeek,
    weatherReportArray[0].dayTwoMaximumTemperature,
    weatherReportArray[0].dayTwoMinimumTemperature
  );
  const dayThreeCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayThreeConditionsIcon,
    thirdDayOfWeek,
    weatherReportArray[0].dayThreeMaximumTemperature,
    weatherReportArray[0].dayThreeMinimumTemperature
  );
  const dayFourCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayFourConditionsIcon,
    fourthDayOfWeek,
    weatherReportArray[0].dayFourMaximumTemperature,
    weatherReportArray[0].dayFourMinimumTemperature
  );
  const dayFiveCityOne = await generateWeatherWidget(
    weatherReportArray[0].dayFiveConditionsIcon,
    fifthDayOfWeek,
    weatherReportArray[0].dayFiveMaximumTemperature,
    weatherReportArray[0].dayFiveMinimumTemperature
  );
  const daySixCityOne = await generateWeatherWidget(
    weatherReportArray[0].daySixConditionsIcon,
    sixthDayOfWeek,
    weatherReportArray[0].daySixMaximumTemperature,
    weatherReportArray[0].daySixMinimumTemperature
  );
  const daySevenCityOne = await generateWeatherWidget(
    weatherReportArray[0].daySevenConditionsIcon,
    seventhDayOfWeek,
    weatherReportArray[0].daySevenMaximumTemperature,
    weatherReportArray[0].daySevenMinimumTemperature
  );

  const titleTwo = await generateWeatherWidget("", '', weatherReportArray[1].title);
  const dayOneCityTwo = await generateWeatherWidget(
    weatherReportArray[1].todayConditionsIcon,
    currentDayOfWeek,
    weatherReportArray[1].todayMaximumTemperature,
    weatherReportArray[1].todayMinimumTemperature
  );
  const dayTwoCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayTwoConditionsIcon,
    secondDayOfWeek,
    weatherReportArray[1].dayTwoMaximumTemperature,
    weatherReportArray[1].dayTwoMinimumTemperature
  );
  const dayThreeCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayThreeConditionsIcon,
    thirdDayOfWeek,
    weatherReportArray[1].dayThreeMaximumTemperature,
    weatherReportArray[1].dayThreeMinimumTemperature
  );
  const dayFourCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayFourConditionsIcon,
    fourthDayOfWeek,
    weatherReportArray[1].dayFourMaximumTemperature,
    weatherReportArray[1].dayFourMinimumTemperature
  );
  const dayFiveCityTwo = await generateWeatherWidget(
    weatherReportArray[1].dayFiveConditionsIcon,
    fifthDayOfWeek,
    weatherReportArray[1].dayFiveMaximumTemperature,
    weatherReportArray[1].dayFiveMinimumTemperature
  );
  const daySixCityTwo = await generateWeatherWidget(
    weatherReportArray[1].daySixConditionsIcon,
    sixthDayOfWeek,
    weatherReportArray[1].daySixMaximumTemperature,
    weatherReportArray[1].daySixMinimumTemperature
  );
  const daySevenCityTwo = await generateWeatherWidget(
    weatherReportArray[1].daySevenConditionsIcon,
    seventhDayOfWeek,
    weatherReportArray[1].daySevenMaximumTemperature,
    weatherReportArray[1].daySevenMinimumTemperature
  );
}

export { displayWeekly };
