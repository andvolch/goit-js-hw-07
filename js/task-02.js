const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map((elem) => {
  const li = document.createElement('li');
  li.innerHTML = `<p>${elem}</p>`; 
  return li;

});

ulList.append(...ingredientsEl);

