/*  const startScreen 宣告一個不可變的常量變數startScreen
    = 將等號右側表達式的結果送給左邊的變數StartScreen
    document 全域物件，表示目前的HTML文件
    .getElementById() 物件提供的方法之一，從元素(Element)的id屬性來尋找HTML中的特定元素
    'strat-Screen 字串，HTML文件中某個元素的id值
透過document.getElementById()找到HTML文件中id為start-Screen的元素，
並將此元素的內容送給變數startScreen */

const startScreen = document.getElementById('start-Screen');
const startButton = document.getElementById('start-Button');
const gameBox = document.getElementById('game-Box');
const dialogueBox = document.getElementById('dialogue-Box');
const dialogueText = document.getElementById('dialogue-Text');
const optionBox = document.getElementById('option-Box');

startButton.addEventListener('click', startGame);//當按鈕被點擊，開始遊戲
function startGame(){
    startScreen.classList.add('fade-out-StartScreen');
    startButton.classList.add('fade-out-StartButton');
    setTimeout(() => {
        gameBox.style.display = 'block';
        setTimeout(() => {
            gameBox.style.opacity = 1;
        },50);
        updateDialoguea();
    },100);
}