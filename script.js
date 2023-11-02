const register_form = document.getElementById('register_form');
const register_message = document.getElementById('register_message');

register_form.addEventListener('submit', function(event)
{
    const student_fname = document.getElementById('student_fname');
    const student_lname = document.getElementById('student_lname');
    const student_email = document.getElementById('student_email');
    const student_phone = document.getElementById('student_phone');
    const student_major = document.getElementById('student_major');

    const fnameError = document.getElementById('register_fnameError');
    const lnameError = document.getElementById('register_lnameError');
    const emailError = document.getElementById('register_emailError');
    const trainError = document.getElementById('register_majorError');
    const phoneError = document.getElementById('register_phoneError');

    const emailRegex = /^[A-Za-z0-9._-]+@[A-Z0-9.-]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[0-9]{10}$/;

    fnameError.innerHTML = '';
    lnameError.innerHTML = '';
    emailError.innerHTML = '';
    trainError.innerHTML = '';
    phoneError.innerHTML = '';

    if (student_fname.value.trim() === '') {
        fnameError.innerHTML = 'First name is required';
    }

    if (student_lname.value.trim() === '') {
        lnameError.innerHTML = 'Last name is required';
    }

    if (!student_email.value.match(emailRegex)) {
        emailError.innerHTML = 'Please enter a valid email address';
    }

    if (student_major.value.trim() === '') {
        trainError.innerHTML = 'Major is required';
    }

    if (!student_phone.value.match(phoneRegex)) {
        phoneError.innerHTML = 'Please enter a valid 10-digit phone number';
    }

    if (!(fnameError.innerHTML === "" && lnameError.innerHTML === "" && emailError.innerHTML === "" 
    && trainError.innerHTML === "" && phoneError.innerHTML === "")) {
        event.preventDefault();
    }
    else{
        event.preventDefault();
        register_message.style.display = "block";
    }
});

