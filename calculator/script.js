let calculation = '';

function calculate(value) {

    if (value === '=') {
        calculation = eval(calculation);
    } 
    else if (value === 'AC') {
        calculation = '';
    } 
    else if (value === 'X') {
        calculation = calculation.slice(0, -1);
    } 
    else {
        calculation += value;
    }

    console.log(calculation);

    document.querySelector('.display').innerHTML = calculation;
    document.querySelector('.display').style.fontSize = '40px';
    document.querySelector('.display').style.textAlign = 'right';
    document.querySelector('.display').style.fontstyle = 'right';
}