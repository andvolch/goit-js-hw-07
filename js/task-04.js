// вариант 1

// const counterValue = document.querySelector('#value');
// const buttonIncrement = document.querySelector('[data-action="increment"]');
// const buttonDecrement = document.querySelector('[data-action="decrement"]');

// let total = 0;

// const increment = () => {
//     total +=1;
//     counterValue.textContent = total;
// };

// const decrement = () => {
//     total -=1;
//     counterValue.textContent = total;
// };

// buttonIncrement.addEventListener('click', increment);
// buttonDecrement.addEventListener('click', decrement);


// вариант 2

const [buttonDecrement, counterValue, buttonIncrement] = document.querySelector('#counter').children;

const increment = () => counterValue.textContent = + counterValue.textContent +1;


const decrement = () => counterValue.textContent = counterValue.textContent - 1;

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
