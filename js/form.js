//TODO Password visibility

// todo change content

// window.location.search devuelve los parámetros de la url
var url = window.location.search;
var inputs = document.getElementsByClassName("inputs");
var registerLink = document.getElementById('register');
var loginLink = document.getElementById('login');
var optionLine = document.getElementsByClassName("underline")[0];
var currentState = "";
// form validation variables
var errorElement = "";
// current element
var element;
// current format
var formato;
// form element
const form = document.getElementById('form');
// function called on load to check form's initial display
function getFormtoDisplay() {
	// if the current url has the following query, means it came from "ingresar" option
	if (url === "?mode=register") {
		// so, hide the signup form
		inputs[0].style.display = "none";
		changeContent("register");
	} else {
		// let it be login by default
		inputs[1].style.display = "none";
		changeContent("login");
	}
}

getFormtoDisplay();

// TODO force correct form's initial state
function changeContent(state) {
	if (state == "register") {
		// if register mode is already set
		if (currentState === "register") {
			optionLine.style.transition = "0.2s linear";
			optionLine.style.height = registerLink.parentElement.offsetHeight + "px";
			optionLine.style.backgroundColor = "#FFA536";
			setTimeout(() => {
				optionLine.style.height = "2px";
				optionLine.style.marginBottom = registerLink.parentElement.offsetHeight - 2 + "px";
			}, 200);
			setTimeout(() => {
				optionLine.style.height = registerLink.parentElement.offsetHeight + "px";
				optionLine.style.marginBottom = 0;
			}, 400);
			setTimeout(() => {
				optionLine.style.height = "2px";
			}, 600);
			setTimeout(() => {
				optionLine.style.backgroundColor = "#0F5F75";
			}, 800);
		} else {
			// if not, set it to hide, and display the other one
			inputs[0].style.display = "none";
			inputs[1].style.display = "flex";
			optionLine.style.width = registerLink.offsetWidth + "px";
			optionLine.style.transition = "0.5s ease-in-out";
			optionLine.style.marginLeft = parseInt(registerLink.parentElement.offsetWidth) - parseInt(optionLine.style.width) + "px";
			currentState = "register";
			catchErrors(currentState);
			for (let i = 0; i < errorElement.length; i++) {
				errorElement[i].innerText = "";
			}
			document.getElementById('greeting').innerText = "¡Creá tu cuenta!";
		}
	} else {
		if (currentState === "login") {
			optionLine.style.transition = "0.2s linear";
			optionLine.style.height = registerLink.parentElement.offsetHeight + "px";
			optionLine.style.backgroundColor = "#FFA536";
			setTimeout(() => {
				optionLine.style.height = "2px";
				optionLine.style.marginBottom = registerLink.parentElement.offsetHeight - 2 + "px";
			}, 200);
			setTimeout(() => {
				optionLine.style.height = registerLink.parentElement.offsetHeight + "px";
				optionLine.style.marginBottom = 0;
			}, 400);
			setTimeout(() => {
				optionLine.style.height = "2px";
			}, 600);
			setTimeout(() => {
				optionLine.style.backgroundColor = "#0F5F75";
			}, 800);
		} else {
			inputs[1].style.display = "none";
			inputs[0].style.display = "flex";
			optionLine.style.width = loginLink.offsetWidth + "px";
			optionLine.style.transition = "0.5s ease-in-out";
			optionLine.style.marginLeft = 0;
			currentState = "login";
			catchErrors(currentState);
			for (let i = 0; i < errorElement.length; i++) {
				errorElement[i].innerText = "";
			}
			document.getElementById('greeting').innerText = "¡Bienvenido de nuevo!";
		}
	}
}

registerLink.onclick = () => {
	changeContent("register");
}

loginLink.onclick = () => {
	changeContent("login");
}

