             document.addEventListener("DOMContentLoaded", function () {
         // Sample job listings (replace with actual data from your backend)
        const jobListingsData = [
            { title: "Software Developer", industry: "Technology", location: "Doha Qatar", company: "TechCorp", salary: "$80,000 - $100,000", description: "need of an experienced software developer", requirements: " 3+ years of experience is scalable software" },
            { title: "PUblic Accountant", industry: "Marketing", location: "Gulf", company: "MarketingPro", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
            { title: "IT specialist", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
            { title: "Civil Engineer", industry: "PLumb-pro", location: "Qatar", company: "plumbing site", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
            { title: "Software Architecht", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
            { title: "Data Analyst", industry: "Technology", location: "Saudi", company: "Doha-tech", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
            { title: "electrical engineer", industry: "Technology", location: "United States", company: "TechCorp", salary: "$80,000 - $100,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, 3+ years of experience" },
            { title: "medical Specialist", industry: "medicine", location: "Dooha", company: "DohamedicsPro", salary: "$60,000 - $80,000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Bachelor's degree, excellent communication skills" },
            // here is where i add my job listings.
        ];
    
        const jobListingsContainer = document.getElementById("jobListings");
        const jobSearchInput = document.getElementById("jobSearch");
    
        // Initial job listings display
        displayJobListings(jobListingsData);
    
        // Filter job listings based on user input
        jobSearchInput.addEventListener("input", function () {
            const searchTerm = jobSearchInput.value.toLowerCase();
            const filteredListings = jobListingsData.filter(job => job.title.toLowerCase().includes(searchTerm));
            displayJobListings(filteredListings);
        });
    
        // Function to display job listings
        function displayJobListings(listings) {
            jobListingsContainer.innerHTML = "";
             // Clear previous listings
    
            listings.forEach(job => {
                const jobCard = document.createElement("div");
                jobCard.classList.add("job-card");
                jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>Industry: ${job.industry}</p>
                    <p>Location: ${job.location}</p>
                    <p>Company: ${job.company}</p>
                    <p>Salary: ${job.salary}</p>
                    <p>Description: ${job.description}</p>
                    <p>Requirements: ${job.requirements}</p>
                `;
                jobListingsContainer.appendChild(jobCard);
            });
        }
    });
    
