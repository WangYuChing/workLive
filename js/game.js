const homeScreen = document.getElementById('home-Screen'); // 開始畫面
const startButton = document.getElementById('start-Button'); // 開始按鈕
const setButton = document.getElementById('set-Button'); // 設定按鈕
const chatContainer = document.getElementById('chat-container'); // 遊戲畫面
const breakScreen = document.getElementById('break-Screen');
const marryScreen = document.getElementById('marry-Screen');
const bgMusic = new Audio('bgMusic.mp3'); // 添加背景音樂

window.bgMusic = bgMusic; 

let isTransitionComplete = false; // 用於標記過渡是否完成
let currentDialogue = 0; // 初始化當前對話索引
let currentMessageIndex = 0; // 初始化當前訊息索引
let isDialogueShowingNow = false; // 標記對話是否正在顯示中，避免重複觸發

const dialogueArea = document.getElementById('dialogueArea'); // 對話區域
const optionsArea = document.getElementById('optionsArea'); // 選項區域

// 頁面加載後初始化
window.onload = () => {
    dialogueArea.style.display = 'none';
    optionsArea.style.display = 'none';
    bgMusic.loop = true; // 設置背景音樂循環播放
    bgMusic.play(); // 播放背景音樂
};

window.addEventListener('click', showDialogue);

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {showDialogue();}});

startButton.addEventListener('click', startGame);

function startGame(){
    homeScreen.classList.add('fade-out-HomeScreen');
    startButton.classList.add('fade-out-StartButton');
    setButton.classList.add('fade-out-SetButton');
    setTimeout(() => {
        isTransitionComplete = true;
        chatContainer.style.display = 'flex'; // 顯示遊戲畫面
        setTimeout(() => chatContainer.style.opacity = 1, 50);
        
        // 只有當過渡完成後才開始顯示對話
        if (isTransitionComplete) {
            isTransitionComplete = true;
        }
    }, 10); // 設定一個過渡時間（1000ms），與 CSS fade-out 時間一致
}

// 檢查並顯示下一條對話
async function triggerNextDialogue() {
    if (!isDialogueShowingNow && isTransitionComplete) { // 檢查對話是否正在進行，並且過渡已完成
        await showDialogue();
    }//BE
        if (currentDialogue === 131 || currentDialogue === 151 || currentDialogue === 211) {
            // 先設置 display 屬性
            breakScreen.style.opacity = 0;
            breakScreen.style.display = 'block';
            homeScreen.style.display = 'block'; // 確保 homeScreen 仍然存在於 DOM 中以進行過渡
        
            // 設置過渡效果
            breakScreen.style.transition = 'opacity 3s ease';
            homeScreen.style.transition = 'opacity 2.5s ease';
        
            // 強制重繪以確保 display 屬性生效
            breakScreen.offsetHeight;
            homeScreen.offsetHeight;
        
            // 設置 opacity 屬性以觸發過渡效果
            breakScreen.style.opacity = 1;
            homeScreen.style.opacity = 0;
        }//HE
        else if( currentDialogue === 132 || currentDialogue === 222 || currentDialogue === 1521 ||currentDialogue === 1522){
            // 先設置 display 屬性
            marryScreen.style.opacity = 0;
            marryScreen.style.display = 'block';
            homeScreen.style.display = 'block'; // 確保 homeScreen 仍然存在於 DOM 中以進行過渡
        
            // 設置過渡效果
            marryScreen.style.transition = 'opacity 3s ease';
            homeScreen.style.transition = 'opacity 2.5s ease';
        
            // 強制重繪以確保 display 屬性生效
            marryScreen.offsetHeight;
            homeScreen.offsetHeight;
        
            // 設置 opacity 屬性以觸發過渡效果
            marryScreen.style.opacity = 1;
            homeScreen.style.opacity = 0;
        }
}

// 顯示對話的主函數
function showDialogue() {
    const message = dialogues[currentDialogue]; // 獲取當前對話

    // 若當前對話內容無效，停止執行
    if (!message || !message.dialogue) return;

    // 檢查是否已顯示完所有訊息
    if (currentMessageIndex >= message.dialogue.length) {
        if (message.options && message.options.length > 0) {
            showOptions(message.options);
            optionsArea.style.display = 'flex';
        }
        return;
    }

    const dialog = message.dialogue[currentMessageIndex]; // 當前訊息
    const avatarHTML = dialog.avatar ? `<img src="${dialog.avatar}" class="avatar">` : '';
    const dialogueText = document.createElement('div');
    dialogueText.className = `chat-message ${dialog.position}`;
    dialogueText.innerHTML = `
        <div class="avatar-container">
            ${avatarHTML}
        </div>
        <div class="text-container">
            <div class="speaker">${dialog.speaker}</div>
            <div class="message">${dialog.text}</div>
        </div>
    `;

    // 顯示對話訊息，並滾動到該訊息
    dialogueArea.appendChild(dialogueText);
    dialogueArea.style.display = 'none';
    dialogueArea.offsetHeight; // 強制重新渲染
    dialogueArea.style.display = 'flex';

    currentMessageIndex++; // 更新訊息索引
    isDialogueShowingNow = true; // 標記為顯示中

    setTimeout(() => {
        isDialogueShowingNow = false; // 重置顯示狀態
        triggerNextDialogue();
        dialogueText.scrollIntoView({ behavior: 'smooth' });
    }, 2000); // 設定一個過渡時間（100ms）
}