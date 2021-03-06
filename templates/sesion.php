<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Opciones de sesión</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
		integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" href="../css/master.css">
	<link
		href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet">
	<link rel="stylesheet" href="../css/sesion.css">
	<link
		href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet">
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
		rel="stylesheet">
	<script defer src="https://kit.fontawesome.com/79cc46baec.js" crossorigin="anonymous"></script>
	<script defer src="../js/form.js"></script>
</head>

<body>
	<header>
		<h1 class="first container"><a href="index.html">Ferreterría Saavedra</a></h1>
	</header>
	<div class="container">
		<form action="registro.php" method="POST" autocomplete="off" id="form">
			<div class="option">
				<span>
					<a id="login">Iniciar sesión</a>
					<a id="register">Registrarme</a>
					<div class="underline"></div>
				</span>
			</div>
			<!--TODO: pass visibility-->
			<div class="banner">
				<h5 id="greeting">¡Bienvenido de nuevo!</h5>
				<p>
					Por favor, ingresa tus credenciales para disfrutar todos nuestros beneficios.
				</p>
			</div>
			<div class="inputs">
				<div class="form-wrapper">
					<label>
						<i class="far fa-envelope"></i>
						<input name="mail" id="login-mail" placeholder="Email" title="Un email válido, como ejemplo@mail.com">
						<div class="underline"></div>
					</label>
					<p class="login-error"></p>
				</div>
				<div class="form-wrapper">
					<label>
						<i class="fas fa-key"></i>
						<input type="password" name="pass" id="login-pass" placeholder="Contraseña" title="La contraseña debe incluir números, así como al menos una mayúscula y una minúscula. También debe tener 8 caracteres o más.">
						<div class="underline"></div>
					</label>
					<p class="login-error"></p>
				</div>
				<button type="submit">Iniciar sesión</button>
			</div>
			<div class="inputs">
				<div class="form-wrapper">
					<label>
						<i class="fas fa-font"></i>
						<input name="name" id="name" placeholder="Nombre" title="Solo letras">
						<div class="underline"></div>
					</label>
					<p class="error"></p>
				</div>
				<div class="form-wrapper">
					<label>
						<i class="fas fa-bold"></i>
						<input name="surname" id="surname" placeholder="Apellido" title="Solo letras">
						<div class="underline"></div>
					</label>
					<p class="error"></p>
				</div>
				<div class="form-wrapper">
					<label>
						<i class="far fa-address-card"></i>
						<input name="dni" id="dni" placeholder="DNI" title="Solo valores numéricos">
						<div class="underline"></div>
					</label>
					<p class="error"></p>
				</div>
				<div class="form-wrapper"></div>
				<div class="form-wrapper">
					<label>
						<i class="far fa-envelope"></i>
						<input name="mail" id="mail" placeholder="Email" title="Un email válido, como ejemplo@mail.com">
						<div class="underline"></div>
					</label>
					<p class="error"></p>
				</div>
				<div class="form-wrapper">
					<label>
						<i class="fas fa-key"></i>
						<input type="password" name="password" id="pass" placeholder="Contraseña" title="La contraseña debe incluir números, así como al menos una mayúscula y una minúscula. También debe tener 8 caracteres o más.">
						<div class="underline"></div>
					</label>
					<p class="error"></p>
				</div>
				<button type="submit" name="register">Registrarme</button>
			</div>
		</form>
	</div>
	<?php
		include_once("registro.php");
	?>
	<footer>
		<div class="wrapper">
			<div class="container">
				<div class="soporte">
					<h5>Soporte</h5>
					<ul>
						<li><a href="#">Nosotros</a></li>
						<li><a href="#">Contacto</a></li>
						<li><a href="">Nuestras marcas</a></li>
					</ul>
				</div>
				<div class="información">
					<h5>Información</h5>
					<ul>
						<li><a href="#">Preguntas frecuentes</a></li>
						<li><a href="#">Cómo llegar</a></li>
						<li><a href="#">Garantías</a></li>
					</ul>
				</div>
				<div class="cuenta">
					<h5>Mi cuenta</h5>
					<ul>
						<li><a href="#">Mi cuenta</a></li>
						<li><a href="#">Carrito</a></li>
						<li><a href="#">Programación de pedidos</a></li>
						<li><a href="#">Historial de compras</a></li>
					</ul>
				</div>
				<div class="ubicacion">
					<h5>Ubicación</h5>
					<p><a target="_blank"
							href="https://www.google.com/maps/place/Ferreter%C3%ADa+Saavedra/@-38.723543,-62.265592,15z/data=!4m5!3m4!1s0x0:0x79b1eca73c23b0da!8m2!3d-38.7235425!4d-62.2655918?hl=es-419">Saavedra
							336, B8000 Bahía Blanca, Buenos Aires.</a></p>
				</div>
				<div class="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3112.750233932251!2d-62.26559199999999!3d-38.723543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79b1eca73c23b0da!2sFerreter%C3%ADa%20Saavedra!5e0!3m2!1ses-419!2sar!4v1591224192412!5m2!1ses-419!2sar"
						width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
						aria-hidden="false" tabindex="0"></iframe>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div class="container">
				<small>@ 2020 Ferretería Saavedra</small>
				<img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="data fiscal">
			</div>
		</div>
	</footer>
</body>

</html>