// SECTION - Sanity Check 
// console.log('Fear is the mind killer.');


// SECTION - Game Object
gameObject = {
    score: 0,
    time: 10,
    rounds: 1,
    playGame() {
        if (gameObject.rounds > 3) {
            return alert('Game over')
        } else {
            gameObject.setRound();
        }
    },
    setRound() {
        if (gameObject.rounds === 1) {
            gameObject.createSquares(50);
        } else if (gameObject.rounds === 2) {
            gameObject.createSquares(100);
        } else {
            gameObject.createSquares(200);
        }
    },
    createSquares(numOfSquares) {
        for (let i = 0; i < numOfSquares; i++) {
            const newSquare = $('<div class="game-square"></div>');
            gameObject.assignColor(newSquare);
            $('.squares-container').append(newSquare);
        }
    },
    assignColor(square) {
        const num = Math.floor(Math.random() * (3 - 1 + 1)+ 1);
        if (num === 1) {
            $(square).css('background-color', '#D3AEB5');
        } else if (num === 2) {
            $(square).css('background-color', '#86679A');
        } else {
            $(square).css('background-color', '#184A6E');
        }
    },
}


// SECTION - Event Listeners
$('.start-btn').on('click', gameObject.playGame);
