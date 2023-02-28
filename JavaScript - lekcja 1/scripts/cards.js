function flipcard(card_number) {
    // Hidining cards
    for (i = 1; i < 4; i++) {
        console.log(i)
        current = document.getElementById('card' + i)
        current.src = "cards images/t.png"
    }
    // Showing new card
    const card = document.getElementById('card'+card_number);
    const big_card = document.getElementById('big')
    big_card.src = "cards images/p" + card_number + ".png"
    card.src = "cards images/p" + card_number + ".png"
}