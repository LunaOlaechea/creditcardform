const name = document.querySelector('#name');
const number = document.querySelector('#number');
const date = document.querySelector('#date');
const cvc = document.querySelector('#cvc');

const btnSubmit = document.querySelector('#btn-submit');
const form = document.querySelector('#form');

class formulary {
    constructor (name, number, date, cvc) {
        this.name = name.value,
        this.number = number.value,
        this.date = date.value,
        this.cvc = cvc.value

        this.validate(name);
        this.validate(number);
        this.validate(date);
        this.validate(cvc);
    }
    validate(input) {
        if(this.name.trim() == '' || this.number.trim() == '' || this.date.trim() == '' || this.cvc.trim() == '') {  
            if(input.value.trim() === '') {
                UI.error(input);
            }
            return;
        }
        this.validated();
    }
    validated() {
        const spinner = document.querySelector('.lds-ring');
        spinner.classList.remove('hidden');

        name.disabled = true;
        number.disabled = true;
        date.disabled = true;
        cvc.disabled = true;

        setTimeout(() => {
            spinner.classList.add('hidden');
            form.reset();

            name.disabled = false;
            number.disabled = false;
            date.disabled = false;
            cvc.disabled = false;

        }, 3000);
    }
}
class ui {
    error(input, remove) {
        const error = document.createElement('p');
        error.textContent = 'Can\'t be blank';
        error.classList.add('error');
        
        
        if(!input.classList.contains('error-border')) {
            input.classList.remove('error-border');
            error.remove();
            input.classList.add('error-border');
            input.parentElement.appendChild(error);
        }
        
        if(input.parentElement.lastChild.classList.contains('error') && remove) {
            input.classList.remove('error-border');
            input.parentElement.lastChild.remove();
        }
    }
}
const UI = new ui;
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let Form = new formulary(name, number, date, cvc);
    console.log(Form)
});
name.addEventListener('input', () => {
    UI.error(name, true);
});
number.addEventListener('input', () => {
    UI.error(number, true);
});
date.addEventListener('input', () => {
    UI.error(date, true);
});
cvc.addEventListener('input', () => {
    UI.error(cvc, true);
});