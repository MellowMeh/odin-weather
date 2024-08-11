import { leftContainer, rightContainer } from "./dom-query";

let clearDisplay = () => {
  while (leftContainer.firstChild) {
    leftContainer.removeChild(leftContainer.firstChild);
  }
  while (rightContainer.firstChild) {
    rightContainer.removeChild(rightContainer.firstChild);
  }
};

export { clearDisplay };
