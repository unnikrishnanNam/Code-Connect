let menu = document.querySelector('#menu-list');
let navbar = document.querySelector('.nav-link-group');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}