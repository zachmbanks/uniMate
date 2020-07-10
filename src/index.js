import "./styles.css";

import Fraction from "fraction.js";

let [roWidth, roHeight, outsideFrameWidth, outsideFrameHeight, shimGap] = Array(
  5
).fill(0);

document.querySelector("#roSubmitBtn").addEventListener("click", function() {
  roWidth = Fraction(document.querySelector("#roWidth").value);
  roHeight = Fraction(document.querySelector("#roHeight").value);
  calculateFrameWidth();
});

function calculateFrameWidth() {
  let shimGapSelct = document.querySelector("#shim-gap");
  shimGap = shimGapSelct.options[shimGapSelct.selectedIndex].value;
  let oFrameWidthFraction = Fraction(
    (outsideFrameWidth = roWidth - shimGap * 2)
  ).toFraction(true);
  let oFrameHeightFraction = Fraction(
    (outsideFrameHeight = roHeight - shimGap)
  ).toFraction(true);
  // let oFrameWidthFraction = new Fraction(outsideFrameWidth)
  document.querySelector(
    "#display"
  ).innerHTML = `The oustside Frame dimentions are ${oFrameWidthFraction} x ${oFrameHeightFraction}`;
}

function nerestUsableFraction(decimalNumber, denominator) {
  let sixteenth = new Fraction(1 / denominator);
  let x = Math.round(decimalNumber * sixteenth.d);
  let newFrac = new Fraction(x / sixteenth);
  let numeratorNotReduced = newFrac.n / newFrac.d;
  let numeratorReduced = numeratorNotReduced / denominator;
  let final = new Fraction(numeratorReduced / denominator);
  console.log(final.toFraction());
  let wholeNumberReduce = final.n / final.d;
  console.log(wholeNumberReduce);
  let dec = wholeNumberReduce % 1;
  let int = Math.floor(wholeNumberReduce);
  let lastFrac = new Fraction(dec).toFraction();
  console.log(lastFrac);
  let lastNumber = int + " " + lastFrac;
  console.log(lastNumber);
  //
}

nerestUsableFraction(52, 16);
