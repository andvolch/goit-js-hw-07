const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeSize = ({target: {value}}) => spanRef.style.fontSize = value + 'px';
inputRef.addEventListener('input', changeSize); 