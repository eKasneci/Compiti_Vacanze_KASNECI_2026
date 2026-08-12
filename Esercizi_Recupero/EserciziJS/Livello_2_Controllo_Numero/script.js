document.getElementById("controlla").addEventListener("click", function() {
    let numero = Number(document.getElementById("numero").value);

    if (numero > 0) {
        document.getElementById("risultato").textContent = "Il numero è positivo.";
    } else if (numero < 0) {
        document.getElementById("risultato").textContent = "Il numero è negativo.";
    } else {
        document.getElementById("risultato").textContent = "Il numero è uguale a zero.";
    }
});