const button = document.getElementById("calculate-button");
const result = document.getElementById("result-value");

function regraDeTres() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  return result.innerHTML = (c * b / a).toFixed(2);
}

button.addEventListener("click", regraDeTres);