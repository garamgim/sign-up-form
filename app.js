
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const button = document.getElementById('submit');
const form = document.querySelector('form');

let formValid = form.checkValidity();

button.addEventListener('click', (e) => {

    // initializing inputs' validity in case it's already clicked
    inputs.forEach(input => input.classList.remove('invalid'));
    select.classList.remove('invalid')

    // makes invalid inputs red upon clicking
    if (formValid === false) {

        e.preventDefault();
        inputs.forEach(input => {
            if (input.checkValidity() === false) { input.classList.add('invalid'); }
        });
        if (select.checkValidity() === false) { select.classList.add('invalid'); }

    } else {

        form.addEventListener("submit");

    }
})

function inputValid(input) {
    if (input.classList.length !== 0 && input.checkValidity()) {
        input.classList.remove('invalid');
    }
}






