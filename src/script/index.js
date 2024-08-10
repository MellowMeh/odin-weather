import "../style/index.css";
import {
  themeSlider,
  leftContainer,
  rightContainer,
  dailyButton,
  weeklyButton,
} from "../module/dom-query";
import { toggleTheme } from "../module/theme-toggle";
import { updateWeatherReport } from "../module/update-weather-report";
import { generateDaily } from "../module/generate-daily";

themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
updateWeatherReport("raleigh");
updateWeatherReport("orlando");
generateDaily();
