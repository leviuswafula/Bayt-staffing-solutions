<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    //  validate and sanitation of user input

    // Implement password hashing for better security

    // Store user data in Bayt.staffinbg db

    // Redirect to home page on success
    header("Location: registration_success.php");
    exit();
}
?>
