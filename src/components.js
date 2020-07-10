import "./styles.css";

let lable, input, br, button, paragraph, select;

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

export function buttonMaker(idQuery, buttonLable) {
  button = `<button id="${idQuery}" type="submit">${buttonLable}</button>`;
  return button;
}

export function paragraphMaker(idQuery, classQuery) {
  paragraph = `<p id="${idQuery}" class="${classQuery}"></p>`;
  return paragraph;
}
