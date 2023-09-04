function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0) return "OOPS";
    return a/b;
}
let operand1;
let operand2;
let operator;
function operate(){
    operand1 = parseInt(prompt("Enter Value 1"));
    operator = prompt("Enter the Operator:('+', '-', '*','/')"  );
    operand2 = parseInt(prompt("Enter value 2"));
    let result;
    if(operator == "+") result = add(operand1,operand2);
    if(operator == "-") result = subtract(operand1,operand2);
    if(operator == "*") result = multiply(operand1,operand2);
    if(operator == "/") result = divide(operand1,operand2);
    alert(result);
}