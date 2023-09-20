
let game_started = false
let round = 1
function clear_x_o() {
    game_started = false
    let poles = document.querySelectorAll(".pole")
    let title = document.getElementById("round-display")
    title.innerHTML = "Runda: rozpocznij gre"
    poles.forEach(element => {
        element.innerHTML = ""
    });
}

function game() {
    // 1 KOŁKA 2 KRZYŻYKI

    if (game_started) {
        console.log("gra już się zaczęła")
    }
    else {
        clear_x_o()
        game_started = true
        let title = document.getElementById("round-display")
        round = 1
        title.innerHTML = "Runda: kółka"
        let poles = document.querySelectorAll(".pole")
        poles.forEach(element => {
            element.addEventListener("click", function () {clicked(this)})
        });
    }
}

function clicked(element) {
    let title = document.getElementById("round-display")
    if (element.innerHTML === "" && game_started) {
        if (round === 1) {
            element.innerHTML = "O"
            round = 2
            title.innerHTML = "Runda: krzyżyka"
            check_winner()
        }
        else {
            console.log("WZIUM 2")
            element.innerHTML = "X"
            round = 1
            title.innerHTML = "Runda: kółka"
            check_winner()
        }
    }
}

function winner(winner) {
    let title = document.getElementById("round-display")
    if (winner === "x") {
        title.innerHTML = "Runda: koniec gry, wygrał X"
    }
    if (winner === "o") {
        title.innerHTML = "Runda: koniec gry, wygrał O"
    }
    else {
        title.innerHTML = "Runda: koniec gry, REMIS!"
    }
    game_started = false
}

function check_winner() {
    let poles = document.querySelectorAll(".pole")

    if (poles[0].innerHTML==="X" && poles[1].innerHTML==="X" && poles[2].innerHTML==="X") {
        winner("x")
    }
    else if (poles[3].innerHTML==="X" && poles[4].innerHTML==="X" && poles[5].innerHTML==="X") {
        winner("x")
    }
    else if (poles[6].innerHTML==="X" && poles[7].innerHTML==="X" && poles[8].innerHTML==="X") {
        winner("x")
    }

    else if (poles[0].innerHTML==="X" && poles[3].innerHTML==="X" && poles[6].innerHTML==="X") {
        winner("x")
    }
    else if (poles[1].innerHTML==="X" && poles[4].innerHTML==="X" && poles[7].innerHTML==="X") {
        winner("x")
    }
    else if (poles[2].innerHTML==="X" && poles[5].innerHTML==="X" && poles[8].innerHTML==="X") {
        winner("x")
    }

    else if (poles[0].innerHTML==="X" && poles[4].innerHTML==="X" && poles[8].innerHTML==="X") {
        winner("x")
    }

    else if (poles[2].innerHTML==="X" && poles[4].innerHTML==="X" && poles[6].innerHTML==="X") {
        winner("x")
    }


    else if (poles[0].innerHTML==="O" && poles[1].innerHTML==="O" && poles[2].innerHTML==="O") {
        winner("o")
    }
    else if (poles[3].innerHTML==="O" && poles[4].innerHTML==="O" && poles[5].innerHTML==="O") {
        winner("o")
    }
    else if (poles[6].innerHTML==="O" && poles[7].innerHTML==="O" && poles[8].innerHTML==="O") {
        winner("o")
    }
    else if (poles[0].innerHTML==="O" && poles[3].innerHTML==="O" && poles[6].innerHTML==="O") {
        winner("o")
    }
    else if (poles[1].innerHTML==="O" && poles[4].innerHTML==="O" && poles[7].innerHTML==="O") {
        winner("o")
    }
    else if (poles[2].innerHTML==="O" && poles[5].innerHTML==="O" && poles[8].innerHTML==="O") {
        winner("o")
    }
    else if (poles[0].innerHTML==="O" && poles[4].innerHTML==="O" && poles[8].innerHTML==="O") {
        winner("o")
    }
    else if (poles[2].innerHTML==="O" && poles[4].innerHTML==="O" && poles[6].innerHTML==="O") {
        winner("o")
    }

    else if (poles[0].innerHTML !== "" && poles[1].innerHTML !== "" && poles[2].innerHTML !== "" &&
        poles[3].innerHTML !== "" && poles[4].innerHTML !== "" && poles[5].innerHTML !== "" &&
        poles[6].innerHTML !== "" && poles[7].innerHTML !== "" && poles[8].innerHTML !== "") {
        winner("remis")
    }
}