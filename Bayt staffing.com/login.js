
document.addEventListener('DOMContentLoaded', function() {

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click',function () {
    
        const formData = {
            username: document.getElementById('loginusername').value,
           
            password: document.getElementById('loginpassword').value
        };

        fetch('http://127.0.0.1:8000/authenticate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response =>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

        console.log('Registration successful:', data.access);
        
    })
    .catch(error => {
        console.error('Error during login:', error);
        
    });
    });
       
});