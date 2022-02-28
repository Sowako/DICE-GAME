
let game, currentScores, scores, currentPlayer, playerNumber



document.getElementById('new-game').addEventListener('click', newGame)


document.getElementById('throw-dice').addEventListener('click', function() {
    if(game){
        diceScore = Math.trunc(Math.random() * 6 + 1)
        currentScores[currentPlayer] = parseInt(document.getElementById('dice-result-' + playerNumber[currentPlayer]).textContent, 10)
        if (diceScore != 1){
            currentScores[currentPlayer] += diceScore
            document.getElementById('dice-result-' + playerNumber[currentPlayer]).textContent = currentScores[currentPlayer]
        } else {
            document.getElementById('dice-result-' + playerNumber[currentPlayer]).textContent = currentScores[currentPlayer]
            nextPlayer()
        }
    }
})


document.getElementById('add-to-score').addEventListener('click', function(){
    if(game && currentScores[currentPlayer] != 0){
        scores[currentPlayer] += currentScores[currentPlayer]
        document.getElementById('score' + playerNumber[currentPlayer]).textContent = scores[currentPlayer]
        checkIfWin()
    }
})


function checkIfWin() {

    if (scores[currentPlayer] >= 100) {
        alert('Victoire du joueur ' + playerNumber[currentPlayer]);
        newGame();
        return true;
    } else {
        nextPlayer();
    }
}


function newGame() {
    scores = [0, 0];
    currentScores = [0, 0];
    currentPlayer = 0;
    diceScore = 0;
    game = true;
    playerNumber = [1, 2];

    document.getElementById('img-result').src = 'assets/img/1.png';
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
    document.getElementById('dice-result-1').textContent = 0;
    document.getElementById('dice-result-2').textContent = 0;
    document.getElementById('player1').style.display = 'inline-block';
    document.getElementById('player2').style.display = 'none';
}


function nextPlayer(){
    if (currentPlayer === 0){
        currentPlayer = 1
        resetScores()
        document.getElementById('player1').style.display = 'none';
        document.getElementById('player2').style.display= 'inline-block';
    } else{
        currentPlayer = 0
        resetScores()
        document.getElementById('player2').style.display = 'none';
        document.getElementById('player1').style.display= 'inline-block';
    }
    return alert('Next player !')
}


function resetScores() {
    diceScore = 0;
    currentScores = [0, 0];
    document.getElementById('dice-result-1').textContent = 0
    document.getElementById('dice-result-2').textContent = 0
    
}