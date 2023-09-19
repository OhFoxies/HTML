function do_stuff() {
    number = document.getElementById("number")
    color = document.getElementById("color")
    output = document.getElementById("output")

    output.style = 'background-color: white;'
    output.innerHTML = ""
    if (number.value <= 0 || isNaN(number.value) || number.value=="") {
        output.innerHTML = "Błąd"
        window.alert("Uzupelnij wziuma dobrze")
    }
    else {
        squareroot = Number(number.value) * Number(number.value)
        output.style = "background-color: " + color.value
        output.innerHTML = squareroot
    }
    return false;
}
