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
import { generateDaily } from "../module/display-daily";
import { clearDisplay } from "../module/clear-display";
import { da } from "date-fns/locale";

themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
generateDaily("durham", "orlando");
dailyButton.addEventListener("click", () => {
  clearDisplay();
  generateDaily("durham", "orlando");
  dailyButton.setAttribute("class", "active");
});
