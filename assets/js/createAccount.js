// Create Account Page  //
const register_form = document.getElementById('register_form');

register_form.addEventListener('submit', (event)=> {

    const register_nameInput = document.getElementById('register_name');
    const register_emailInput = document.getElementById('register_email');
    const register_passwordInput = document.getElementById('register_password');
    const register_phoneInput = document.getElementById('register_phone');

    const nameError = document.getElementById('register_nameError');
    const emailError = document.getElementById('register_emailError');
    const passwordError = document.getElementById('register_passwordError');
    const phoneError = document.getElementById('register_phoneError');

    const emailRegex = /^[A-Za-z0-9._-]+@[A-Z0-9.-]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]{8,}$/;

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    phoneError.innerHTML = '';

    if (register_nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    }

    if (!register_emailInput.value.match(emailRegex)) {
        emailError.textContent = 'Please enter a valid email address';
    }

    if (!register_passwordInput.value.match(passwordRegex)) {
        passwordError.textContent = 'Password must be at least 8 characters, with at least one letter.';
    }

    if (!register_phoneInput.value.match(phoneRegex)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
    }

    if (!(nameError.innerHTML === "" && emailError.innerHTML === "" && passwordError.innerHTML === "" && phoneError.innerHTML === "")) {
        event.preventDefault();
    }
});

