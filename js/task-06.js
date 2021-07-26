// вариант 1

// const inputEl = document.querySelector('#validation-input');

// const onInput = () => {
//     if(inputEl.value.length === +inputEl.dataset.length) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');
//     } else {
//         inputEl.classList.remove('valid'); 
//         inputEl.classList.add('invalid');
        
//     }
// };

// inputEl.addEventListener('blur', onInput);

// вариант 2
const inputEl = document.querySelector('#validation-input');

const togleClass = (add, remove) => {
    inputEl.classList.add(add);
    inputEl.classList.remove(remove);
};

const onInput = () => inputEl.value.length === +inputEl.dataset.length? togleClass('valid', 'invalid') : togleClass('invalid', 'valid');

inputEl.addEventListener('blur', onInput);