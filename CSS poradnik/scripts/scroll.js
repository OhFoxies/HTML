window.onscroll = function () {
    let navigation = document.getElementById('top-nav');
    let nav_main = document.getElementById('nav-main')
    let go_up = document.getElementById('go-up')
    if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 ) {
        go_up.style.display = 'block'
        navigation.style.height = '0'
        nav_main.style.position = 'fixed'
    }
    else {
        go_up.style.display = 'none'
        navigation.style.height = 'auto'
        nav_main.style.position = 'relative'
    }
};



function open_menu() {
    let search = document.getElementById("search")
    // let search_form = document.getElementById("search-form")
    let burger = document.getElementById('burger')
    const links_wrapper = document.querySelector('.nav-list-of-elements')
    const not_found = document.getElementById('not-found')
    not_found.style.display = 'none'
    const links = links_wrapper.querySelectorAll('a')
    links.forEach(element => {
        element.style.display = 'none'
    })
    search.classList.toggle('show-search-list')
    // search_form.classList.toggle('show-search-list')
    burger.classList.toggle('open')

}