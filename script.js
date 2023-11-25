function createLabel(tagName,content,attrName,attrValue,eventType,eventValue) {
    const label = document.createElement(tagName);
    label.innerText = content;
    label.setAttribute(attrName,attrValue);
    label.setAttribute(eventType,eventValue);
    return label;
}
const main       = createLabel("div","","id","main");
const outputDisplay = createLabel("input","0","class","grid-item-display");
const buttons     = createLabel("div","","id","buttons");

const one       = createLabel("button","1","class","grid-item","type","button","onclick", "appendToDisplay('1')");
const two       = createLabel("button","2","class","grid-item","type","button","onclick", "appendToDisplay('2')");
const three     = createLabel("button","3","class","grid-item","type","button","onclick", "appendToDisplay('3')");
const four      = createLabel("button","4","class","grid-item","type","button","onclick", "appendToDisplay('4')");
const five      = createLabel("button","5","class","grid-item","type","button","onclick", "appendToDisplay('5')");
const six       = createLabel("button","6","class","grid-item","type","button","onclick", "appendToDisplay('6')");
const seven     = createLabel("button","7","class","grid-item","type","button","onclick", "appendToDisplay('7')");
const eight     = createLabel("button","8","class","grid-item","type","button","onclick", "appendToDisplay('8')");
const nine      = createLabel("button","9","class","grid-item","type","button","onclick", "appendToDisplay('9')");
const zero      = createLabel("button","0","class","grid-item","type","button","onclick", "appendToDisplay('0')");
const zeroDbl   = createLabel("button","00","class","grid-item","type","button","onclick","appendToDisplay('00')");
const plus      = createLabel("button","+","class","grid-item-plus","type","button","onclick", "appendToDisplay('+')");
const minus     = createLabel("button","-","class","grid-item","type","button","onclick", "appendToDisplay('-')");
const multiply  = createLabel("button","*","class","grid-item","type","button","onclick", "appendToDisplay('*')");
const divide    = createLabel("button","/","class","grid-item","type","button","onclick", "appendToDisplay('/')");
const result     = createLabel("button","=","class","grid-item-equal","type","button","onclick","calculate()");
const clear     = createLabel("button","AC","class","grid-item","type","button","onclick","clearDisplay()");
const dot       = createLabel("button",".","class","grid-item","type","button","onclick", "appendToDisplay('.')");

buttons.append( one,two,three,minus,clear,
                four,five,six,multiply,plus,
                seven,eight,nine,divide,
                zeroDbl,zero,dot,result)
main.append(outputDisplay,buttons)

document.body.append(main)
main.className = "grid-container";
buttons.className = "buttonsArea";
plus.id = "plus" ;
result.id = "result" ;
clear.id = "clear";
outputDisplay.id = "outputDisplay";
outputDisplay.type = "text";
let display = document.getElementById("outputDisplay").readOnly = true;


let expression = "0";

function appendToDisplay(char) {
    expression += char;
    updateDisplay();
}
one.addEventListener("click",function appendToDisplay(char){
    expression += char;
    updateDisplay();
})

clear.addEventListener("click",function clearDisplay() {
    expression = "";
    updateDisplay();
})

result.addEventListener("click",function calculate(){
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        alert("Invalid expression");
    }
})

function updateDisplay() {
    document.getElementById("outputDisplay").value = expression;
}

// Event listener for keyboard events
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[\d+\-*/%.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else {
        alert("Only numbers and operators are allowed");
    }
});







// document.addEventListener('keydown', function (event) {
//     if (event.key.match(/[0-9]|\.|[+\-*/%]/)) {
//         appendToDisplay(event.key);
//     } else {
//         alert('Only numbers are allowed');
//     }
// });

// function appendToDisplay(value) {
//     document.getElementById('outputDisplay').value += value;
// }

// function clearDisplay() {
//     document.getElementById('outputDisplay').value = '';
// }

// function deleteLast() {
//     var currentValue = document.getElementById('display').value;
//     document.getElementById('display').value = currentValue.slice(0, -1);
// }

// function calculate() {
//     var expression = document.getElementById('outputDisplay').value;
//     try {
//         var result = eval(expression);
//         document.getElementById('outputDisplay').value = result;
//     } catch (error) {
//         alert('Invalid expression');
//     }
// }