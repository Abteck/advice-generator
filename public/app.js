const advice = document.getElementById("advice");
const number = document.getElementById("number");
const button = document.getElementById("button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => {
      advice.innerHTML = data.slip.advice;
      number.innerHTML = data.slip.id;
    });
}

button.addEventListener("click", getAdvice);
