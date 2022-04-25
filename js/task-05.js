const inputEl = document.querySelector('[id="name-input"]');
const outputEl = document.querySelector('[id="name-output"]');

const nameChange = (event) => {
  if (outputEl.textContent !== "") {
    outputEl.textContent = event.currentTarget.value;
  }
  if (outputEl.textContent === "") {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", nameChange);
