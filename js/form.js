var element;
const form = document.getElementById('form');
const errorElement = document.getElementsByClassName('error');
var formato;

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
    } else if (!element.value.match(formato)) {
        messages.push("El apellido solo debe incluir letras.");

    } else if (element.value.length < 3 || element.value.length > 20) {
        messages.push("La longitud del apellido debe ser mayor a 3 caracteres y menor a 20.");
    }
    element = document.getElementById('dni');
    formato = /[0-9]+$/
    if (element.value === '' || element.value == null) {
        messages.push("No se proveyó un DNI.");
    } else if (!element.value.match(formato)) {
        messages.push("Un DNI válido sólo incluye números.");
    } else if (element.value.length < 7 || element.value.length > 9) {
        messages.push("Longitud del DNI inválida, los DNI deben tener entre 7 y 9 cifras para considerarse válidos.");
    }
    element = document.getElementById('mail');
    formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (element.value === '' || element.value == null) {
        messages.push("No se proveyó un Email.");
    } else if (!element.value.match(formato)) {
        messages.push("Revisa el formato del campo Email, un formato apropiado es similar al siguiente: \"ejemplo@mail.com\".");
    }
    element = document.getElementById('password');
    formato = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (element.value === '' || element.value == null) {
        messages.push("No se proveyó una contraseña.");
    } else if (!element.value.match(formato)) {
        messages.push("Se requiere al menos una minúscula, una mayúscula y un número para la contraseña.");
    } else if (element.value.length < 8 || element.value.length > 20) {
        messages.push("La contraseña debe tener entre 8 y 20 caracteres");
    }
    if (messages.length > 0) {
        e.preventDefault();
        for (let i = 0; i < errorElement.length; i++) {
            errorElement[i].innerText = messages[i];
            errorElement[i].style.padding = "0 5px";
            errorElement[i].style.margin = "-10px 10% 5px";
        }
        errorElement.innerText = messages.join("\n");
    }
});

//TODO Password visibility

//TODO Change content