// script.js

function filterTable() {
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

function GotoHomePage() {
    window.location.href = 'homePage.html';
}


document.getElementById("teamFilter").addEventListener("change", filterTable);
document.getElementById("mapFilter").addEventListener("change", filterTable);
