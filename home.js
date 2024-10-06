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

//點擊選項
optionBox.addEventListener('click',function(event){
    if(event.target.classList.contains('option')){
        const choice = event.target.getAttribute('dataChoice');
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



const dialogues = {
    0: {
        text: "歡迎來到冒險世界！你遇到了一位神秘的老者，他看起來有些話要說說說說說說說說說。",
        options: [
            { choice: "1", text: "繼續聽他的故事" }, // 選項 1：繼續聽老者的故事
            { choice: "2", text: "謝謝你，但我必須走了" } // 選項 2：離開
        ]
    },
    1: {
        text: "老者說：「這是一個古老的世界，充滿了神秘和危險。你想知道什麼？」",
        options: [
            { choice: "1", text: "繼續聽他的故事" }, // 選項 1：繼續聽老者的故事
            { choice: "2", text: "謝謝你，但我必須走了" } // 選項 2：離開
        ]
    },
    2: {
        text: "你決定離開，老者默默地看著你遠去，似乎有些失望。",
        options: [] // 沒有選項，對話結束
    },
    3: {
        text: "老者說：「很多年前，這裡是勇士們的樂園。傳說寶藏仍然隱藏在某處...」",
        options: [
            { choice: "1", text: "繼續探索寶藏的故事" }, // 選項 1：繼續聽關於寶藏的故事
            { choice: "2", text: "謝謝你的故事，我該走了" } // 選項 2：離開
        ]
    },
    4: {
        text: "你告別了老者，踏上了自己的冒險之旅，這個世界的秘密仍待發現。",
        options: [] // 沒有選項，對話結束
    }
};