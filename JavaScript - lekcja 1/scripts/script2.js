open = 0;
function imgshow() {
    const box = document.getElementById("box");
    const navigation = document.getElementById("navbar2");
    if (open == 0) {
        navigation.style.display = "block";
        box.src = "images/zamkniete.jpg";
        open += 1;
    }
    else if (open == 1) {
        box.src = "images/otwarte.jpg";
        
        navigation.style.display = "none";
        open -= 1;
    }


    // if (getComputedStyle(navigation, null).display === 'none' ){
    //     navigation.style.display = "block"
    //     box.src = "images/zamkniete.jpg"
    // }
    // else {
    //     navigation.style.display = "none"
    //     box.src = "images/otwarte.jpg"
    // }
}