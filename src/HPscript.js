// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded

    // Get the logo and welcome text elements
    const logoContainer = document.getElementById("logo-container");
    const welcomeText = document.getElementById("welcome-text");

    // Apply the initial animation to the logo
    logoContainer.style.opacity = "1";

    // After a delay, reveal the welcome text
    setTimeout(function() {
        welcomeText.style.opacity = "1";
        welcomeText.classList.remove("hidden");
    }, 1000); // Adjust the delay (in milliseconds) based on your preference

    // Function to navigate to a specific team's page
    function selectTeam(teamName) {
        const searchTerm = teamName;  // Replace with your desired search term
            
        // Navigate to the target HTML page with the search parameter
        window.location.href = `owl stats 2018.html?search=${searchTerm}`;
        
    }


    // Function to read filter parameters from the URL
    function readFilterParameters() {
        var teamFilter = document.getElementById("teamFilter").value.toUpperCase();
        var mapFilter = document.getElementById("mapFilter").value.toUpperCase();
        var input = document.getElementById("filterInput").value.toUpperCase();
        var table = document.getElementById("dataTable");
        var tr = table.getElementsByTagName("tr");

        for (var i = 0; i < tr.length; i++) {
            var teamTd = tr[i].getElementsByTagName("td")[5]; // Index for Team Name
            var mapTd = tr[i].getElementsByTagName("td")[8];  // Index for Map Name
            var matchWinnerTd = tr[i].getElementsByTagName("td")[5]; // Index for Match Winner

            if (teamTd && mapTd && matchWinnerTd) {
                var teamValue = teamTd.textContent || teamTd.innerText;
                var mapValue = mapTd.textContent || mapTd.innerText;
                var matchWinnerValue = matchWinnerTd.textContent || matchWinnerTd.innerText;

                if (
                    (teamFilter === "" || teamValue.toUpperCase() === teamFilter) &&
                    (mapFilter === "" || mapValue.toUpperCase() === mapFilter) &&
                    (input === "" || matchWinnerValue.toUpperCase().indexOf(input) > -1)
                ) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    
  
});

document.getElementById("all-teams-button").addEventListener("click", function() {
    window.location.href = './owl stats 2018.html';
});

 // Function to handle team button clicks
 function selectTeam(teamName) {
    const searchTerm = teamName;  // Replace with your desired search term

    // Navigate to the target HTML page with the search parameter
     window.location.href = `owl stats 2018.html?search=${searchTerm}`;
    
}

// Get all elements with the class "team-button"
const teamButtons = document.getElementsByClassName("team-button");

// Add click event listener to each button
for (const button of teamButtons) {
    button.addEventListener("click", function() {
        // Get the team name from the button's onclick attribute
        const teamName = button.getAttribute("onclick").match(/'([^']+)'/)[1];

        // Call the selectTeam function with the extracted team name
        selectTeam(teamName);
    });
}