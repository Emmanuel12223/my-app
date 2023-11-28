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
        // Set filter parameters in the URL
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('team', teamName);
        
        // Navigate to the same page with filter parameters
        window.location.href = `${window.location.pathname}?${queryParams.toString()}`;
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

    // Read filter parameters on page load
    readFilterParameters();

    // Attach the filterTable function to the input's onchange event
    document.getElementById("teamFilter").addEventListener("change", readFilterParameters);
    document.getElementById("mapFilter").addEventListener("change", readFilterParameters);
});
