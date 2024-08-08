import "../style/index.css";
import { toggleTheme } from "../module/theme-toggle";
import { createWeatherReport } from "../module/create-weather-report";

let themeSlider = document.querySelector("#checkbox");
themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
createWeatherReport('raleigh');
createWeatherReport('orlando');