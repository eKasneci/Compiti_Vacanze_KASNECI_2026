document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let messaggio = document.getElementById("messaggio").value;
    let risultato = document.getElementById("risultato");

    if (nome == "" || email == "" || messaggio == "") {
        risultato.textContent = "Errore: devi compilare tutti i campi.";
    } else {
        risultato.textContent = "Messaggio inviato correttamente!";
    }
});