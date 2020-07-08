import "./styles.css";

import { create, all } from "mathjs";

const config = {
  number: "Fraction"
};
const math = create(all, config);

// This creates an array of variables using the Array() constructor and the fill()
let [roWidth, roHeight, outsideFrameWidth, outsideFrameHeight, shimGap] = Array(
  5
).fill(0);

document.querySelector("body").innerHTML = `
<label for="">Rough Opening Width</label>
<br>
<input id="roWidth" type="text" name="" value="${roWidth}">
<br>
<label for="">Rough Opening Width</label>
<br>
<input id="roHeight" type="text" name="" value="${roHeight}">
<br>
<button id="roSubmitBtn" type="submit">Submit Rough Opening</button>
<br>
<p id ="display">Based on the rough opening dimentions less 1/4" shims and caulkning 
<br> 
the outside door width is ${outsideFrameWidth}</p>
`;
document.querySelector("#roSubmitBtn").addEventListener("click", function() {
  roWidth = math.fraction(document.querySelector("#roWidth").value);
  roHeight = document.querySelector("#roHeight").value;
  calculate();

  // console.log(`The rough opening dimentions are ${roWidth}" x ${roHeight}"
  // oustside frame dimention`);
});

function calculate() {
  shimGap = math.fraction("3/8");
  outsideFrameWidth = roWidth - shimGap * 2;
  document.querySelector("#display").innerHTML = outsideFrameWidth;
  console.log(outsideFrameWidth);
}
