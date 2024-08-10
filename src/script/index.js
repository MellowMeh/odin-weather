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


themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
updateWeatherReport("raleigh");
updateWeatherReport("orlando");
