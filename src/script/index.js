import "../style/index.css";
import { themeSlider, dailyButton, weeklyButton } from "../module/dom-query";
import { toggleTheme } from "../module/theme-toggle";
import { displayDaily } from "../module/display-daily";
import { clearDisplay } from "../module/clear-display";

themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
displayDaily("durham", "orlando");
dailyButton.addEventListener("click", () => {
  clearDisplay();
  displayDaily("durham", "orlando");
  dailyButton.setAttribute("class", "active");
  weeklyButton.setAttribute("class", "inactive");
});
