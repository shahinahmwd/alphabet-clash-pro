// function play() {
//     // hide home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show playGround 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    // stop the game if pressed 'Ese'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet'); 
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point!');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore +1;
        setTextElementValueById('current-score',updatedScore);
        // -------------------------------------------------------------
        // update score:
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you try again');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }
        // ------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play (){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',6);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')
    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);
    // clear the last selected  alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}