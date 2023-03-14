function openphoto(image) {
    const bigphoto = document.getElementById("bigphoto");
    bigphoto.src = image;
}

function openmenu() {
    const gallery1 = document.getElementById('photos1');
    const gallery2 = document.getElementById('photos2');
    const bigphoto = document.getElementById("bigphoto");
    gallery1.style.display = 'none'
    gallery2.style.display = 'none'    
    bigphoto.src = ''
    const przycisk = document.getElementById('desktoptekst')
    const menu = document.getElementById('menu')
    if (getComputedStyle(menu, null).display == 'none') {
        menu.style.display = 'flex'
        if (getComputedStyle(przycisk, null).display != 'none') {
            przycisk.innerHTML = "bezburger"
        }


    }
    else {
        if (getComputedStyle(przycisk, null).display != 'none') {
            przycisk.innerHTML = "hamburger"
        }
        menu.style.display = 'none'
    }
}

function opengal(number) {
    const gallery_to_open = document.getElementById('photos'+number);
    const gallery1 = document.getElementById('photos1');
    const gallery2 = document.getElementById('photos2');
    const bigphoto = document.getElementById("bigphoto");
    bigphoto.src = ''
    gallery1.style.display = 'none'
    gallery2.style.display = 'none'
    gallery_to_open.style.display = 'flex'
}