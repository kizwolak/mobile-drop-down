import './style.css';

const main = document.querySelector('.main');
const mainbutton = document.querySelector('.mainbutton');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');


mainbutton.addEventListener('click', () => {
    main.style.transition = '2s ease';
    main.style.transform = 'translateX(110%)';
});