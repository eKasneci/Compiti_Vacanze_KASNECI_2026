let contenitore = document.getElementById("pulsanti");

for (let i = 1; i <= 10; i++) {
    let pulsante = document.createElement("button");

    pulsante.textContent = i;

    pulsante.addEventListener("click", function() {
        document.getElementById("risultato").textContent =
            "Hai scelto il numero " + i;
    });

    contenitore.appendChild(pulsante);
}