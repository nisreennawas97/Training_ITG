const form = document.getElementById('form');
const form_msg = document.getElementById('message');

form.addEventListener('submit', function(event)
{
    event.preventDefault(); 

    form_msg.style.display = "block";
});

