// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu. //

const displayFar = document.querySelector("h1");
const btnEl = document.querySelector("button");
const inputEl = document.getElementById("temp");

btnEl.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const temp = inputEl.value;
  displayFar.textContent = `${(temp * 1.8 + 32).toFixed(2)} °F`;
}
