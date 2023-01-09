const btnMobile = document.getElementById("btn-mobile");

function openMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', openMenu);