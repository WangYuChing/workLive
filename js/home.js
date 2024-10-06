/*  const startScreen 宣告一個不可變的常量變數startScreen
    = 將等號右側表達式的結果送給左邊的變數StartScreen
    document 全域物件，表示目前的HTML文件
    .getElementById() 物件提供的方法之一，從元素(Element)的id屬性來尋找HTML中的特定元素
    'strat-Screen 字串，HTML文件中某個元素的id值
透過document.getElementById()找到HTML文件中id為start-Screen的元素，
並將此元素的內容送給變數startScreen */

const startScreen = document.getElementById('start-Screen');//開始畫面
const startButton = document.getElementById('start-Button');//開始按鈕
const gameBox = document.getElementById('game-Box');//遊戲畫面
const dialogueBox = document.getElementById('dialogue-Box');//劇情框
const dialogueText = document.getElementById('dialogue-Text');//劇情文字
const optionBox = document.getElementById('option-Box');//選項容器

//當按鈕被點擊，呼叫名為startGame的function
startButton.addEventListener('click', startGame);
//定義一個名為startGame的function
function startGame(){
    startScreen.classList.add('fade-out-StartScreen');//classList DOM元素的屬性，表示該元素擁有的所有CSS類別（class）。一個包含這些類別名稱的物件，提供了許多可以操作類別的方法
    startButton.classList.add('fade-out-StartButton');//add() classList物件上的方法，向DOM元素添加()中類別的樣式。class 或 id。
    setTimeout(() => { // js的內建函式，作用:延遲執行。在指定的延遲時間（以毫秒計）後執行一段程式碼或函數。
        gameBox.style.display = 'block';
        setTimeout(() => {gameBox.style.opacity = 1;},50);
        updateDialogue();
    },100);
}


// 當前的對話階段。初始值為 0
let currentDialogue = 0;

//定義一個名為updateDialogue的function:更新當前對話內容
function updateDialogue(){
    const dialogue = dialogues[currentDialogue];//取得當前對話
    dialogueText.textContent = dialogue.text;//更新劇情文字
    optionBox.innerHTML = "";//清空選項容器

    //將選項逐一加進選項容器optionBox
    dialogue.options.forEach(option => {
        const optionElement = document.createElement('div');// 建立選項元素
        optionElement.classList.add('option');//新增class類別樣式.option
        optionElement.textContent = option.text;//設定選項文字
        optionElement.setAttribute('dataChoice',option.choice);// 為變數optionElement設置一個自定義屬性dataChoice，值來自option.choice
        optionBox.appendChild(optionElement);//appendChild 將新的子元素(optionElement)加入指定父元素(optionBox)
    });}

//當選項框被點擊時，執行下列程式            event 事件對象。包含有關事件的資訊，例如觸發事件的元素、事件類型等。
optionBox.addEventListener('click',function(event){   //event.target 觸發事件的元素。
    if(event.target.classList.contains('option')){   //如果點擊的元素包含class類別.option
        const choice = event.target.getAttribute('dataChoice');//獲取屬性(Attribute)名為dataChoice的元素並賦值給變數choice
        if(choice == '1'){
            if(currentDialogue === 0) currentDialogue = 1;
            else if(currentDialogue === 1) currentDialogue = 3;
            else if(currentDialogue === 3) currentDialogue = 4;
        }else if(choice == '2'){
            currentDialogue = 2;
        }
        updateDialogue();
    }
});
