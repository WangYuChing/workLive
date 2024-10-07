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