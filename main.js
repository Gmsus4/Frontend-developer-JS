//Click
const menuEmail = document.querySelector('.navbar-email');
const hamburguesa = document.querySelector('.menu');

//Display
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', tooggleDesktopMenu);
hamburguesa.addEventListener('click', tooggleMobileMenu);

function tooggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function tooggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}