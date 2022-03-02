//Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

const ageEl = document.getElementById("age");
const btnEl = document.querySelector("button");
const bonusDisplay = document.getElementById("title");
const bonus = 50;

btnEl.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const age = ageEl.value;
  if (age >= 20) {
    bonusDisplay.textContent = `Jūsų bonusas: ${4 * bonus} eur`;
  } else if (age >= 10) {
    bonusDisplay.textContent = `Jūsų bonusas: ${2 * bonus} eur`;
  } else if (age < 0) {
    bonusDisplay.textContent = `Klaida, neteisingas amžius`;
  } else {
    bonusDisplay.textContent = `Jūsų bonusas: ${bonus} eur`;
  }
}
