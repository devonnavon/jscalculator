const grid = document.querySelector('#grid');
const display = grid.querySelector('#display');
const numbers = grid.querySelectorAll('.num')

numbers.forEach((element) => {
    element.addEventListener('click', updateDisplay);
});

function updateDisplay (e){
    if(display.innerHTML==="0") display.innerHTML=e.target.innerHTML;
    else display.innerHTML+=e.target.innerHTML;
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
