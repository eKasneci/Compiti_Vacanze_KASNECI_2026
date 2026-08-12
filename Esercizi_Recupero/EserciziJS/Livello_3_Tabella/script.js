document.getElementById("calcola").addEventListener("click", function() {
    let numero = Number(document.getElementById("numero").value);
    let risultato = document.getElementById("risultato");

    risultato.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        risultato.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
});