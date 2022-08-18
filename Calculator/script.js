function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var oper = document.querySelector("#operator").value;
    var calculate;

if (oper == "Sum") {
    calculate = a + b;
} else if (oper == "Subtract") {
    calculate = a - b;
}else if (oper == "Divide") {
    calculate = a / b;
}else if (oper == "Multiply") {
    calculate = a * b;
}else if (oper == "Power") {
    calculate = a ** b;
}else if (oper == "Square Root") {
    calculate = Math.sqrt(a);
}

document.querySelector("#result").innerHTML = calculate;

}