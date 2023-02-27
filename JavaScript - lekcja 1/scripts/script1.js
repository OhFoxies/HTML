showed = 'nie'
function menutoggle() {
    console.log("wzium")
    navigation = document.getElementById("navbar");
    icon = document.getElementById("icon");
    if (showed == 'nie') {
        navigation.style.display = "block"
        icon.innerHTML = "Schowaj";
        showed = 'tak';
    }
    else if (showed == 'tak'){
        navigation.style.display = "none"
        icon.innerHTML = "Pokaż";
        showed = 'nie';
    }


    // if (getComputedStyle(navigation, null).display === 'none' ){
    //     navigation.style.display = "block"
    //     icon.innerHTML = "Schowaj"
    // }
    // else {
    //     navigation.style.display = "none"
    //     icon.innerHTML = "Pokaż"
    // }
}