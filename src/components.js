import "./styles.css";

import { create, all } from "mathjs";

const config = {
  number: "Fraction"
};
const math = create(all, config);

let lable, input, br;

export function lableMaker(lableContents, idQuery, classQuery) {
  lable = `<label class="${classQuery}" id="${idQuery}" for="">${lableContents}</label>`;
  return lable;
}

export function inputMaker(idQuery, classQuery, valueQuery) {
  input = `<input id="${idQuery}" class="${classQuery}" type="text" name="" value="${valueQuery}">`;
  return input;
}

export function brMaker() {
  br = `<br>`;
  return br;
}
