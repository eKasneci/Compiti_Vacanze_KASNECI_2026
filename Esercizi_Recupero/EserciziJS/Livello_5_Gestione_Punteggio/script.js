let griglia = document.getElementById("griglia");
let punteggio = 0;

let celleConPunti = [2, 6, 13, 19, 22];

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    cella.addEventListener("click", function() {
        if (cella.classList.contains("cliccata")) {
            return;
        }

        cella.classList.add("cliccata");

        if (celleConPunti.includes(i)) {
            punteggio += 10;
        }

        document.getElementById("punteggio").textContent = punteggio;
    });

    griglia.appendChild(cella);
}