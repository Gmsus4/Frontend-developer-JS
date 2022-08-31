//Click
const btnMenuEmail = document.querySelector('.navbar-email');
const btnHamburguesa = document.querySelector('.menu');
const btnShopping = document.querySelector('.navbar-shopping-cart');

//Display
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

//Event-Click
btnMenuEmail.addEventListener('click', tooggleDesktopMenu);
btnHamburguesa.addEventListener('click', tooggleMobileMenu);
btnShopping.addEventListener('click', tooggleCarritoBtn);

//Functions
function tooggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function tooggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function tooggleCarritoBtn(){
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}