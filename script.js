const grid = document.querySelector('#grid');
const display = grid.querySelector('#display');
const numbers = grid.querySelectorAll('.num');
const opps = grid.querySelectorAll('.opp');
const equals = grid.querySelector('#equals');
const clear = grid.querySelector('#clear');

let currentValue;
let currentOpp;
let newEntryFlag=false;

numbers.forEach((e) => {e.addEventListener('click', updateDisplay);});
opps.forEach((e) => {e.addEventListener('click', operateDisplay);});
equals.addEventListener('click',calculate);
clear.addEventListener('click',clearDisplay);

function updateDisplay (e){
    if (newEntryFlag){
        display.innerHTML=e.target.innerHTML
        newEntryFlag=false;
    }
    else{
        if(display.innerHTML==="0") display.innerHTML=e.target.innerHTML;
        else display.innerHTML+=e.target.innerHTML;
    }
}

function operateDisplay (e){
    if(currentValue) display.innerHTML = operate(currentOpp, Number(currentValue), Number(display.innerHTML));
    currentValue = display.innerHTML;
    currentOpp = e.target.innerHTML;
    newEntryFlag=true;
    console.log({currentValue})
}

function calculate (e){
    display.innerHTML = operate(currentOpp, Number(currentValue), Number(display.innerHTML))
    currentValue = undefined;
    currentOpp = undefined;
}

function clearDisplay (e){
    display.innerHTML = 0;
    currentValue = undefined;
    currentOpp = undefined;
}

const oppDict = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div
}

function operate (operator, num1, num2){
    return oppDict[operator](num1, num2)
}

function add (a,b) {
	return a+b
}

function sub (a,b) {
	return a-b
}

function mul (a,b) {
    return a*b
}

function div (a,b) {
    return a/b
}
