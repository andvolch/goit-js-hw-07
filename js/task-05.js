// вариант 1
// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// const getInput = (name) => nameInput.value.trim() === ''? nameOutput.textContent = 'незнакомец' : nameOutput.textContent = name.target.value;

// nameInput.addEventListener('input', getInput);

// вариант 2

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const getInput = ({target: {value}}) => nameOutput.textContent = value.trim() === ''?  'незнакомец' : value;

nameInput.addEventListener('input', getInput);