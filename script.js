const result = document.querySelector('input[name="result"]');
const buttons = document.querySelectorAll('.button, .operator');
const equalButton = document.querySelector('.equal');
const acButton = document.querySelector('.AC');
const cButton = document.querySelector('.C');
const cleanNum = (str) => str.replace(/\d*(\.\d+)?/g, n => n && +n);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.value += button.value;
    });
});
equalButton.addEventListener('click', () => {
    result.value = eval(cleanNum(result.value));
});
acButton.addEventListener('click', () => {
    result.value = '';
});
cButton.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});
