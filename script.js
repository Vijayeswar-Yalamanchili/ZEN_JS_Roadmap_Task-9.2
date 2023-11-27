function createLabel(tagName,content,attrName,attrValue,id,idValue) {
    const label = document.createElement(tagName);
    label.innerText = content;
    label.setAttribute(attrName,attrValue);
    label.setAttribute(id,idValue);
    return label;
}
// function createLabel(tagName,content,attrName,attrValue) {
//     const label = document.createElement(tagName);
//     label.innerText = content;
//     label.setAttribute(attrName,attrValue);
//     return label;
// }

const division        = createLabel("div","","class","grid-container","id","calculator");
const outputDisplay   = createLabel("div","","class","displayDiv","id","outputDisplay");
const buttonsDiv         = createLabel("div","","class","buttonsDiv","id","buttons");
const displayInput    = createLabel("input","","id","display")

const result          = createLabel("button","=","id","=");
const buttonAC        = createLabel("button","AC","id","ac");
const buttonDel       = createLabel("button","Del","id","del");
const buttonDot       = createLabel("button",".","id",".");
const buttonDivide    = createLabel("button","/","id","/");
const buttonPlus      = createLabel("button","+","id","+");
const buttonSubtract  = createLabel("button","-","id","-");
const buttonMultiply  = createLabel("button","*","id","*");

const buttonOne       = createLabel("button","1","id","1","class","grid-item");
const buttonTwo       = createLabel("button","2","id","2","class","grid-item");
const buttonThree     = createLabel("button","3","id","3","class","grid-item");
const buttonFour      = createLabel("button","4","id","4","class","grid-item");
const buttonFive      = createLabel("button","5","id","5","class","grid-item");
const buttonSix       = createLabel("button","6","id","6","class","grid-item");
const buttonSeven     = createLabel("button","7","id","7","class","grid-item");
const buttonEight     = createLabel("button","8","id","8","class","grid-item");
const buttonNine      = createLabel("button","9","id","9","class","grid-item");
const buttonZero      = createLabel("button","0","id","0","class","grid-item");
const buttonZeroDbl   = createLabel("button","00","id","00","class","grid-item");

result.classList.add("grid-item","equal","operator");
buttonAC.classList.add("grid-item","operator");
buttonDel.classList.add("grid-item","operator");
buttonDot.classList.add("grid-item","operator");
buttonDivide.classList.add("grid-item","operator");
buttonPlus.classList.add("grid-item","operator");
buttonSubtract.classList.add("grid-item","operator");
buttonMultiply.classList.add("grid-item","operator");

buttonsDiv.append(buttonAC,buttonDel,buttonDot,buttonDivide,
                buttonSeven,buttonEight,buttonNine,buttonMultiply,
                buttonFour,buttonFive,buttonSix,buttonSubtract,
                buttonOne,buttonTwo,buttonThree,buttonPlus,
                buttonZeroDbl,buttonZero,result);

outputDisplay.appendChild(displayInput);
division.append(outputDisplay,buttonsDiv);

document.body.append(division);

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if(btn.id === "ac"){
            display.value = "";
        } else if(btn.id === "del"){
            display.value = display.value.slice(0,-1);
        } else{
            display.value += btn.id
        }
    });
});