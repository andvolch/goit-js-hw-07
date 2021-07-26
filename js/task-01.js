const elementsListRef = document.querySelector('#categories');

console.log(`В списке ${elementsListRef.children.length} категории`);

const elList = [...elementsListRef.children].forEach(el => 
    console.log(`
    Категори: ${el.children[0].textContent}
    Количество элементов: ${el.children[1].children.length}
    `));
    




