//creating elements
function createLabel(tagName,content,attrName,attrValue,id,idValue) {
    const label = document.createElement(tagName);
    label.innerText = content;
    label.setAttribute(attrName,attrValue);
    label.setAttribute(id,idValue);
    return label;
}

const division        = createLabel("div","","class","grid-container","id","calculator");
const outputDisplay   = createLabel("div","","class","displayDiv","id","outputDisplay");
const buttonsDiv         = createLabel("div","","class","buttonsDiv","id","buttons");
const displayInput    = createLabel("input","","id","result")

const result          = createLabel("button","=","id","equal");
const buttonAC        = createLabel("button","AC","id","clear");
const buttonDel       = createLabel("button","Del","id","del");
const buttonDot       = createLabel("button",".","id",".");
const buttonDivide    = createLabel("button","/","id","/");
const buttonPlus      = createLabel("button","+","id","add");
const buttonSubtract  = createLabel("button","-","id","subtract");
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

result.classList.add("grid-item","grid-item-equal","operator");
buttonAC.classList.add("grid-item","operator");
buttonDel.classList.add("grid-item","operator");
buttonDot.classList.add("grid-item","operator");
buttonDivide.classList.add("grid-item","operator");
buttonPlus.classList.add("grid-item","operator");
buttonSubtract.classList.add("grid-item","operator");
buttonMultiply.classList.add("grid-item","operator");
buttonPlus.setAttribute("value","+");
buttonSubtract.setAttribute("value","-");

//append to document
buttonsDiv.append(buttonAC,buttonDel,buttonDot,buttonDivide,
                buttonSeven,buttonEight,buttonNine,buttonMultiply,
                buttonFour,buttonFive,buttonSix,buttonSubtract,
                buttonOne,buttonTwo,buttonThree,buttonPlus,
                buttonZeroDbl,buttonZero,result);

outputDisplay.appendChild(displayInput);
division.append(outputDisplay,buttonsDiv);

document.body.append(division);


//execution code
const display = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(btn.id === "equal"){
            display.value = eval(display.value);
        } else if(btn.id === "clear"){
            display.value = "";
        } else if(btn.id === "del"){
            display.value = display.value.slice(0,-1);
        } else if(btn.id === "add"){
            display.value += btn.value;
        } else if(btn.id === "subtract"){
            display.value += btn.value;
        } else{
            display.value += btn.id;
        }
    });
});