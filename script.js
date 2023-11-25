function createLabel(tagName,content,attrName,attrValue,type,value) {
    const label = document.createElement(tagName);
    label.innerText = content;
    label.setAttribute(attrName,attrValue);
    label.setAttribute(type,value);
    return label;
}
const main       = createLabel("div","","id","main");
const outputDisplay = createLabel("div","outputDisplay","class","grid-item-display");
const buttons     = createLabel("div","","id","buttons");

const one       = createLabel("button","1","class","grid-item","type","button");
const two       = createLabel("button","2","class","grid-item","type","button");
const three     = createLabel("button","3","class","grid-item","type","button");
const four      = createLabel("button","4","class","grid-item","type","button");
const five      = createLabel("button","5","class","grid-item","type","button");
const six       = createLabel("button","6","class","grid-item","type","button");
const seven     = createLabel("button","7","class","grid-item","type","button");
const eight     = createLabel("button","8","class","grid-item","type","button");
const nine      = createLabel("button","9","class","grid-item","type","button");
const zero      = createLabel("button","0","class","grid-item","type","button");
const zeroDbl   = createLabel("button","00","class","grid-item","type","button");
const plus      = createLabel("button","+","class","grid-item","type","button");
const minus     = createLabel("button","-","class","grid-item","type","button");
const multiply  = createLabel("button","*","class","grid-item","type","button");
const divide    = createLabel("button","/","class","grid-item","type","button");
const equal     = createLabel("button","=","class","grid-item","type","button");
const clear     = createLabel("button","AC","class","grid-item","type","button");
const dot       = createLabel("button",".","class","grid-item","type","button");

buttons.append( one,two,three,minus,clear,
                four,five,six,multiply,plus,
                seven,eight,nine,divide,
                zeroDbl,zero,dot,equal)
main.append(outputDisplay,buttons)

document.body.append(main)
main.className = "grid-container"
plus.id = "plus" ;
equal.id = "equal" ;
outputDisplay.id = "outputDisplay";
buttons.classList.add("buttonsArea","aa");
