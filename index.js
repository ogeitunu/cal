let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case  '9':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                 } catch{
                    display.innerText= " Error";
        }
        break;
        default:
            display.innerText += e.target.innerText;
        }

    });
});
    
        








