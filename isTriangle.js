const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");

const output = document.querySelector("#output");

const sumOfAngles = (angle1, angle2, angle3) => {
  const sum = angle1 + angle2 + angle3;
  return sum;
};

const isTriangle = () => {
  const angle1 = Number(inputs[0].value);
  const angle2 = Number(inputs[1].value);
  const angle3 = Number(inputs[2].value);
  const sum = sumOfAngles(angle1, angle2, angle3);

  if (sum === 180) {
    output.innerText = ` The angles form a triangle 😊`;
  } else {
    output.innerText = ` Oh no! Angles don't form a triangle 😢`;
  }
};

isTriangleButton.addEventListener("click", isTriangle);
