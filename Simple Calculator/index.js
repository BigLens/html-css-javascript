let num1 = 8
let num2 = 2
document.getElementById("firstNum").textContent = num1
document.getElementById("secondNum").textContent = num2
let totalResult = document.getElementById("total")

function add() {
    let addNums =  + num1 + num2
    totalResult.textContent = "Sum: " + addNums
}
function divide() {
    let divideNum = num1 / num2
    totalResult.textContent = "Sum: " + divideNum
}
function multiply() {
    let multiplyNum = num1 * num2
    totalResult.textContent = "Sum: " + multiplyNum
}
function subtract() {
    let subtractNum = num1 - num2
    totalResult.textContent = "Sum: " + subtractNum
}
