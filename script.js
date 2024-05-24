
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function cleardisplay() {
    document.getElementById('display').value = '';
}

function calculator() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
