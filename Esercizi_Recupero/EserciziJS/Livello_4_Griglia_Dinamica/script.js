let griglia = document.getElementById("griglia");

for (let i = 0; i < 25; i++) {
    let cella = document.createElement("div");

    cella.classList.add("cella");

    griglia.appendChild(cella);
}