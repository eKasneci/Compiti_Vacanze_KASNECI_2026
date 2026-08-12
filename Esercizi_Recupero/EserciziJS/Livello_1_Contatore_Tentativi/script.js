let contatore = 0;

document.getElementById("pulsante").addEventListener("click", function() {
    contatore++;

    document.getElementById("contatore").textContent = contatore;
});