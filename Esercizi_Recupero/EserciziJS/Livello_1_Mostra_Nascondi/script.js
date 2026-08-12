document.getElementById("pulsante").addEventListener("click", function() {
    let testo = document.getElementById("testo");

    if (testo.style.display == "none") {
        testo.style.display = "block";
    } else {
        testo.style.display = "none";
    }
});