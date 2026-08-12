let citta = ["Roma", "Milano", "Torino", "Genova", "Napoli"];

document.getElementById("cerca").addEventListener("click", function() {
    let nomeCitta = document.getElementById("citta").value;
    let trovata = false;

    for (let i = 0; i < citta.length; i++) {
        if (citta[i].toLowerCase() == nomeCitta.toLowerCase()) {
            trovata = true;
        }
    }

    if (trovata) {
        document.getElementById("risultato").textContent =
            "La città è presente nell'array.";
    } else {
        document.getElementById("risultato").textContent =
            "La città non è presente nell'array.";
    }
});