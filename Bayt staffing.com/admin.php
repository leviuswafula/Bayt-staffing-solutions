<?php
$servername = "xammp";
$username = "levius-528";
$password = "8080";
$dbname = "Bayt.staffing db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to fetch and display job listings
function displayJobListings() {
    global $conn;

    $sql = "SELECT * FROM jobs";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>
                <tr>
                    <th>Job ID</th>
                    <th>Job Name</th>
                    <th>Industry</th>
                    <th>Country</th>
                    <th>Company Name</th>
                    <th>Region</th>
                    <th>Salary</th>
                    <th>Job Description</th>
                    <th>Job Requirement</th>
                </tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $row["id"] . "</td>
                    <td>" . $row["job_name"] . "</td>
                    <td>" . $row["industry"] . "</td>
                    <td>" . $row["country"] . "</td>
                    <td>" . $row["company_name"] . "</td>
                    <td>" . $row["region"] . "</td>
                    <td>" . $row["salary"] . "</td>
                    <td>" . $row["job_description"] . "</td>
                    <td>" . $row["job_requirement"] . "</td>
                </tr>";
        }

        echo "</table>";
    } else {
        echo "No job listings found.";
    }
}

// Display job listings
displayJobListings();

$conn->close();
?>
