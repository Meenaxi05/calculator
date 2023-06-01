let userinput=document.getElementById("input");
let expression="";

function meena(y){
    expression=expression+y
    userinput.value=expression
}

function erase(){
    expression="";
    userinput.value=expression
}

function equal(){
    expression=eval(expression)
    userinput.value=expression
}