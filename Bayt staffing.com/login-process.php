<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $username = $_POST["username"];
    $password = $_POST["password"];
    $validUsername = "user123";
    $validPassword = "pass123";

    // Check if the provided credentials are valid
    if ($username === $validUsername && $password === $validPassword) {
        // Redirect to a dashboard or home page
        header("Location: dashboard.php");
        exit();
    } else {
        // Invalid credentials, redirect back to the login page with an error message
        header("Location: login.html?error=1");
        exit();
    }
}
?>
