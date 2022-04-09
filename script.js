const input = document.getElementById("input");
const input_num = document.getElementById("input-num");
const output = document.getElementById("output");
const btn_submit = document.querySelector(".btn-submit");

// btn_submit.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(input.textContent);
// });

const calc = (e) => {
  e.preventDefault();
  console.log(input.textContent);
};

btn_submit.onsubmit = (e) => {
  console.log("ok");
};

