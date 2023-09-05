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
const prevSrc = document.querySelector("#prev-screen");
const currSrc = document.querySelector("#curr-screen");
const acbtn = document.querySelector("#ac-btn");
acbtn.addEventListener('click',()=>{
    prevSrc.innerHTML = "";
    currSrc.innerHTML = "0";
});