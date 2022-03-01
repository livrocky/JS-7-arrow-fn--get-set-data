// sukurti funkcija kuti paima h1 el texta// ir iraso ji i paragrafa kurio id === 'result'

// sukurti funkcija kuti paima h1 el texta// ir perkelti ji i paragrafa kurio id === 'result'

function fn() {
  const elH1 = document.querySelector("h1");
  const elP = document.getElementById("result");
  const result = (elH1.innerHTML = elP.innerHTML);
  console.log(result);
  return result;

  //NUSITAIKYK elP taisyklingai, uzidek id. verta kurtis nauja html.
}
fn();
