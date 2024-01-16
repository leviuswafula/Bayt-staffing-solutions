const express = require('express');
const app = express();
const PORT = 5500; 
const jobListingsData = [
    { title: "Software Developer", industry: "Technology", location: "Doha Qatar", company: "TechCorp", salary: "$75,000 - $80,000", description: "need of an experienced software developer", requirements: " 3+ years of experience is scalable software" },
    { title: "Software Developer", industry: "Technology", location: "Doha Qatar", company: "TechCorp", salary: "$80,000 - $100,000", description: "need of an experienced software developer", requirements: " 3+ years of experience is scalable software" },
    { title: "PUblic Accountant", industry: "Marketing", location: "Gulf", company: "MarketingPro", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
    { title: "IT specialist", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
    { title: "Civil Engineer", industry: "PLumb-pro", location: "Qatar", company: "plumbing site", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
    { title: "Software Architecht", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
    { title: "Data Analyst", industry: "Technology", location: "Saudi", company: "Doha-tech", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
    { title: "electrical engineer", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
    { title: "medical Specialist", industry: "medicine", location: "Dooha", company: "DohamedicsPro", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
];

app.get('/job-listings', (req, res) => {
    res.json(jobListingsData);
});

// Start the server
app.listen(5500, () => {
    console.log(`Server is running on http://localhost:${5500}`);
});
