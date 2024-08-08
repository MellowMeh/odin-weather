import "../style/index.css";
import { toggleTheme } from "../module/theme-toggle";
import { updateWeatherReport } from "../module/update-weather-report";
import { readWeatherReport } from "../module/read-weather-report";

let themeSlider = document.querySelector("#checkbox");
themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
updateWeatherReport("raleigh");
updateWeatherReport("orlando");

