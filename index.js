// `allMeasures` includes all the measures packaged with this library
import configureMeasurements from "convert-units";
import allMeasures from "convert-units/definitions/all";

const convert = configureMeasurements(allMeasures);

function updateInputField() {
  var dropdown1 = document.getElementById("unit-select");
  var dropdown2 = document.getElementById("unit-select2");
  var from = dropdown1.value; //inch, cm, mili
  var to = dropdown2.value;
  var inputv = document.getElementById("input-value");
  var v = inputv.value;
  var resultInput = document.getElementById("result-input");

  // Perform the desired calculations based on the selected value
  var conversionFactor = 0; // Placeholder value, replace with actual conversion factor

  // Update the input field with the calculated result
  console.log(v);
  console.log(to);
  resultInput.value = calculateResult(v, from, to); // Replace calculateResult with your own calculation logic
}

function calculateResult(v, from, to) {
  if (from == "meter") {
    if (to == "centimeter") return v * 100;
    if (to == "inch") return v * 39.37;
    if (to == "foot") return v * 3.281;
  }

  if (from == "inch") {
    if (to == "centimeter") return v * 2.52;
    if (to == "meter") return v / 39.37;
    if (to == "foot") return v / 12;
  }
  if (from == "foot") {
    if (to == "inch") return v * 12;
    if (to == "meter") return v / 3.281;
    if (to == "centimeter") return v * 30.48;
  }
  if (from == "centimeter") {
    if (to == "inch") return v / 2.54;
    if (to == "meter") return v / 100;
    if (to == "foot") return v / 30.48;
  }
}

const submitt = document.getElementById("submitb");
submitt.addEventListener("click", function () {
  updateInputField();
});
