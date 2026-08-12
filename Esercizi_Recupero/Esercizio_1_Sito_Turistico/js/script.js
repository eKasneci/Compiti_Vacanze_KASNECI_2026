document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('form-alert');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const cognome = document.getElementById('cognome').value.trim();
            const email = document.getElementById('email').value.trim();
            const selectElement = document.getElementById('motivo');
            const motivoValue = selectElement.value;
            const motivoText = selectElement.options[selectElement.selectedIndex].text;

            if (!nome || !cognome || !email || !motivoValue) {
                alertBox.className = 'alert alert-danger';
                alertBox.innerHTML = '<strong>Attenzione!</strong> Compila tutti i campi prima di inviare.';
                alertBox.classList.remove('d-none');
                return;
            }

            alertBox.className = 'alert alert-info';
            alertBox.classList.remove('d-none');

            if (motivoValue === 'escursione') {
                alertBox.innerHTML = `<strong>Ahoy ${nome}!</strong> Preparati a salpare. Ti invieremo presto i dettagli per la tua richiesta: <em>${motivoText}</em> all'indirizzo <strong>${email}</strong>.`;
            } else if (motivoValue === 'spiagge') {
                alertBox.innerHTML = `<strong>Ciao ${nome}!</strong> Ti abbiamo inviato la guida delle spiagge e della pineta di Rimigliano a <strong>${email}</strong>.`;
            } else {
                alertBox.innerHTML = `<strong>Grazie ${nome} ${cognome}!</strong> Abbiamo ricevuto la tua richiesta di informazioni. Ti risponderemo a breve su <strong>${email}</strong>.`;
            }

            form.reset();
        });
    }
});