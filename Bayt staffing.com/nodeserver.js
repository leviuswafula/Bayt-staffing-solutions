const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const employers = [];

// Employer Registration Endpoint
app.post('/register', (req, res) => {
    const { companyName, email, password } = req.body;
    
    // Validate and add to the database
    if (companyName && email && password) {
        employers.push({ companyName, email, password });
        res.send('Registration successful!');
    } else {
        res.status(400).send('Invalid registration data.');
    }
});

// Employer Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validate login credentials
    const employer = employers.find(emp => emp.email === email && emp.password === password);
    if (employer) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid login credentials.');
    }
});

app.listen(5500, () => {
    console.log(`Server is running on http://localhost:${5500}`);
});
