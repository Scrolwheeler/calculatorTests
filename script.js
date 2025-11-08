const userInput = document.getElementById("userInput")
const userInput2 = document.getElementById("userInput2")
const result = document.getElementById("result")
const Calculate = document.getElementById("Calculate")
const select = document.getElementById("select")

addEventListener("click", GetResult)


function GetResult(){
    if (select.value = "/")
        result.innerText = +userInput.value / +userInput2.value;
    if (select.value = "*")
        result.innerText = +userInput.value * +userInput2.value;
    if (select.value = "-")
        result.innerText = +userInput.value - +userInput2.value;
    if (select.value = "+")
        result.innerText = +userInput.value + +userInput2.value;
}