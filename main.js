const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', tooggleDesktopMenu);

function tooggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}