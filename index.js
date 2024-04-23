const numberBtns = document.querySelectorAll('.btn--nmb');
const screen = document.querySelector('.btn--screen');
const progressBar = document.querySelector('.btn--progress');
let progress = '';

const makeUpNumber = (button) =>
{
  let currentScreenContent = screen.textContent;
  if (currentScreenContent === '0') {
    screen.textContent = '';
  } else if (currentScreenContent[0] === '=') {
    screen.textContent = '';
    progressBar.textContent = '';
    progress = '';
  }
  const numberValue = button.textContent;
  screen.textContent +=numberValue;
}

numberBtns.forEach(button => {
  button.addEventListener('click', () => makeUpNumber(button));
});

const divideBtn = document.querySelector('.btn--divide');

divideBtn.addEventListener('click', function() {
  progress += screen.textContent + ' / ';
  progressBar.textContent = progress;

  screen.textContent = '0';
})

const multiplyBtn = document.querySelector('.btn--multiply');
multiplyBtn.addEventListener('click', function() {
  progress += screen.textContent + ' * ';
  progressBar.textContent = progress;

  screen.textContent = '0';
})
const minusBtn = document.querySelector('.btn--minus');
minusBtn.addEventListener('click', function() {
  progress += screen.textContent + ' - ';
  progressBar.textContent = progress;

  screen.textContent = '0';
})
const plusBtn = document.querySelector('.btn--plus');
plusBtn.addEventListener('click', function() {
  progress += screen.textContent + ' + ';
  progressBar.textContent = progress;

  screen.textContent = '0';
})

const equalsBtn = document.querySelector('.btn--equals');

equalsBtn.addEventListener('click', function() {
  progress += screen.textContent;
  progressBar.textContent = progress;

  let result = eval(progress);
  
  screen.textContent = '= ' + result;
})

//clear
const clearBtn = document.querySelector('.btn--clear');
clearBtn.addEventListener('click', function() {
  document.location.reload();
})

//back 

const deleteOneDigit = document.querySelector('.btn--back');
deleteOneDigit.addEventListener('click', function() {
  let currentScreenText = screen.textContent;
  if (currentScreenText.length > 1) {
    screen.textContent = currentScreenText.slice(0, -1);
  } else if (currentScreenText.length === 1) {
    screen.textContent = '0';
  }
})


//old
/*
const numberBtns = document.querySelectorAll('.btn--nmb');
const screen = document.querySelector('.btn--screen');
const progressBar = document.querySelector('.btn--progress');

let storedNumbers = [];

const makeUpNumber = (button) =>
{
  if (screen.textContent === '0') {
    screen.textContent = '';
  } 
  const numberValue = button.textContent;
  screen.textContent +=numberValue;
}

numberBtns.forEach(button => {
  button.addEventListener('click', () => makeUpNumber(button));
});

const divideBtn = document.querySelector('.btn--divide');
let mathAction = '';
divideBtn.addEventListener('click', function() {
  const individualNumber = Number(screen.textContent);
  storedNumbers.push(individualNumber);
  screen.textContent = '0';
  mathAction = '/';
})
const multiplyBtn = document.querySelector('.btn--multiply');
multiplyBtn.addEventListener('click', function() {
  const individualNumber = Number(screen.textContent);
  storedNumbers.push(individualNumber);
  screen.textContent = '0';
  mathAction = '*';
})
const minusBtn = document.querySelector('.btn--minus');
minusBtn.addEventListener('click', function() {
  const individualNumber = Number(screen.textContent);
  storedNumbers.push(individualNumber);
  screen.textContent = '0';
  mathAction = '-';
})
const plusBtn = document.querySelector('.btn--plus');
plusBtn.addEventListener('click', function() {
  const individualNumber = Number(screen.textContent);
  storedNumbers.push(individualNumber);
  screen.textContent = '0';
  mathAction = '+';
})

const equalsBtn = document.querySelector('.btn--equals');

equalsBtn.addEventListener('click', function() {
  const individualNumber = Number(screen.textContent);
  storedNumbers.push(individualNumber);
  screen.textContent = '0';
  let result;
  if (mathAction === '/') {
    if (storedNumbers[1] === 0) {
      result = 'Error: division by zero';
    } else {
      result = storedNumbers[0] / storedNumbers[1]
    }
  } else if (mathAction === '*') {
    result = storedNumbers[0] * storedNumbers[1]
  } else if (mathAction === '+') {
    result = storedNumbers[0] + storedNumbers[1]
  } else if (mathAction === '-') {
    result = storedNumbers[0] - storedNumbers[1]
  }
  screen.textContent = result;
  storedNumbers =[];
})

//clear
const clearBtn = document.querySelector('.btn--clear');
clearBtn.addEventListener('click', function() {
  document.location.reload();
})
*/
