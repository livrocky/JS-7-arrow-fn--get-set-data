//declatarion
function sumDeclaration(sk1, sk2, sk3, sk4) {
  const result = sk1 + sk2 - sk3 - sk4;
  console.log(result);
  return result;
}
sumDeclaration(10, 20, 5, 10);

//expression
const sumExpression = function (sk1, sk2, sk3, sk4) {
  const result = sk1 + sk2 - sk3 - sk4;
  console.log(result);
  return result;
};
sumExpression(10, 20, 5, 10);

//arrow su return
const sumReturnArrow = (sk1, sk2, sk3, sk4) => {
  const result = sk1 + sk2 - sk3 - sk4;
  console.log(result);
  return result;
};
sumReturnArrow(10, 20, 5, 10);

//arrow be return
const sumArrow = (sk1, sk2, sk3, sk4) => sk1 + sk2 - sk3 - sk4;
const result = sumArrow(10, 20, 5, 10);
console.log(result);

/// parasyti visai budais funckija kuri paima 4 sk ir grazina
// 2 pirmus sudetus ir atimti likusiu 2

// sukurti funkcija kuri pavercia minutes i sekundes

function minTosec(minutes) {
  return minutes * 60;
}

const fiveMinIs = minTosec(5);
console.log("fiveMinIs ===", fiveMinIs);

// sukurti funkcija kuri ideda reiksme i html el kurio class === 'app'

function putValueToApp(reiksme, className) {
  // 1. paimti reiksme
  // 2. nusitaikyti i el su class app
  const appEl = document.querySelector(className);
  if (appEl === null) {
    console.log("neradom el su klase app");
    // nutraukti funkcijos vygdyma
    return;
  }
  // 2. ideti i el kurio class app
  appEl.textContent = reiksme;
}

putValueToApp(`five minutes in sec is ${fiveMinIs}`, ".app");
putValueToApp(`five minutes in sec is ${minTosec(12)}`, ".blue");
putValueToApp(`five minutes in sec is ${minTosec(15)}`, "h1");
