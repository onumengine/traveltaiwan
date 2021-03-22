window.onload = main;

function main() {
    var navOpenButton = document.getElementById('navButtonMenu');
    navOpenButton.addEventListener('click', openNavDrawer);

    var navCloseButton = document.querySelector('#navButtonClose');
    navCloseButton.addEventListener('click', closeNavDrawer);
}

function openNavDrawer() {
    var navDrawer = document.querySelector('.appbarActions');
    navDrawer.style.display = "block";
    navDrawer.style.width = '90%';
}

function closeNavDrawer() {
    var navDrawer = document.querySelector('.appbarActions');
    navDrawer.style.width = '0';
    navDrawer.style.display = "none";
}