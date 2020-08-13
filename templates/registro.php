<?php
include_once("conexion.php");

if (isset($_POST['register'])){
    if(strlen($_POST['mail']) >= 1 && strlen($_POST['name']) >= 1 && strlen($_POST['surname']) >= 1 && strlen($_POST['password']) >= 1 && strlen($_POST['dni']) >= 1){
        $mail = $_POST['mail'];
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $pass = $_POST['password'];
        $dni = $_POST['dni']; 

        $consulta = "INSERT INTO usuarios (Email, Nombre, Apellido, Contraseña, DNI) VALUES ('$mail','$name','$surname','$pass','$dni')";
        $resultado = mysqli_query($conexion, $consulta);
        if ($resultado) {
            echo "Te inscribiste";
            echo "<br>";
            echo '<a href="index.html">Volver a pagina de inicio</a>';
        }else{
            header("Location: registro-error.php");
        }
    }
}
?>