function do_stuff() {
    number = document.getElementById("input1")
    sums = document.getElementById("sum")
    number.style = 'background-color: none;'
    sums.value = ""
    if (number.value < 2 || isNaN(number.value) || number.value=="") {
        number.style = 'background-color: red;'
        window.alert("Uzupelnij wziuma dobrze")
    }
    else {
        for (i = 1; i <= number.value; i++) {
            sums.value += (i + " ")
        }
    }
    return false;
}

function do_stuff2() {
    numbera = document.getElementById('a')
    numberb = document.getElementById('b')
    output = document.getElementById('w')
    operator = document.getElementById('select_operator')

    if (isNaN(numbera.value) || isNaN(numberb.value) || numberb.value == '' || numbera.value == '') {
        window.alert("Źle")
    }
    else {
        if (operator.value=='/' && numberb.value == 0) {
            window.alert("Dzielenie przez 0")
            return;   
        }
        switch (operator.value) {
            case '-': 
                output.innerHTML = "Wynik -: " + (Number(numbera.value) - Number(numberb.value)); 
                break;
            case '+': 
                output.innerHTML = "Wynik +: " + (Number(numbera.value) + Number(numberb.value)); 
                break;
            case '/': 
                output.innerHTML = "Wynik /: " + (Number(numbera.value) / Number(numberb.value)); 
                break;
            case '*': 
                output.innerHTML = "Wynik *: " + (Number(numbera.value) * Number(numberb.value)); 
                break;
        } 
    }

}