import { dailyButton, leftContainer, rightContainer } from "./dom-query";

let generateWeatherWidget = (condition, label, dataOne, dataTwo) => {
  let weatherDetailsContainer = document.createElement("div");
  weatherDetailsContainer.setAttribute("class", "weather-details-container");
  let weatherDetails = document.createElement("div");
  weatherDetails.setAttribute("class", "weather-details");

  let weatherIcon = document.createElement("img");
  if (condition === "feels like") {
    weatherIcon.src = "../src/image/feels-like.svg";
  } else if (condition === "humidity") {
    weatherIcon.src = "../src/image/humidity.svg";
  } else if (condition === "temperature") {
    weatherIcon.src = "../src/image/temperature.svg";
  } else if (condition === "snow") {
    weatherIcon.src = "../src/image/snow.svg";
  } else if (condition === "rain") {
    weatherIcon.src = "../src/image/rain.svg";
  } else if (condition === "fog") {
    weatherIcon.src = "../src/image/fog.svg";
  } else if (condition === "wind") {
    weatherIcon.src = "../src/image/wind.svg";
  } else if (condition === "cloudy") {
    weatherIcon.src = "../src/image/cloudy.svg";
  } else if (condition === "partly-cloudy-day") {
    weatherIcon.src = "../src/image/partly-cloudy-day.svg";
  } else if (condition === "partly-cloudy-night") {
    weatherIcon.src = "../src/image/partly-cloudy-night.svg";
  } else if (condition === "clear-day") {
    weatherIcon.src = "../src/image/clear-day.svg";
  } else if (condition === "clear-night") {
    weatherIcon.src = "../src/image/clear-night.svg";
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
