let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(length) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()_+-=[]{}|';:,./<>?";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let index = 0; index < length; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }

    return generator;
}

function getPassword() {
    const length = parseInt(passwordLength.value); // Mendapatkan panjang password dari input
    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid password length");
        return;
    }
    const newPassword = generatePassword(length);
    password.value = newPassword;
}

function savePassword() {
    const passwordValue = password.value;
    if (passwordValue) {
        document.title = password.value;
        const saveButton = document.createElement('a');
        saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Password saya: ' + document.title)); // Menyematkan data password ke tautan unduhan
        saveButton.setAttribute('download', 'MyPasswordGenearatorLOG.txt')
        saveButton.style.display = 'none';
        document.body.appendChild(saveButton);
        saveButton.click();
        document.body.removeChild(saveButton);
        alert('Password saved: ' + passwordValue);
    } else {
        alert('No password to save!');
    }
}