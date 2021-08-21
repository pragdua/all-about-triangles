const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");

const output = document.querySelector("#output");

const calcHypo = (a, b) => {
  return Math.sqrt(a * a + b * b);
};

const isTriangle = () => {
  const side1 = Number(inputs[0].value);
  const side2 = Number(inputs[1].value);
  const hyp = calcHypo(side1, side2);

  output.innerText = `Your hypotenuse is ` + hyp;
};

isTriangleButton.addEventListener("click", isTriangle);
