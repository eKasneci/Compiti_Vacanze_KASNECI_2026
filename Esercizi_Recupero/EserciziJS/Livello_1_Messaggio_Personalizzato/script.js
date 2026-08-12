document.getElementById("pulsante").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;

    document.getElementById("messaggio").textContent = "Ciao " + nome + "!";
});