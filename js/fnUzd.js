// parasyti visai budais funckija kuri paima 3 sk ir grazina
// visus skaicius sudetus ir atimti 10
// function declaration
// function expression
// arrow function su atskiru return
// arrow function be return

//declaration//

function sumDeclaration(sk1, sk2, sk3) {
  const result = sk1 + sk2 - sk3;
  console.log(`result===`, result);
  return result;
}
sumDeclaration(10, 20, 5);

//expression//
const sumExpression = function (sk1, sk2, sk3) {
  const result = sk1 + sk2 - sk3;
  console.log(`result===`, result);
  return result;
};
sumExpression(10, 20, 5);

//arrow su atskiru return//

const sumReturnArrow = (sk1, sk2, sk3) => {
  const result = sk1 + sk2 - sk3;
  console.log("return===", result);
  return result;
};

//arrow function be return//
