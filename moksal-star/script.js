const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

// num === 3
//
//   *    212
//  ***   131
// *****  050
//  ***   131
//   *    212

// num === 4
//
//   *    313
//  ***   232
// *****  151
//******* 070
// *****  151
//  ***   232
//   *    313

const createStar = (num) => {
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    const line =
      "&nbsp;".repeat(num - i) +
      "*".repeat(2 * i - 1) +
      "&nbsp;".repeat(num - i);
    div.innerHTML = line;

    main.appendChild(div);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = input.value;
  console.log("num", num);

  if (num) {
    while (main.hasChildNodes()) {
      console.log("delete");
      main.removeChild(main.firstChild);
    }

    createStar(num);

    input.value = "";
  }
});
