let griglia = document.getElementById("griglia");

let nave = [7, 8, 9];
let celleColpite = 0;

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    cella.addEventListener("click", function() {
        if (cella.classList.contains("colpita")) {
            return;
        }

        if (nave.includes(i)) {
            cella.classList.add("colpita");
            celleColpite++;

            if (celleColpite == 3) {
                document.getElementById("risultato").textContent =
                    "Nave affondata!";
            } else {
                document.getElementById("risultato").textContent =
                    "Hai colpito la nave!";
            }
        } else {
            document.getElementById("risultato").textContent =
                "Acqua!";
        }
    });

    griglia.appendChild(cella);
}