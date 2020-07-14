function toggle(){const pass = document.getElementById("contraseña");
if(pass.type =="password"){
    pass.type = "text";
}else{
    pass.type = "password"
}
}