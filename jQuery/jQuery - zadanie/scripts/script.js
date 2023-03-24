
let current = 0;
let gal = 0;

function buttons_hide() {
    $('#buttonss').hide()
}

function buttons_show() {
    $('#buttonss').show()
}
function openphoto(src, index) {
    const screen = document.getElementById('bigphoto')
    if (getComputedStyle(screen).display == 'none') {
        current = index
        screen.src = src
        $('#bigphoto').slideDown(300)
        screen.style.display = 'block'
        buttons_show()
    }
    else if (getComputedStyle(screen).display == 'block' && screen.src === src ) {
        current = 0;
        $('#bigphoto').fadeOut(300)
        screen.src = ''
        screen.style.display = 'none'
        buttons_hide()
    }
    else {
        screen.style.display = 'none'
        screen.src = src
        $('#bigphoto').slideDown(300)
        screen.style.display = 'block'
        buttons_show()
    }
}


function disableall() {
    const screen = document.getElementById('bigphoto');
    screen.src = '';
    screen.style.display = 'none'
    gal = 1;
    current = 0;
    buttons_hide()
    for (i=1; i<=3; i++) {
        $('#photos'+i).hide();
    }
}


function next() {
    const screen = document.getElementById('bigphoto');
    if ((current+1) <= 4) {
        const photo = document.getElementById('gal'+gal+'_'+(current+1));
        current++
        let wzium = photo.src
        screen.src = wzium
    }
    else {
        const photo = document.getElementById('gal'+gal+'_'+1);
        current = 1
        let wzium = photo.src
        screen.src = wzium
    }
}

function prev() {
    const screen = document.getElementById('bigphoto');
    if ((current-1) > 0) {
        const photo = document.getElementById('gal'+gal+'_'+(current-1));
        current--
        let wzium = photo.src
        screen.src = wzium
    }
    else {
        const photo = document.getElementById('gal'+gal+'_'+4);
        current = 4
        let wzium = photo.src
        screen.src = wzium
    }
}

$(document).ready(
    function() {
        $('#button1').click(
            function() {
                prev()

            }
        );
        $('#button2').click(
            function() {
                next()

            }
        );


        $('#icon').click(
            function() {
                disableall();
                $('#menu').toggle(300);
            }
        );
        $('#gallery1').click(
            function() {
                disableall();
                gal = 1
                $('#photos1').toggle(300);
            }
        );
        $('#gallery2').click(
            function() {
                disableall();
                gal = 2
                $('#photos2').toggle(300);
            }
        );
        $('#gallery3').click(
            function() {
                disableall();
                gal = 3
                $('#photos3').toggle(300);
            }
        );
    }
);