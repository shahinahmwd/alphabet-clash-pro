// function play() {
//     // hide home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show playGround 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

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