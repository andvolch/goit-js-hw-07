const [input, renderBtn, destroyBtn] = document.querySelector('#controls').children;

const boxContainer = document.querySelector('#boxes');

const createRandom = () => {return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0})`};

let sizeDiv = 30;

const callback = () => +input.value <= +input.getAttribute('max') && + input.value >= 1? createBoxes(+input.value) : alert ('введите число от  1 до 100');

const createBoxes = (amount) => {
    let string = '';
    for (let i = 0; i < amount; i += 1) {
        string += `<div style="background-color:${createRandom()}; width:${sizeDiv}px; height:${sizeDiv}px;"></div>`;

        sizeDiv += 10;
    
    };

    return boxContainer.insertAdjacentHTML('beforeend', string);
};

const destroyBoxes = () => {
    boxContainer.innerHTML = '';
    input.value = 0;
    sizeDiv = 30;

};

renderBtn.addEventListener('click', callback);
destroyBtn.addEventListener('click', destroyBoxes);