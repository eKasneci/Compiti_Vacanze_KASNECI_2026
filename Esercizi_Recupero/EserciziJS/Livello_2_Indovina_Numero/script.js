let numeroSegreto = Math.floor(Math.random() * 20) + 1;

document.getElementById("controlla").addEventListener("click", function() {
    let tentativo = Number(document.getElementById("tentativo").value);

    if (tentativo > numeroSegreto) {
        document.getElementById("risultato").textContent = "Troppo alto!";
    } else if (tentativo < numeroSegreto) {
        document.getElementById("risultato").textContent = "Troppo basso!";
    } else {
        document.getElementById("risultato").textContent = "Corretto! Hai indovinato!";
    }
});