// 顯示選項的函數
function showOptions(options) {
    // 檢查 options 是否為有效的陣列
    if (!Array.isArray(options) || options.length === 0) {
        console.warn('無效的選項資料');
        return;
    }

    optionsArea.innerHTML = ''; // 清空之前的選項內容
    optionsArea.classList.remove('options-area'); // 確保無重複樣式
    optionsArea.classList.add('options-area'); // 添加樣式類別
    optionsArea.style.opacity = '1';

    // 為每個選項創建按鈕
    options.forEach(option => {
        const button = document.createElement('button'); // 創建按鈕元素
        button.className = 'option-button'; // 設置按鈕的樣式類別
        button.textContent = option.text || option; // 設定按鈕顯示的文字內容

        // 點擊按鈕時處理選擇事件
        button.addEventListener('click', () => {
            if (option.choice !== undefined) { // 檢查 option.choice 是否存在
                handleOptionSelection(option.choice);
            } else {
                console.warn('選項缺少 choice 屬性');
            }
        });

        optionsArea.appendChild(button); // 將按鈕加入選項區域
        optionsArea.classList.add('options-area');
    });
}


// 通用選項選擇處理函數
function handleOptionSelection(choice) {
    // 根據選項映射表更新 currentDialogue
    const nextDialogue = dialogueMap[choice]?.[currentDialogue]; // 查找下一個對話索引

    if (nextDialogue !== undefined) {
        currentDialogue = nextDialogue; // 更新 currentDialogue
        currentMessageIndex = 0; // 重置訊息索引
        optionsArea.style.opacity = '0'; // 設置選項區域透明以進行淡出效果
        optionsArea.style.display = 'none'; // 隱藏選項區域
    }
}