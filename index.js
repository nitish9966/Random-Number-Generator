const submit=document.getElementById("submit");
let number1=document.getElementById("number1");
let number2=document.getElementById("number2");
let number3=document.getElementById("number3");

const min=1;
const max=6;

submit.onclick=function(){
    number1.textContent=Math.floor(Math.random()*max)+min;
    number2.textContent=Math.floor(Math.random()*max)+min;
    number3.textContent=Math.floor(Math.random()*max)+min;
}