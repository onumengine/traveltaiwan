window.onload = main;

function main() {
    var navOpenButton = document.getElementById('navButtonMenu');
    navOpenButton.addEventListener('click', openNavDrawer);

    var navCloseButton = document.querySelector('#navButtonClose');
    navCloseButton.addEventListener('click', closeNavDrawer);
}

function openNavDrawer() {
    console.log('trying to open nav drawer');
    var navDrawer = document.querySelector('.appbarActions');
    console.log(navDrawer);
    navDrawer.style.display = "block";
    navDrawer.style.width = '90%';
}

function closeNavDrawer() {
    console.log('trying to close nav');
    var navDrawer = document.querySelector('.appbarActions');
    console.log(navDrawer);
    navDrawer.style.width = '0';
    navDrawer.style.display = "none";
}