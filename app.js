
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const button = document.getElementById('submit');
const form = document.querySelector('form');


// checking form validity upon submission
button.addEventListener('click', (e) => {

    // checking if all the inputs are valid
    validationArray = [];

    inputs.forEach(input => {
        validationArray.push(input.checkValidity());
    })

    let formValid = !validationArray.includes(false);

    // initializing inputs' validity in case it has already been clicked
    inputs.forEach(input => {
        input.classList.remove('invalid');
        input.reportValidity();
    });
    select.classList.remove('invalid')

    // makes invalid inputs red
    if (formValid === false) {

        e.preventDefault();
        inputs.forEach(input => {
            if (input.checkValidity() === false) {
                input.classList.add('invalid');
            }
        });
        if (select.checkValidity() === false) { select.classList.add('invalid'); }

    } else {

        console.log('success');
        window.location.href = "submission.html";

    }

})


// making inputs green when it is valid after correction
function inputValid(input) {
    if (input.classList.length !== 0 && input.checkValidity()) {
        input.classList.remove('invalid');
    }
}


// password validation
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword() {
    if (!password.value.match(reg)) {
        password.setCustomValidity("Password must contain at least 8 characters, including both UPPER/lowercase, at least one number and symbol.");
        password.reportValidity();
    } else {
        password.setCustomValidity('');
    }
}

function confirmMatch() {

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity('');
    }
}








