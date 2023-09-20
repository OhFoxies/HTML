document.getElementById('confirm').addEventListener("click", function () {search()})

function search() {
    const search_box = document.getElementById('searchbox')
    const search_box_value = search_box.value.toLowerCase()
    const links_wrapper = document.querySelector('.nav-list-of-elements')
    const links = links_wrapper.querySelectorAll('a')
    const not_found = document.getElementById('not-found')
    const not_found_inner = not_found.querySelector('p')
    const show_all = document.getElementById('show-all')
    const found_posts = []
    show_all.textContent = "Pokaż wszystkie elementy"

    if (search_box_value.length >= 2) {
        if (search_box_value !== "") {
            links.forEach(element => {
                const element_text = element.textContent.toLowerCase()
                const element_desc = element.querySelector('span').textContent.toLowerCase()
                not_found.style.display = 'none'
                if (element_text.includes(search_box_value) || element_desc.includes(search_box_value)) {
                    element.style.display = 'block'
                    found_posts.push(element)
                } else {
                    element.style.display = 'none'
                }
                if (found_posts.length === 0) {
                    not_found.style.display = 'flex'
                    not_found_inner.innerHTML = 'Nie znaleziono nic powiązanego z : ' + search_box_value
                }
            });
        }
    } else {
        not_found.style.display = 'flex'
        not_found_inner.innerHTML = 'Fraza wyszukiwania musi mieć co najmniej dwie litery'
    }
    return false
}

function show_all() {
    const show_all = document.getElementById('show-all')
    const links_wrapper = document.querySelector('.nav-list-of-elements')
    const links = links_wrapper.querySelectorAll('a')
    const not_found = document.getElementById('not-found')
    not_found.style.display = 'none'
    if (show_all.textContent === 'Pokaż wszystkie elementy') {
        links.forEach(element => {
            element.style.display = 'block'
        })
        show_all.textContent = 'Ukryj wszystkie elementy'
    }
    else {
        links.forEach(element => {
            element.style.display = 'none'
        })
        show_all.textContent = "Pokaż wszystkie elementy"
    }
}