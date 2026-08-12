let griglia = document.getElementById("griglia");

let celleSpeciali = [2, 8, 17, 23];

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    cella.addEventListener("click", function() {
        if (celleSpeciali.includes(i)) {
            cella.classList.add("speciale");

            document.getElementById("risultato").textContent =
                "Hai trovato una cella speciale!";
        } else {
            cella.classList.add("cliccata");

            document.getElementById("risultato").textContent =
                "Questa non è una cella speciale.";
        }
    });

    griglia.appendChild(cella);
}