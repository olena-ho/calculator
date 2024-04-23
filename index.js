const numberBtns = document.querySelectorAll('.btn--nmb');
const screen = document.querySelector('.btn--screen');
const progressBar = document.querySelector('.btn--progress');
let progress = '';

const preventDivideByZero = () => {
  const currentProgressBarContent = progressBar.textContent;
  if (currentProgressBarContent.endsWith('/ ') && screen.textContent === '0') {
    return {
      message: "Can't divide by 0",
      delay: 1000
    };
  }
  return null;
}

const makeUpNumber = (button) => {
  let currentScreenContent = screen.textContent;
  if (currentScreenContent === '0') {
    screen.textContent = '';
  } else if (currentScreenContent[0] === '=') {
    screen.textContent = '';
    progressBar.textContent = '';
    progress = '';
  } 
  const numberValue = button.textContent;
  screen.textContent += numberValue;
}

numberBtns.forEach(button => {
  button.addEventListener('click', () => makeUpNumber(button));
});


const divideBtn = document.querySelector('.btn--divide');

divideBtn.addEventListener('click', function() {
  const error = preventDivideByZero();
  if(error) {
    screen.textContent = error.message;
    setTimeout(() => {
    screen.textContent = '';
    }, error.delay);
    return;
  }

  let currentScreenContent = screen.textContent;
  if (currentScreenContent[0] === '=') {
    progressBar.textContent = currentScreenContent.slice(2);
    progress = currentScreenContent.slice(2);
    screen.textContent = '';
  } 
  progress += screen.textContent + ' / ';
  progressBar.textContent = progress;

  screen.textContent = '';
})

const multiplyBtn = document.querySelector('.btn--multiply');
multiplyBtn.addEventListener('click', function() {
  const error = preventDivideByZero();
  if(error) {
    screen.textContent = error.message;
    setTimeout(() => {
    screen.textContent = '';
    }, error.delay);
    return;
  }

  let currentScreenContent = screen.textContent;
  if (currentScreenContent[0] === '=') {
    progressBar.textContent = currentScreenContent.slice(2);
    progress = currentScreenContent.slice(2);
    screen.textContent = '';
  } 
  progress += screen.textContent + ' * ';
  progressBar.textContent = progress;

  screen.textContent = '';
})

const minusBtn = document.querySelector('.btn--minus');
minusBtn.addEventListener('click', function() {
  const error = preventDivideByZero();
  if(error) {
    screen.textContent = error.message;
    setTimeout(() => {
    screen.textContent = '';
    }, error.delay);
    return;
  }
  let currentScreenContent = screen.textContent;
  if (currentScreenContent[0] === '=') {
    progressBar.textContent = currentScreenContent.slice(2);
    progress = currentScreenContent.slice(2);
    screen.textContent = '';
  } 
  progress += screen.textContent + ' - ';
  progressBar.textContent = progress;

  screen.textContent = '';
})

const plusBtn = document.querySelector('.btn--plus');
plusBtn.addEventListener('click', function() {
  const error = preventDivideByZero();
  if(error) {
    screen.textContent = error.message;
    setTimeout(() => {
    screen.textContent = '';
    }, error.delay);
    return;
  }
  let currentScreenContent = screen.textContent;
  if (currentScreenContent[0] === '=') {
    progressBar.textContent = currentScreenContent.slice(2);
    progress = currentScreenContent.slice(2);
    screen.textContent = '';
  } 
  progress += screen.textContent + ' + ';
  progressBar.textContent = progress;

  screen.textContent = '';
})


const equalsBtn = document.querySelector('.btn--equals');

equalsBtn.addEventListener('click', function() {
  const error = preventDivideByZero();
  if(error) {
    screen.textContent = error.message;
    setTimeout(() => {
    screen.textContent = '';
    }, error.delay);
    return;
  }
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
  if (currentScreenText.length > 1 && currentScreenText[0] !== '=') {
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
