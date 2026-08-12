let griglia = document.getElementById("griglia");

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    cella.addEventListener("click", function() {
        if (!cella.classList.contains("cliccata")) {
            cella.classList.add("cliccata");

            document.getElementById("risultato").textContent =
                "Hai cliccato una cella.";
        }
    });

    griglia.appendChild(cella);
}