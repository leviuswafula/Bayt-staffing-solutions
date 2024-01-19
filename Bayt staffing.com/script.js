
document.addEventListener("DOMContentLoaded", async function () {
        // Sample job listings (to be replaced with the actual data from your backend)
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

        let url  = 'http://127.0.0.1:8000/premium-jobs/';        
            let response_data = await fetch(url); 
           
            if (response_data.status === 200) {  
                let fetchedData = await response_data.json();
                displayJobListings(fetchedData);

                jobSearchInput.addEventListener("input", function () {
                    const searchTerm = jobSearchInput.value.toLowerCase();
                    const filteredListings = fetchedData.filter(job => job.name.toLowerCase().includes(searchTerm));
                    displayJobListings(filteredListings);
                });
                }


                const accessToken = localStorage.getItem('access_token');

                
   
                function refreshAccessToken() {
                 const refreshToken = localStorage.getItem('refresh_token');
                
                   if (!refreshToken) {
                     throw new Error("Refresh token not found");
                   }
                 
                   
                   fetch("http://127.0.0.1:8000/auth-refresh/", {
                     method: "POST",
                     headers: {
                       "Content-Type": "application/json",
                       "Authorization": "Bearer " + accessToken
                       
                       
                     },
                     body: JSON.stringify({ refresh: refreshToken  }),
                   })
                     .then((response) => {
                       if (!response.ok) {
                         throw new Error("Refresh token failed");
                       }
                       return response.json();
                     })
                     .then((data) => {
                       localStorage.setItem('access_token', data.access);
                       
                     })
                     .catch((error) => {
                       console.error("Error refreshing access token:", error);
                       
                     });
                 }
                 refreshAccessToken()
                fetch('http://127.0.0.1:8000/premium-jobs/', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer " + accessToken
                        // 'Authorization': `Bearer ${accessToken}`,
                    },
                })
                .then(response => {
                    if (response.ok) {
                        
                        return response.json();
                        
                    } else {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                })
                .then(data => {
                    displayJobListings(data);
                    jobSearchInput.addEventListener("input", function () {
                        const searchTerm = jobSearchInput.value.toLowerCase();
                        const filteredListings = data.filter(job => job.name.toLowerCase().includes(searchTerm));
                        displayJobListings(filteredListings);
                    });
                    
                })
                .catch(error => {
                    console.error('Error during request:', error);
                    
                });




                
        // Function to display job listings
        function displayJobListings(listings) {
            jobListingsContainer.innerHTML = "";
             // Clear previous listings
    
            listings.forEach(job => {
                const jobCard = document.createElement("div");
                jobCard.classList.add("job-card");
                jobCard.innerHTML = `
                    <h3>${job.name}</h3>
                    <p>Industry: ${job.industry}</p>
                    <p>Location: ${job.location}</p>
                    <p>Company: ${job.companyName}</p>
                    <p>Salary: ${job.salaryRange}</p>    
                    <p>Description: ${job.jobDescription}</p>
                    <p>Requirements: ${job.jobRequirements}</p>
                `;
                jobListingsContainer.appendChild(jobCard);
            });
        }
    });
    function openChat() {
            // Add your logic to open a chat window
            alert("Open chat functionality goes here.");
        }
        document.addEventListener("DOMContentLoaded", function () {
        // Function to toggle the visibility of the "Talk with us" icon
        function toggleTalkWithUs() {
            const talkWithUs = document.getElementById("talkWithUs");
            talkWithUs.style.display = (talkWithUs.style.display === 'none' || talkWithUs.style.display === '') ? 'block' : 'none';
        }

        // Initial toggle after the page loads
        toggleTalkWithUs();

        // Set interval to toggle the "Talk with us" icon every  seconds
        setInterval(toggleTalkWithUs, 5000);
    }
    );
    
