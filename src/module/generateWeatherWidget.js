import { leftContainer } from "./dom-query";

let generateWeatherWidget = (svg, label, dataOne, dataTwo) => {
  let weatherDetailsContainer = document.createElement("div");
  weatherDetailsContainer.setAttribute("class", "weather-details-container");
  let weatherDetails = document.createElement("div");
  weatherDetails.setAttribute("class", "weather-details");
  let weatherIconCode = svg;
  let weatherIcon = document.createElement("div");
  weatherIcon.setAttribute("class", "weather-icon");
  weatherIcon.innerHTML = weatherIconCode;
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
  leftContainer.appendChild(weatherDetailsContainer);
};

export { generateWeatherWidget };
