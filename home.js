const startScreen = document.getElementById('start-Screen');
const startButton = document.getElementById('start-Button');
const gameBox = document.getElementById('game-Box');
const dialogueBox = document.getElementById('dialogue-Box');
const dialogueText = document.getElementById('dialogue-Text');
const optionBox = document.getElementById('option-Box');

startButton.addEventListener('click', startGame);
function startGame(){
    startScreen.classList.add('fade-out-StartScreen');
    startButton.classList.add('fade-out-StartButton');
    setTimeout(() => {
        gameBox.style.display = 'block';
        setTimeout(() => {
            gameBox.style.opacity = 1;
        },50);
        updateDialoguea();
    },1000);
}