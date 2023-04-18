// Handling entering numbers event
window.onload = function() {
    const screen = document.getElementById('screen')
    document.querySelectorAll('.button-number').forEach(button => {
        button.addEventListener('click', event => {
            if (button.value == 0) {
                if (screen.value == 0) {
                    screen.value = 0;
                    return;
                }
            }
            
            if (screen.value==0) {
                screen.value = button.value;
                return;
            }
            screen.value += button.value

        })
      })
};

function clearall() {
    const screen = document.getElementById('screen');
    screen.value = ''
}

function clearlast() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1)
    
}

function comma() {
    const screen = document.getElementById('screen');
    if (screen.value == '') {
        screen.value = '0.';
    }
    if (screen.value.includes('.')) {
        return;
    }
    screen.value += '.';
}

function plus() {
    const screen 
}