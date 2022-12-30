// Restricciones para controlar que se ingresen bien los datos en el formulario:
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btn_enviar");

const validarNombre = () => {
    console.log("validando el nombre!!!");

    let nom = nombre.value.trim();  //elimino los espacios en blanco de la cadena
    let exprRegNombre = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");  //validacion para nombres y apellidos

    if(nom != null && nom != "" && exprRegNombre.test(nom)==true) {   // nom.length > 4 --> este de controlar que ingrese nombre de un cierto tamaño si funciona 
        console.log(nom + " Nombre valido!!!");
        return true;
    }
    else{
        alert(nom + " Nombre NO valido ya que no lo ingreso o esta mal escrito!!!");
        nombre.focus();  //me redirecciona para cargar de nuevo el nombre
        return false;
    }
}

const validarTelefono = () => {
    console.log("Validando telefono!!!");

    let tel = telefono.value.trim();
    let exprRegTel = new RegExp("^[0-9]+$");   //expresion regular para solo numeros

    if(tel != null && tel != "" && exprRegTel.test(tel)==true){
        console.log(" Telefono Valido!!!");
        return true;
    }
    else{
        alert("Telefono No valido!!!");
        telefono.focus();
        return false;
    }
}

const validarCorreo = () => {
    console.log("Validando correo!!!");

    let corr = correo.value.trim();
    //validar correo: ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+(?:\.[a-zA-Z0-9-]+)*$
    //validad contraseña ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$
    let exprRegCorreo = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"); //validacion de correo  (creo que funciona para todos los casos)

    if(corr != null && corr != "" && exprRegCorreo.test(corr)==true){
        console.log("Correo valido!!!");
        return true;
    }
    else{
        alert("Correo No valido!!!");
        correo.focus();
        return false;
    }
}

const validarMensaje = () => {
    console.log("Validando Mensaje!!!");

    let mens = mensaje.value.trim();
    let exprRegMens = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");  //solo letras

    if(mens != null && mens != "" && exprRegMens.test(mens)==true){
        console.log("Mensaje Valido!!!");
        return true;
    }
    else{
        alert("Mensaje no valido!!!");
        mensaje.focus();
        return false;
    }
}

/*
const validarInformacionContacto = (e) => {
    //e.preventDefault();  //evita que se ejecute lo que viene por defecto en el navegador   //cancela la accion que tenga por default el elemento (en este caso el btnEnviar)  --> en este caso va a evitar que se envie el formulario
    //e.stopPropagation();  //metodo que evita que se llame a la propagacion del mismo evento, propagacion significa burbujear hasta elementos principales o capturar hasta elementos secundarios

    console.log("Aqui por comenzar a validar!!!");

    /*
    validarNombre();
    validarTelefono();
    validarCorreo();
    validarMensaje();


   //para corregir el tema del focus realizamos:
    if(validarNombre() == true){
        validarNombre();
        if(validarTelefono() == true){
            validarTelefono();
            if(validarCorreo() == true){
                if(validarMensaje()==true){
                    validarMensaje();
                }
            }
        }
    }

    return true;  //indica que se pueden enviar los datos del formulario al servidor
}
*/

const validarInformacionContacto = () => {
    //e.preventDefault();  //evita que se ejecute lo que viene por defecto en el navegador   //cancela la accion que tenga por default el elemento (en este caso el btnEnviar)  --> en este caso va a evitar que se envie el formulario
    //e.stopPropagation();  //metodo que evita que se llame a la propagacion del mismo evento, propagacion significa burbujear hasta elementos principales o capturar hasta elementos secundarios

    console.log("Aqui por comenzar a validar!!!");

    
    validarNombre();
    
    /*validarTelefono();
    validarCorreo();
    validarMensaje();
    */

   //para corregir el tema del focus realizamos:
   /*
    if(validarNombre() == true){
        validarNombre();
        if(validarTelefono() == true){
            validarTelefono();
            if(validarCorreo() == true){
                if(validarMensaje()==true){
                    validarCorreo();
                    return true;
                }
            }
        }
    }*/
}

//btnEnviar.addEventListener("click", validarInformacionContacto);

/*
Ya se realiza la validacion del formulario pero ahora tengo que ver como hacer que se cumplan las validaciones
antes de que se envie el formulario al servidor.
*/

const formulario = document.getElementById("formulario");

const enviarFormulario = (e) => {
    e.preventDefault();

    console.log("Estoy por enviar el formulario!!!");

    let datos = new FormData(formulario);

    console.log(datos);
    //console.log(datos.get('nombre'));
    //console.log(datos.get('email'));

    validarInformacionContacto();

    //enviamos al informacion de nuestro formulario a un archivo php 
    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json)
        .then(data => {
            console.log(data)

        }).catch(error => console.log('error ', error))

}

formulario.addEventListener('submit', enviarFormulario);
