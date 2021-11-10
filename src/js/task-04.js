let counterValue = 0;
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

const decremBtnEvent = () => {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
};
decrementButton.addEventListener("click", decremBtnEvent);

const incremBtnEvent = () => {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
};
incrementButton.addEventListener("click", incremBtnEvent);
