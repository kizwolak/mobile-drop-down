import './style.css';

const main = document.querySelector('.main');
const mainbutton = document.querySelector('.mainbutton');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');


mainbutton.addEventListener('click', () => {
    main.style.transition = '1s ease';
    main.style.transform = 'translateX(110%)';
    setTimeout(main.style.display = 'none', 1000);
    menu.style.visibility = 'visible';
    menu.style.height = '100%;'
    menu.style.transition = '1s ease';
    menu.style.transform = 'translateX(0%)';
});

close.addEventListener('click', () => {
    main.style.transition = '1s ease';
    main.style.transform = 'translateX(0%)';
    main.style.display = 'block';
    menu.style.visibility = 'hidden';
    menu.style.height = '100%;'
    menu.style.transition = '1s ease';
    menu.style.transform = 'translateX(-110%)';
});