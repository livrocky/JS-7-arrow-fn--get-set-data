//Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

const inputEl = document.getElementById("year");
const btnEl = document.querySelector("button");
const resultDisplay = document.getElementById("display");

btnEl.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const yearInput = inputEl.value;
  if (yearInput % 100 === 0 ? yearInput % 400 === 0 : yearInput % 4 === 0) {
    resultDisplay.textContent = `Tai yra keliamieji metai`;
  } else if (yearInput < 0) {
    resultDisplay.textContent = `Klaida, netinkami duomenys`;
  } else {
    resultDisplay.textContent = `Tai nėra keliamieji metai`;
  }
}
