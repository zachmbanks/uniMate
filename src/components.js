import "./styles.css";

import { create, all } from "mathjs";

const config = {
  number: "Fraction"
};
const math = create(all, config);

let lable;

export function lableMaker(lableContents) {
  lable = `<label for="">${lableContents}</label>`;
  return lable;
}
