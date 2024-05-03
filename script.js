function clearInput() {
  document.getElementById("display").value = "";
}

function append(num) {
  document.getElementById("display").value += num;
}

function calculate() {
  try {
    document.getElementById("display").value = eval(display.value);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

addEventListener("keydown", function (event) {
  let keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "(",
    ")",
  ];
  if (keys.includes(event.key)) {
    append(event.key);
  }
  if (event.key === "c" || event.key === "C") {
    clearInput();
  }
  if (event.key === "Enter" || event.key === "=") {
    calculate();
  }
  if (event.key === "Backspace") {
    document.getElementById("display").value = document
      .getElementById("display")
      .value.slice(0, -1);
  }
});
