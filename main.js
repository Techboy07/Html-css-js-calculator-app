//variables
let keys =
  document.querySelectorAll(".num");
//  screens
let screen = document.querySelector("#screen");
let output = document.querySelector("#screen2");

// operators
let add = document.querySelectorAll(".add");
let multiply = document.querySelectorAll(".mul")

let equalTo = document.querySelector("#equals");

let cut = document.querySelector("#delete");

let clear = document.querySelector("#clear");
// decimal point
const float = document.querySelector("#float");



<<<<<<< HEAD
     });
=======

//addition function
function plus(str) {
  let arr = str.split("+");
  return arr
    .reduce((x, y) => parseFloat(x) + parseFloat(y));
};
// subtraction function
function minus(str) {
  let arr = str.split("-");
  return arr
    .reduce((x, y) => parseFloat(x) - parseFloat(y));
};
// multiplication function
function times(str) {
  let arr = str.split("*");
  return arr
    .reduce((x, y) => parseFloat(x) * parseFloat(y));
};
// division function
function dividedBy(str) {
  let arr = str.split("/");
  return arr
    .reduce((x, y) => parseFloat(x) / parseFloat(y));
};


//functions
function evaluate(str) {
  if (/\//.test(str) == true) {
    let dReg = new
      RegExp("(\\+|\\-)?(\\d*(\\.\\d+)?)(\\/(\\+|\\-)?(\\d+(\\.\\d+)?))+", "g");
    let f = str.match(dReg);
    for (let i = 0; i < f.length; i++) {
      str = str
        .replace(f[i], dividedBy(f[i]));
    }
  }
  if (/\*/.test(str) == true) {
    let tReg = new RegExp("(\\+|\\-)?(\\d*(\\.\\d+)?)(\\*(\\+|\\-)?(\\d+(\\.\\d+)?))+", "g");
    let g = str.match(tReg);
    for (let i = 0; i < g.length; i++) {
      str = str
        .replace(g[i], times(g[i]));
    }
  }

  if (/\+/.test(str) == true) {
    let pReg = new RegExp("(\\+|\\-)?(\\d*(\\.\\d+)?)(\\+((\\+|\\-)?\\d+(\\.\\d+)?))+", "g");
    let h = str.match(pReg);
    for (let i = 0; i < h.length; i++) {
      str = str
        .replace(h[i], plus(h[i]));
    }
  }

  if (/\-/.test(str) == true) {
    let mReg = new
      RegExp("(\\+|\\-)?(\\d*(\\.\\d+)?)(\\-((\\+|\\-)?\\d+(\\.\\d+)?))+", "g");
    str = "0" + str;
    let j = str.match(mReg);

    for (let i = 0; i < j.length; i++) {
      str = str
        .replace(j[i], minus(j[i]));
    }
  }

  return times(str + "*1").toString();
};

// regex function
function matchExact(r, str) {
  let match = str.match(r);
  if (match.join("") == str) {
    return true;
  }
};

//operator function
function swap(n, arr) {
  for (let i = 0; i < n.length; i++) {
    n[i].addEventListener("click", (x, y) => {
      y = [...arr];
      x = screen.value.split("");
      if (y.includes(x[x.length - 1]) == false) {
        x.push(n[i].innerText);
      }
      if (y.includes(x[x.length - 1])) {
        x.splice(x.length - 1, 1, n[i].innerText)
      };
      screen.value = x.join("");
    })
  }

};


// button configs

//numeric keypad

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", () => {
    screen.value += keys[i].innerText
  })
};


//delete button
cut.addEventListener(
  "click", () => {
    screen.value =
      screen.value.slice(0, screen.value.length - 1)
  });

//clear screen button
clear.addEventListener(
  "click", () => {
    screen.value =
      "";
    output.value = "";
  });

// decimal point

float.addEventListener("click", () => {
  const regEx = new RegExp("\\d*(\\.?\\d*(\\+|\\-|\\*|\\/))*\\d*", "g");
  let y = matchExact(regEx, screen.value);
  if (y == true) {
    screen.value += float.innerText;
  };
});

// equal to button

equalTo.addEventListener(
  "click", () => {
    equalTo.innerText = "";
    if (screen.value != "") {
      output.value = evaluate(screen.value);
    }
    equalTo.innerText = "=";
  });

//operator buttons

swap(add, ["+", '-']);
swap(multiply, ["*", '/']);
>>>>>>> 9c4f450 (main)
