document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click',function () {
    
    const formData = {
        username: document.getElementById('email').value,
        first_name: document.getElementById('name').value,
        
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

   
    fetch('http://127.0.0.1:8000/user-register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        
        console.log('Registration successful:', data);
        
    })
    .catch(error => {
        console.error('Error during registration:', error);
        
    });
});
});