const btnOpenMenu = document.querySelector('.btn__openMenu');
const btnCloseMenu = document.querySelector('.btn__closeMenu');
const navContainer = document.querySelector('.nav__container');

btnOpenMenu.addEventListener('click', () => {
    toggleMenu();
});

btnCloseMenu.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    navContainer.classList.toggle('hidden');
};