var loginReferenceFunction = (e) => {
	// error messages
	let messages = [];
	// error paragraphs
	errorElement = document.getElementsByClassName('login-error');
	element = document.getElementById('login-mail');
	formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó un Email.");
	} else if (!element.value.match(formato)) {
		messages.push("Revisa el formato del campo Email, un formato apropiado es similar al siguiente: \"ejemplo@mail.com\".");
	} else {
		messages.push("");
	}
	element = document.getElementById('login-pass');
	formato = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó una contraseña.");
	} else if (!element.value.match(formato)) {
		messages.push("Se requiere al menos una minúscula, una mayúscula y un número para la contraseña.");
	} else if (element.value.length < 8 || element.value.length > 20) {
		messages.push("La contraseña debe tener entre 8 y 20 caracteres");
	} else {
		messages.push("");
	}
	for (let i = 0; i < messages.length; i++) {
		if (messages[i] !== "") {
			e.preventDefault();
			for (let i = 0; i < errorElement.length; i++) {
				errorElement[i].innerText = messages[i];
				errorElement[i].style.padding = "0 5px";
			}
			setTimeout(() => {
				element = document.getElementById('login-mail');
				element.focus();
			}, 1000);
			break;
		}
	}
};

var registerReferenceFunction = (e) => {
	// error messages
	let messages = [];
	// error paragraphs
	errorElement = document.getElementsByClassName('error');
	element = document.getElementById('name');
	formato = /[A-Za-záéíóú]+$/i;
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó un nombre.");
	} else if (!element.value.match(formato)) {
		messages.push("El nombre sólo debe incluir letras.");
	}
	else if (element.value.length < 3 || element.value.length > 20) {
		messages.push("La longitud del nombre debe ser mayor a 3 caracteres y menor a 20.");
	} else {
		messages.push("");
	}
	element = document.getElementById('surname');
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó un apellido.");
	} else if (!element.value.match(formato)) {
		messages.push("El apellido solo debe incluir letras.");

	} else if (element.value.length < 3 || element.value.length > 20) {
		messages.push("La longitud del apellido debe ser mayor a 3 caracteres y menor a 20.");
	} else {
		messages.push("");
	}
	element = document.getElementById('dni');
	formato = /[0-9]+$/
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó un DNI.");
	} else if (!element.value.match(formato)) {
		messages.push("Un DNI válido sólo incluye números.");
	} else if (element.value.length < 7 || element.value.length > 9) {
		messages.push("Longitud del DNI inválida, los DNI deben tener entre 7 y 9 cifras para considerarse válidos.");
	} else {
		messages.push("");
	}
	element = document.getElementById('mail');
	formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó un Email.");
	} else if (!element.value.match(formato)) {
		messages.push("Revisa el formato del campo Email, un formato apropiado es similar al siguiente: \"ejemplo@mail.com\".");
	} else {
		messages.push("");
	}
	element = document.getElementById('pass');
	formato = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
	if (element.value === '' || element.value == null) {
		messages.push("No se proveyó una contraseña.");
	} else if (!element.value.match(formato)) {
		messages.push("Se requiere al menos una minúscula, una mayúscula y un número para la contraseña.");
	} else if (element.value.length < 8 || element.value.length > 20) {
		messages.push("La contraseña debe tener entre 8 y 20 caracteres");
	} else {
		messages.push("");
	}
	for (let i = 0; i < messages.length; i++) {
		if (messages[i] !== "") {
			e.preventDefault();
			for (let i = 0; i < errorElement.length; i++) {
				errorElement[i].innerText = messages[i];
				errorElement[i].style.padding = "0 5px";
			}
			setTimeout(() => {
				element = document.getElementById('name');
				element.focus();
			}, 1000);
			break;
		}
	}
};

function catchErrors(state) {
	if (state === "register") {
		// remove previous eventListener
		form.removeEventListener('submit', loginReferenceFunction);
		// add error handler for register form
		form.addEventListener('submit', registerReferenceFunction);
	} else if (state === "login") {
		//remove previous eventListener
		form.removeEventListener('submit', registerReferenceFunction);
		// add handler for login
		form.addEventListener('submit', loginReferenceFunction);
	}
}

catchErrors(currentState);