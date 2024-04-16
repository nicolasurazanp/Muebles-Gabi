function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-content");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Cierra el menú desplegable cuando se hace clic fuera de él
window.onclick = function(event) {
    var dropdown = document.getElementById("dropdown-content");
    if (!event.target.matches('.dropbtn')) {
        dropdown.style.display = "none";
    }
}
