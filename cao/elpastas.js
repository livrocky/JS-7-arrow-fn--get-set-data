//Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

const displayReg = document.querySelector("h1");
const checkBoxEl = document.getElementById("sutinku");
const btn = document.querySelector("button");
const inputEl = document.getElementById("email");
const displayEl = document.querySelector("p");

btn.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const checkedBox = checkBoxEl.checked;
  if (checkedBox && inputEl.value != 0) {
    displayEl.textContent = `El. paštas ${inputEl.value} sėkmingai užregistruotas`;
  } else if (!checkedBox) {
    displayEl.textContent = `Registracija nesėkminga`;
  } else {
    displayEl.textContent = `Duomenys neteisingi`;
  }
}
