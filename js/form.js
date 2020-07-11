var element;
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
var formato;

// pattern="[A-Za-záéíóú]"
// to catch errors before submitting, add an eventlistener on form when submit
form.addEventListener('submit', (e) => {
    // error messages
    let messages = [];
    element = document.getElementById('nombre');
    formato = /[A-Za-záéíóú]+$/i;
    if (element.value === '' || element.value == null) {
        messages.push("No se proveyó un nombre.");
    } else {
        if (!element.value.match(formato)) {
            messages.push("El nombre sólo debe incluir letras.");
        }
        else if (element.value.length < 3 || element.value.length > 20) {
            messages.push("La longitud del nombre debe ser mayor a 3 caracteres y menor a 20.");
        }
    }
    element = document.getElementById('apellido');
    if (element.value === '' || element.value == null) {
        messages.push("No se proveyó un apellido.");
    } else {
        if (!element.value.match(formato)) {
            messages.push("El apellido solo debe incluir letras.");
        }
        else if (element.value.length < 3 || element.value.length > 20) {
            messages.push("La longitud del apellido debe ser mayor a 3 caracteres y menor a 20.");
        }
    }
    element = document.getElementById('dni');
    formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (condition) {
        
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join("\n");
    }
})