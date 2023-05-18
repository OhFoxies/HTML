window.onscroll = function () {
    let navigation = document.getElementById('top-nav');
    let nav_main = document.getElementById('nav-main')
    if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 ) {
        navigation.style.height = '0'
        nav_main.style.position = 'fixed'
    }
    else {
        navigation.style.height = 'auto'
        nav_main.style.position = 'relative'
    }
};

function open_menu() {
    let wzium = document.getElementById("search")
    let burger = document.getElementById('burger')
    wzium.classList.toggle('show-menu')
    burger.classList.toggle('open')

}