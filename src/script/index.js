import "../style/index.css";
import { toggleTheme } from "../module/theme-toggle";

let themeSlider = document.querySelector('#checkbox');
themeSlider.addEventListener('click', toggleTheme);
toggleTheme();