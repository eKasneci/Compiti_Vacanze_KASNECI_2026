let celle = ["acqua", "colpito", "acqua", "colpito", "colpito", "acqua"];

document.getElementById("conta").addEventListener("click", function() {
    let numeroColpiti = 0;

    for (let i = 0; i < celle.length; i++) {
        if (celle[i] == "colpito") {
            numeroColpiti++;
        }
    }

    document.getElementById("risultato").textContent =
        "Numero di elementi colpiti: " + numeroColpiti;
});