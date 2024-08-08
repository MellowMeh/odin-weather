function weatherReportConstructor (weatherData){
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
  return {...weatherReport};
}

export { weatherReportConstructor };
