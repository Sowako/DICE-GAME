
let scores, activePlayer, diceScore, inGame, currentScores, playerNumber


document.getElementById('new-game').addEventListener('click', newGame)


document.getElementById('throw-dice').addEventListener('click', function() {
    if(inGame){
        diceScore = Math.trunc(Math.random() * 6 + 1)
        currentScores[activePlayer] = parseInt(document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent, 10)
        if (diceScore != 1){
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.png'
            currentScores[activePlayer] += diceScore
            document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent = currentScores[activePlayer]
        } else {
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.png'
            document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent = currentScores[activePlayer]
            nextPlayer()
        }
    }
})


document.getElementById('add-to-score').addEventListener('click', function(){
    if(inGame && currentScores[activePlayer] != 0){
        scores[activePlayer] += currentScores[activePlayer]
        document.getElementById('score' + playerNumber[activePlayer]).textContent = scores[activePlayer]
        checkIfWin()
    }
})


function checkIfWin() {

    if (scores[activePlayer] >= 100) {
        alert('Victoire du joueur ' + playerNumber[activePlayer]);
        newGame();
        return true;
    } else {
        nextPlayer();
    }
}


function newGame() {
    scores = [0, 0];
    currentScores = [0, 0];
    activePlayer = 0;
    diceScore = 0;
    inGame = true;
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
    if (activePlayer === 0){
        activePlayer = 1
        resetScores()
        document.getElementById('player1').style.display = 'none';
        document.getElementById('player2').style.display= 'inline-block';
    } else{
        activePlayer = 0
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