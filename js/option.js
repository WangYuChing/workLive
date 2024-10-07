//當選項框被點擊時，執行下列程式            event 事件對象。包含有關事件的資訊，例如觸發事件的元素、事件類型等。
optionBox.addEventListener('click',function(event){   //event.target 觸發事件的元素。
    if(event.target.classList.contains('option')){   //如果點擊的元素包含class類別.option
        const choice = event.target.getAttribute('dataChoice');//獲取屬性(Attribute)名為dataChoice的元素並賦值給變數choice
        if(choice == '1'){
            if(currentDialogue === 0) currentDialogue = 1; // 選項 1.回去
            else if(currentDialogue === 1) currentDialogue = 11; // 選項 1.激動
            else if(currentDialogue === 11) currentDialogue = 13; // 選項 1.掛斷
            else if(currentDialogue === 12) currentDialogue = 13; // 選項 1.掛斷
            else if(currentDialogue === 13) currentDialogue = 131; // 選項 1.含糊帶過
        }
        else if(choice == '3'){
            if(currentDialogue === 1) currentDialogue =12; // 選項 3.反駁
            else if(currentDialogue === 11) currentDialogue = 14; // 選項 3.接起來
            else if(currentDialogue === 12) currentDialogue = 14; // 選項 3.接起來
            else if(currentDialogue === 13) currentDialogue = 132; // 選項 3.老實交代
        }
        else if(choice == '2'){
            if(currentDialogue === 0) currentDialogue =2; // 選項 2.不回去
        }
        updateDialogue();
    }
});