document.getElementById("aggiungi").addEventListener("click", function() {
    let testo = document.getElementById("elemento").value;

    if (testo != "") {
        let elemento = document.createElement("li");

        elemento.textContent = testo;

        document.getElementById("lista").appendChild(elemento);

        document.getElementById("elemento").value = "";
    }
});