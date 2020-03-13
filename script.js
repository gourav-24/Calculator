var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
for(var i =0;i<button.length;i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value =="back"){
            display.innerText="";

        }
        else if(value == "+"|| value == "-"||value == "/"||value == "X"){
            operator= value;
            if(display.textContent!=""){
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
           
        }else if(value == "="){
            operand2 = parseFloat(display.textContent);
            if(operand1 !="" && operand2 !=""){
            switch(operator){
                case "+" :
                     display.innerText = operand1 + operand2;
                     break;
                
                case "-":
                    display.innerText =operand1 - operand2;
                    break;
                case "/":
                    display.innerText =operand1 / operand2;
                    break;
                case "X":
                    display.innerText =operand1 * operand2;
                    break;
            }
        }

        }else{
            display.innerText += value;
        }

    });
} 