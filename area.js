const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");

const output = document.querySelector("#output");

const isTriangle = () => {
  const base = Number(inputs[0].value);
  const height = Number(inputs[1].value);
  const area = 0.5 * base * height;

  output.innerText = `Your area is ` + area;
};

isTriangleButton.addEventListener("click", isTriangle);
