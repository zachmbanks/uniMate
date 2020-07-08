import "./styles.css";

// This creates an array of variables using the Array() constructor and the fill()
let [roWidth, roHeight, outsideFrameWidth, outsideFrameHeight, shimGap] = Array(
  5
).fill(0);

document.querySelector("body").innerHTML = `
<label for="">Rough Opening Width</label>
<br>
<input id="roWidth" type="number" name="" value="${roWidth}">
<br>
<label for="">Rough Opening Width</label>
<br>
<input id="roHeight" type="number" name="" value="${roHeight}">
<br>
<button id="roSubmitBtn" type="submit">Submit Rough Opening</button>
<br>
<p>Based on the rough opening dimentions less 1/4" shims and caulkning 
<br> 
the outside door width is ${outsideFrameWidth}</p>
`;
document.querySelector("#roSubmitBtn").addEventListener("click", function() {
  roWidth = document.querySelector("#roWidth").value;
  roHeight = document.querySelector("#roHeight").value;
  calculate();

  // console.log(`The rough opening dimentions are ${roWidth}" x ${roHeight}"
  // oustside frame dimention`);
});

function calculate() {
  shimGap = 0.25;
  outsideFrameWidth = roWidth - shimGap * 2;
}
