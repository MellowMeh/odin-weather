import { dailyButton, leftContainer, rightContainer } from "./dom-query";

let generateWeatherWidget = (condition, label, dataOne, dataTwo) => {
  let weatherDetailsContainer = document.createElement("div");
  weatherDetailsContainer.setAttribute("class", "weather-details-container");
  let weatherDetails = document.createElement("div");
  weatherDetails.setAttribute("class", "weather-details");

  let weatherIcon = document.createElement("img");
  if (condition === "feels like") {
    weatherIcon.src = "../src/image/feels-like.SVG";
  } else if (condition === "humidity") {
    weatherIcon.src = "../src/image/humidity.SVG";
  } else if (condition === "temperature") {
    weatherIcon.src = "../src/image/temperature.SVG";
  } else if (condition === "snow") {
    weatherIcon.src = "../src/image/snow.SVG";
  } else if (condition === "rain") {
    weatherIcon.src = "../src/image/rain.SVG";
  } else if (condition === "fog") {
    weatherIcon.src = "../src/image/fog.SVG";
  } else if (condition === "wind") {
    weatherIcon.src = "../src/image/wind.SVG";
  } else if (condition === "cloudy") {
    weatherIcon.src = "../src/image/cloudy.SVG";
  } else if (condition === "partly-cloudy-day") {
    weatherIcon.src = "../src/image/partly-cloudy-day.SVG";
  } else if (condition === "partly-cloudy-night") {
    weatherIcon.src = "../src/image/partly-cloudy-night.SVG";
  } else if (condition === "clear-day") {
    weatherIcon.src = "../src/image/clear-day.SVG";
  } else if (condition === "clear-night") {
    weatherIcon.src = "../src/image/clear-night.SVG";
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
