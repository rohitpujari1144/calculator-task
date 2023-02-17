var currentInput = document.getElementById('result')
var equation = document.getElementById('equation')
var equations = [];
var answers = [];

let buttonsDiv = document.getElementById('buttons')

buttonsDiv.addEventListener('click', calculator)

buttonsDiv.addEventListener('keypress', calculator)

function calculator(e) {
    if (e.type == 'keypress') {
        e.preventDefault();
        var keynum = e.key
        var letters = /[a-z A-Z]/
        if (keynum == "Enter") {
            ans(keynum)
        }
        else if (keynum.match(letters)) {
            alert("Enter Digits for Calculation")
        }
        else {
            ans(keynum)
        }
    }
    else {
        var clicknum = e.target.innerText
        ans(clicknum)
    }
}

function ans(buttonText) {
    if (buttonText == '*') {
        buttonText = "*"
        currentInput.value += buttonText
    }
    else if (buttonText == "C") {
        currentInput.value = 0;
        equation.value = " ";
    }
    else if (buttonText == "=" || buttonText == "Enter") {
        equation.value = currentInput.value + "=";
        currentInput.value = eval(currentInput.value)
        equations.push(equation.value)
        answers.push(currentInput.value)
    }
    else if (currentInput.value == 0) {
        currentInput.value = buttonText
    }
    else {
        currentInput.value += buttonText;
    }
}