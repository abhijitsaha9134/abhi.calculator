let screen= document.getElementById('screen');
let buttons = document.querySelectorAll("button");
let screenvalue = ' ';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonsText = e.target.innerText;
        console.log('Button text is ', buttonsText);
        if(buttonsText=='X'){
            buttonsText = '*';
            screenvalue += buttonsText;
            screen.value = screenvalue;
        }
        else if (buttonsText =='C'){
            screenvalue = "";
            screen.value = screenvalue;

        }
        else if (buttonsText =='='){
            screen.value = eval(screenvalue);

        }
        else{
            screenvalue += buttonsText;
            screen.value = screenvalue;
        }
    
        
    })
}
