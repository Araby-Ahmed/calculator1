let container = document.querySelector(".container");
// numbers
let cero = document.querySelector(".num0");
let uno = document.querySelector(".num1");
let dos = document.querySelector(".num2");
let tres = document.querySelector(".num3");
let cuatro = document.querySelector(".num4");
let cinco = document.querySelector(".num5");
let seis = document.querySelector(".num6");
let siete = document.querySelector(".num7");
let ocho = document.querySelector(".num8");
let nueve = document.querySelector(".num9");
let ponto = document.querySelector(".numpo");
// math symbols
let más = document.querySelector(".mas");
let menos = document.querySelector(".menos");
let por = document.querySelector(".por");
let dividido = document.querySelector(".dividido");
let cuadrado = document.querySelector(".cuadrado");
let igual = document.querySelector(".igual");
let del = document.querySelector(".del");
/////////////////////////////////////////
let todo = [
  cero,
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  ponto,
];
let precent = document.querySelector(".precent");
let math = [más, menos, dividido, cuadrado, por, precent];
//input
let input = document.querySelector(".input");
input.focus();
let input2 = document.querySelector(".input2");
///
// result
let result = document.querySelector(".result");
// precent
//
let stash = [];
let stash2 = [];
// let state
let state = "";
// numbers
todo.forEach(
  (e) =>
    (e.onclick = function () {
      if (input2.style.display === "block") {
        stash2.push(e.textContent);
        input2.value = stash2.join("");
      } else {
        stash.push(e.textContent);
        input.value = stash.join("");
        result.textContent = "Result";
      }
    })
);
/// delete
del.onclick = function () {
  if (stash.length > 0) {
    if (input2.style.display === "block") {
      stash2.pop();
      input2.value = stash2.join("");
    } else {
      stash.pop();
      input.value = stash.join("");
    }
    if (input2.value === "") {
      input.style.display = "block";
      input2.style.display = "none";
    }
  }
};

// shoghl b2a
math.forEach(
  (e) =>
    (e.onclick = function () {
      state = e.textContent;
      if (input.value !== "") {
        result.textContent = `${input.value} ${state}`;
        input.style.display = "none";
        input2.style.display = "block";
      }
      if (state === cuadrado.textContent) {
        input2.style.display = "none";
      }
    })
);

/// mathinnng

igual.onclick = function () {
  if (state === más.textContent) {
    result.textContent = `${input.value} ${state} ${input2.value} = ${
      +input.value + +input2.value
    }`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  } else if (state === menos.textContent) {
    result.textContent = `${input.value} ${state} ${input2.value} = ${
      +input.value - +input2.value
    }`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  } else if (state === por.textContent) {
    result.textContent = `${input.value} ${state} ${input2.value} = ${
      +input.value * +input2.value
    }`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  } else if (state === dividido.textContent) {
    result.textContent = `${input.value} ${state} ${input2.value} = ${
      +input.value / +input2.value
    }`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  } else if (state === cuadrado.textContent) {
    result.textContent = `${input.value} ${state}  = ${Math.pow(
      +input.value,
      2
    )}`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  } else if (state === precent.textContent) {
    result.textContent = `${input.value} From ${input2.value} = ${Math.floor(
      (input.value / input2.value) * 100
    )}%`;
    input.style.display = "block";
    input2.style.display = "none";
    stash = [];
    stash2 = [];
    input.value = "";
  }
};
