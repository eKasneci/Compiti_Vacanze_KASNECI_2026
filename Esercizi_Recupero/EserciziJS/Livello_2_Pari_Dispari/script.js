document.getElementById("controlla").addEventListener("click", function() {
    let numero = Number(document.getElementById("numero").value);

    if (numero % 2 == 0) {
        document.getElementById("risultato").textContent = "Il numero è pari.";
    } else {
        document.getElementById("risultato").textContent = "Il numero è dispari.";
    }
});