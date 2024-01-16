document.getElementById('employerRegistrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform client-side validation if needed

    // Send registration data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `companyName=${companyName}&email=${email}&password=${password}`,
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});
