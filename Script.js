const screen = document.getElementById('screen');

// Appends numbers or operators to the screen
function appendValue(value) {
    if (screen.value === 'Error') {
        clearScreen();
    }
    screen.value += value;
}

// Clears the entire display screen
function clearScreen() {
    screen.value = '';
}

// Deletes the last input character
function deleteLast() {
    if (screen.value === 'Error') {
        clearScreen();
    } else {
        screen.value = screen.value.slice(0, -1);
    }
}

// Safely evaluates mathematical string expressions
function calculate() {
    try {
        // Use Function constructor instead of eval for safer compilation
        if (screen.value.trim() !== "") {
            screen.value = new Function(`return ${screen.value}`)();
        }
    } catch (error) {
        screen.value = 'Error';
    }
}
