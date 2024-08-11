import "../style/index.css";
import { themeSlider, dailyButton, weeklyButton } from "../module/dom-query";
import { toggleTheme } from "../module/theme-toggle";
import { displayDaily } from "../module/display-daily";
import { clearDisplay } from "../module/clear-display";
import { displayWeekly } from "../module/display-weekly";

themeSlider.addEventListener("click", toggleTheme);
toggleTheme();
displayDaily("durham", "orlando");
dailyButton.addEventListener("click", () => {
  clearDisplay();
  displayDaily("durham", "orlando");
  dailyButton.setAttribute("class", "active");
  weeklyButton.setAttribute("class", "inactive");
});
weeklyButton.addEventListener('click', () => {
  clearDisplay();
  displayWeekly();
  weeklyButton.setAttribute('class', 'active');
  dailyButton.setAttribute('class', 'inactive');
})