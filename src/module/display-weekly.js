import { generateWeatherWidget } from "./create-weather-widget";
import { weatherReportArray } from "./update-weather-report";

async function displayWeekly() {
  const titleOne = await generateWeatherWidget("", weatherReportArray[0].title);
  const dayOneCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "today",
    weatherReportArray[0].todayMaximumTemperature,
    weatherReportArray[0].todayMinimumTemperature
  );
  const dayTwoCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "two",
    weatherReportArray[0].dayTwoMaximumTemperature,
    weatherReportArray[0].dayTwoMinimumTemperature
  );
  const dayThreeCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "three",
    weatherReportArray[0].dayThreeMaximumTemperature,
    weatherReportArray[0].dayThreeMinimumTemperature
  );
  const dayFourCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "four",
    weatherReportArray[0].dayFourMaximumTemperature,
    weatherReportArray[0].dayFourMinimumTemperature
  );
  const dayFiveCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "five",
    weatherReportArray[0].dayFiveMaximumTemperature,
    weatherReportArray[0].dayFiveMinimumTemperature
  );
  const daySixCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "six",
    weatherReportArray[0].daySixMaximumTemperature,
    weatherReportArray[0].daySixMinimumTemperature
  );
  const daySevenCityOne = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "seven",
    weatherReportArray[0].daySevenMaximumTemperature,
    weatherReportArray[0].daySevenMinimumTemperature
  );

  const titleTwo = await generateWeatherWidget("", weatherReportArray[1].title);
  const dayOneCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "today",
    weatherReportArray[1].todayMaximumTemperature,
    weatherReportArray[1].todayMinimumTemperature
  );
  const dayTwoCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "two",
    weatherReportArray[1].dayTwoMaximumTemperature,
    weatherReportArray[1].dayTwoMinimumTemperature
  );
  const dayThreeCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "three",
    weatherReportArray[1].dayThreeMaximumTemperature,
    weatherReportArray[1].dayThreeMinimumTemperature
  );
  const dayFourCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "four",
    weatherReportArray[1].dayFourMaximumTemperature,
    weatherReportArray[1].dayFourMinimumTemperature
  );
  const dayFiveCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "five",
    weatherReportArray[1].dayFiveMaximumTemperature,
    weatherReportArray[1].dayFiveMinimumTemperature
  );
  const daySixCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "six",
    weatherReportArray[1].daySixMaximumTemperature,
    weatherReportArray[1].daySixMinimumTemperature
  );
  const daySevenCityTwo = await generateWeatherWidget(
    '<svg xmlns="http://www.w3.org/2000/svg" height="50px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>',
    "seven",
    weatherReportArray[1].daySevenMaximumTemperature,
    weatherReportArray[1].daySevenMinimumTemperature
  );
}

export { displayWeekly };
