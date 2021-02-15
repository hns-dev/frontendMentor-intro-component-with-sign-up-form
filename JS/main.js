/* 
First Name cannot be empty
Last Name cannot be empty
Looks like this is not email
Password cannot be empty
*/

const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const fnameError = document.querySelector('.error-msg.fname');
const lnameError = document.querySelector('.error-msg.lname');
const emailError = document.querySelector('.error-msg.email');
const passwordError = document.querySelector('.error-msg.password');

form.addEventListener('input', function(event) {
    if(firstName.validity.valid){
        fnameError.textContent = '';
        hideErrorIcon(firstName);
    }

    if(lastName.validity.valid){
        lnameError.textContent = '';
        hideErrorIcon(lastName);
    }

    if(email.validity.valid){
        emailError.textContent = '';
        hideErrorIcon(email);
    }

    if(password.validity.valid){
        passwordError.textContent = '';
        hideErrorIcon(password);
    }
});



form.addEventListener('submit', e => {
	e.preventDefault();
	
    if(!firstName.validity.valid){
        showError(firstName);
    }

    if(!lastName.validity.valid){
        showError(lastName);
    }

	if(!email.validity.valid) {
        showError(email);
    }

    if(!password.validity.valid){
        showError(password);
    }
});


function showError(field) {
    if(firstName.validity.valueMissing){
        setErrorFor(firstName, 'First Name cannot be empty');
        showErrorIcon(firstName)
    }

    if(lastName.validity.valueMissing){
        setErrorFor(lastName, 'Last Name cannot be empty');
        showErrorIcon(lastName)
    }

	if(email.validity.valueMissing) {
        setErrorFor(email, 'Email cannot be empty');
        showErrorIcon(email);
    } else if (!isEmail(email.value)) {
		setErrorFor(email, 'Looks like this is not email');
	}

    if(password.validity.valueMissing){
        setErrorFor(password, 'Password cannot be empty');
        showErrorIcon(password)
    }
    
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const errorMsg = formControl.querySelector('.error-msg');
	// formControl.className = 'form-control error';
	errorMsg.textContent = message;
}

function showErrorIcon(input){
    const formControl = input.parentElement;
	const errorIcon = formControl.querySelector('.error-icon');
    errorIcon.style.visibility = "visible";
}

function hideErrorIcon(input){
    const formControl = input.parentElement;
	const errorIcon = formControl.querySelector('.error-icon');
    errorIcon.style.visibility = "hidden";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}