import { dailyButton, leftContainer, rightContainer } from "./dom-query";
import feelsLike from "../image/feels-like.svg";
import humidity from "../image/humidity.svg";
import temperature from "../image/temperature.svg";
import snow from "../image/snow.svg";
import rain from "../image/rain.svg";
import fog from "../image/rain.svg";
import wind from "../image/wind.svg";
import cloudy from "../image/cloudy.svg";
import partlyCloudyDay from "../image/partly-cloudy-day.svg";
import partlyCloudyNight from "../image/partly-cloudy-night.svg";
import clearDay from "../image/clear-day.svg";
import clearNight from "../image/clear-night.svg";

let generateWeatherWidget = (condition, label, dataOne, dataTwo) => {
  let weatherDetailsContainer = document.createElement("div");
  weatherDetailsContainer.setAttribute("class", "weather-details-container");
  let weatherDetails = document.createElement("div");
  weatherDetails.setAttribute("class", "weather-details");

  let weatherIcon = document.createElement("img");
  if (condition === "feels like") {
    weatherIcon.src = feelsLike;
  } else if (condition === "humidity") {
    weatherIcon.src = humidity;
  } else if (condition === "temperature") {
    weatherIcon.src = temperature;
  } else if (condition === "snow") {
    weatherIcon.src = snow;
  } else if (condition === "rain") {
    weatherIcon.src = rain;
  } else if (condition === "fog") {
    weatherIcon.src = fog;
  } else if (condition === "wind") {
    weatherIcon.src = wind;
  } else if (condition === "cloudy") {
    weatherIcon.src = cloudy;
  } else if (condition === "partly-cloudy-day") {
    weatherIcon.src = partlyCloudyDay;
  } else if (condition === "partly-cloudy-night") {
    weatherIcon.src = partlyCloudyNight;
  } else if (condition === "clear-day") {
    weatherIcon.src = clearDay;
  } else if (condition === "clear-night") {
    weatherIcon.src = clearNight;
  }

  let weatherDetailsInfo = document.createElement("div");
  weatherDetailsInfo.setAttribute("class", "weather-details-info");
  let weatherDetailsLabel = document.createElement("div");
  weatherDetailsLabel.setAttribute("class", "weather-details-label");
  weatherDetailsLabel.textContent = label;
  let weatherDetailsDataOne = document.createElement("div");
  weatherDetailsDataOne.setAttribute("class", "weather-details-data-one");
  weatherDetailsDataOne.textContent = dataOne;
  let weatherDetailsDataTwo = document.createElement("div");
  weatherDetailsDataTwo.setAttribute("class", "weather-details-data-two");
  weatherDetailsDataTwo.textContent = dataTwo;
  weatherDetails.appendChild(weatherIcon);
  weatherDetailsInfo.appendChild(weatherDetailsLabel);
  weatherDetailsInfo.appendChild(weatherDetailsDataOne);
  weatherDetailsInfo.appendChild(weatherDetailsDataTwo);
  weatherDetails.appendChild(weatherDetailsInfo);
  weatherDetailsContainer.appendChild(weatherDetails);

  if (dailyButton.className === "active") {
    if (leftContainer.children.length < 5) {
      leftContainer.appendChild(weatherDetailsContainer);
    } else {
      rightContainer.appendChild(weatherDetailsContainer);
    }
  } else {
    if (leftContainer.children.length < 8) {
      leftContainer.appendChild(weatherDetailsContainer);
    } else {
      rightContainer.appendChild(weatherDetailsContainer);
    }
  }
};

export { generateWeatherWidget };
