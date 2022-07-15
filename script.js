const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const numbersEl = document.querySelectorAll('.number');
const resultEl = document.querySelector('.temp-result');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');

let dis1Num = '';
let dis2Num = '';
let lastOperation = '';
let result = null;
let numDot = false;

numbersEl.forEach(number => {
  number.addEventListener('click', e => {
    if (e.target.innerText === '.' && !numDot) {
      numDot = true;
    } else if (e.target.innerText === '.' && numDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationEl.forEach(operation => {
  operation.addEventListener('click', e => {
    if (!dis2Num) result;
    numDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = '') {
  dis1Num += dis2Num + '' + name + '';
  display1El.innerText = dis1Num;
  display2El.innerText = '';
  dis2Num = '';
  resultEl.innerText = result;
}
function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
}

equalEl.addEventListener('click', e => {
  if (!dis1Num || !dis2Num) return;
  numDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  resultEl.innerText = ' ';
  dis2Num = result;
  dis1Num = '';
});

window.addEventListener('keydown', e => {
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
  ) {
    clickButtonEl(e.key);
  } else if (e.key === 'x' || e.key === '+' || e.key === '-' || e.key === '/') {
    clickOperation(e.key);
  } else if (e.key == 'Enter' || e.key === '=') {
    clickEqual();
  }
});

function clickButtonEl(key) {
  numbersEl.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operationEl.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickEqual() {
  equalEl.click();
}
