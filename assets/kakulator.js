const calculator = {
    displayNumber:'0',
    operator: null,
    FirstNumber: null,
    waitingForSecondNumber: false

};
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.FirstNumber = null;
    calculator.waitingForSecondNumber = false;
}
function inputDigit(digit) {
    if (calculator.waitingForSecondNumber && calculator.FirstNumber === calculator.displayNumber) {
        calculator.displayNumber = digit;
    }else {
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = digit;
        }
        else{
            calculator.displayNumber += digit;
    }
    
}
}
function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
       
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}
function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true ;
        calculator.FirstNumber = calculator.displayNumber;
    } else{
        alert('operator sudah di tetapkan')
    }
}
function perfomCalculation() {
    if (calculator.FirstNumber == null || calculator.operator == null) {
        alert('anda belum memasukan operator');
        return;
    }

    let result = 0;
    if (calculator.operator === '+') {
         result = parseInt(calculator.FirstNumber) + parseInt(calculator.displayNumber);
    } else{
        result = parseInt(calculator.FirstNumber) - parseInt(calculator.displayNumber);

     }
 calculator.displayNumber = result;
}
const buttons = document.querySelectorAll('.button');
for (let button of buttons) {
    button.addEventListener('click',
    function(event) {
        const target = event.target;
        
        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            perfomCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.innerText)
            updateDisplay();
            return;
        }
        
        inputDigit(target.innerText);
        updateDisplay()
    }
    );
}
