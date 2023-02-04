const titleHeader = document.querySelector('.title');
titleHeader.style.color = 'blue';

const input = document.getElementsByTagName('input')[0];
const button = document.querySelector('.send');
const buttonClick = (evento) => {
    const inputValue = input.value;
    console.log(inputValue);
    const listElement = document.getElementById('task');
    const list = document.createElement('li');
    list.innerHTML = inputValue;
    listElement.appendChild(list);
};
button.addEventListener('click', buttonClick);


