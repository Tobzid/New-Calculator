function add(r,t) {
    return r + t;
}

function subtract(r,t) {
    return r - t;
}

function multiply(r,t)  {
    return r * t;
}

function divide(r,t) {
    return r / t;
}

function modulus(r,t) {
    return r % t;
}

function simpleCalc(){
    var operator = prompt("CALCULATOR \n choose your operator e.g -,+,/,*,%");
    var r = prompt("CALCULATOR \n put your first number");
    var t = prompt("CALCULATOR \n put your second numbr");
    var result = 0;

if (operator == "+"){
    result = add(r,t);
    alert(r + "+" + t);
}

else if (operator == "-") {
    result = subtract(r,t);
    alert(r + "-" + t);
}

else if (operator == "*") {
    result = multiply(r,t);
    alert(r + "*" + t);
}

else if (operator == "/") {
    result = divide(r,t);
    alert(r + "/" + t);
}

else if (operator == "%"){
    result = modulus(r,t);
    alert(r + "%" + t);
}

else {
    alert("Put a valid operator or number");
}

alert(result);
}

simpleCalc();