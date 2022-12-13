import './style.css';

const main = document.querySelector('.main');
const mainbutton = document.querySelector('.mainbutton');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');


mainbutton.addEventListener('click', () => {
    main.style.transition = '1s ease';
    main.style.transform = 'translateX(110%)';
    menu.style.visibility = 'visible';
    menu.style.height = '100%;'
    menu.style.transition = '1s ease';
    menu.style.transform = 'translateX(0%)';

});