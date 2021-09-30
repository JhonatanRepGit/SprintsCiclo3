
function validar_nombre_usuario(user){
// El usuario debe tener entre 6 y 30 caracteres
// Solo puede contener caracteres de la Aa a la Zz
// Retorna verdadero si cumple y falso si no 

    var expresionEXPU = /^[a-zA-Z]+$/;
    var expresionINPU = user;

    var letrasU = user.length >= 6 && user.length <= 30;

    if (expresionINPU.match(expresionEXPU) && letrasU){
        alert("Usuario valido");
        return true;
    } else{
        alert("Usuario invalido")
        return false;
      }
}

function validar_contrasena(password){
    // La contraseña debe tener 6 o mas caracteres
    // Solo puede contener caracteres de la Aa a la Zz o números del 0 al 9
    // Retorna verdadero si cumple y falso si no 

    var expresionEXPC = /^[0-9a-zA-Z]+$/;
    var expresionINPC = password;

    var letrasC = password.length >= 6;

    if (expresionINPC.match(expresionEXPC) && letrasC){
        alert("Contraseña valida");
        return true;
    } else {
        alert("Contraseña invalida");
        return false;
      }
}

function confirmar_contrasena(firstPassword, secondPassword){
    /* El programa ingresa por esta función para la lectura de las dos contraseñas,
     * envía cada dato a la función validar_contrasena y da una respuesta T/F según
     * la validación. Esta función debe validar que las dos contraseñas sean iguales.
     * Retorna verdadero si cumple y falso si no
     */

    var v1 = validar_contrasena(firstPassword);
    var v2 = validar_contrasena(secondPassword);

    if (v1 == v2 && v1 == true && v2 == true){
        return true;
    } else {
        false;
    }
    

}

function validacion(){

    var usuario = document.querySelector('#in_nombre_usuario').value;
    var contraseña1 = document.querySelector('#in_contrasena').value;
    var contraseña2 = document.querySelector('#in_confirmar_contrasena').value;


    if (usuario == "" && contraseña1 == "" && contraseña2 == ""){
        alert("Todos los campos son obligatorios");
    } else {

    //  Proceso uno: Validar el nombre se usuario
        var validacion = validar_nombre_usuario(usuario);
        
    //  Proceso uno: Validar el nombre se usuario
        if (confirmar_contrasena(contraseña1, contraseña2) == true && validacion == true){
            alert("Información valida - Registro corecto");
        } else {
            alert("Información invalida - Registro incorrecto");
        }
    }
}    

module.export.validar_nombre_usuario = validar_nombre_usuario;
module.export.validar_contrasena = validar_contrasena;
module.export.confirmar_contrasena = confirmar_contrasena;