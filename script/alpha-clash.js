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

    //key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet'); 
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you try again');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}