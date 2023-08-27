
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const button = document.getElementById('submit');
const form = document.querySelector('form');

let formValid = form.checkValidity();


// checkin form validity upon submission
button.addEventListener('click', (e) => {

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

        form.addEventListener("submit");

    }
})


// making inputs green when it is valid after correction
function inputValid(input) {
    if (input.classList.length !== 0 && input.checkValidity()) {
        input.classList.remove('invalid');
    }
}


// password confirm checking
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








