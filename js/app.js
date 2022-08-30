// SECTION - Sanity Check 
// console.log('Fear is the mind killer.');

const btn = document.querySelector('.start-btn');

// SECTION - Game Object
gameObject = {
    score: 0,
    time: 10,
    rounds: 1,
    playGame() {
        $('.start-btn').detach();
        if (gameObject.rounds > 3) {
            alert('GAME OVAH');
            gameObject.gameOver();
        } else {
            gameObject.setRound();
            gameObject.setTimer();
        }
    },
    setRound() {
        $('.squares-container').empty();
        $('.rounds-span').html(`${gameObject.rounds}`);
        if (gameObject.rounds === 1) {
            gameObject.createSquares(50);
            gameObject.time = 5;
            $('.timer-span').html(`${gameObject.time} seconds`);
        } else if (gameObject.rounds === 2) {
            gameObject.createSquares(100);
            gameObject.time = 5;
        } else {
            gameObject.createSquares(200);
            gameObject.time = 5;
        }
    },
    setTimer() {
        const timer = setInterval(() => {
            if (gameObject.time === 0 && gameObject.rounds < 3) {
                clearInterval(timer);
                gameObject.rounds++;
                alert('Next round. Ready?')
                gameObject.playGame();
            } else if (gameObject.time === 0) {
                clearInterval(timer);
                gameObject.rounds++;
                gameObject.playGame();
            }
            $('.timer-span').html(`${gameObject.time} seconds`)
            console.log(gameObject.time);
            gameObject.time--;
        }, 500)
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
    handleClick(event) {
        const colors = $(event.target).css('background-color');
        const colorNums = colors.substring(4, colors.length - 1).split(" ");
        if (colorNums[2] === '154') {
            gameObject.score++;
            $('.score-span').html(`${gameObject.score}`);
        } else {
            gameObject.score--;
            $('.score-span').html(`${gameObject.score}`);
        }
        $(event.target).remove();
    },
    gameOver() {
        gameObject.time = 0;
        gameObject.score = 0;
        gameObject.rounds = 1;
        $('.rounds-span').html('0');
        $('.score-span').html(`${gameObject.score}`);
        $('.squares-container').empty();
        $('nav').append(btn);
    },
}


// SECTION - Event Listeners
$('.start-btn').on('click', gameObject.playGame);
$(document).on('click', '.game-square', gameObject.handleClick);
