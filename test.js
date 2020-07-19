const splitStr = (str) => {
  return str.split(' ').filter(el => el !== ' ');
};

let font_ar = [1,4,5,9,10,40,50,90,100];
let font_rom = ["I","IV","V","IX","X","XL","L","XC","C"];

const to_roman = (text) => {
  if (!text) return "";
  let result = "";
  let n = font_ar.length - 1;
  while (text > 0) {
    if (text >= font_ar[n]) {
      result += font_rom[n];
      text -= font_ar[n];
      }
    else n--;
    }
  return result;
};

const to_arab = (inText) => {
  let text = inText.toUpperCase();
  let result = 0;
  let posit = 0;
  let n = font_ar.length - 1;
  while (n >= 0 && posit < text.length) {
    if (text.substr(posit, font_rom[n].length) === font_rom[n]) {
      result += font_ar[n];
      posit += font_rom[n].length;
      }
    else n--;
    }
  return result;
};

function preCalc(arrayOfNum) {

}

function calculator(string) {
  
let arrayOfNum = splitStr(string);
if (arrayOfNum.length !== 3){
  throw new Error('Bad')
  }
if (arrayOfNum[1] === '%'){
  throw new Error('Bad')
  }
if (arrayOfNum[0] == 11 || arrayOfNum[2] == 11){
  throw new Error('Bad');
  }
if (arrayOfNum[0] == 0 || arrayOfNum[2] == 0){
  throw new Error('Bad');
  }
if (arrayOfNum[0] == 'XI' || arrayOfNum[2] == 'XI'){
  throw new Error('Bad');
  }

  if (arrayOfNum[0].match(/\d/g) && arrayOfNum[2].match(/\d/g)){
    switch (arrayOfNum[1]) {
      case '+':
        return (Number(arrayOfNum[0]) + Number(arrayOfNum[2])).toString();
      case '-':
        return (Number(arrayOfNum[0]) - Number(arrayOfNum[2])).toString();
      case '*':
        return (Number(arrayOfNum[0]) * Number(arrayOfNum[2])).toString();
      case '/':
        return Math.floor(Number(arrayOfNum[0]) / Number(arrayOfNum[2])).toString();
        }
    }
  else if (arrayOfNum[0].match(/[A-Z]/g) && arrayOfNum[2].match(/[A-Z]/g)){
    let a = to_arab(arrayOfNum[0]);
    let b = to_arab(arrayOfNum[2]);
    switch (arrayOfNum[1]) {
      case '+':
        return to_roman(a + b);
      case '-':
        if (a - b < 0){
          return '';
          }
        return to_roman(a - b);
      case '*':
        return to_roman(a * b);
      case '/':
        return to_roman(Math.floor(a / b));
      }
    }
}

