const formulario = document.getElementById("formulario"); //traemos todo el formulario ya que yo le voy a asociar a todo el formulario un evento

//traemos todos los campos del formulario para poder realizar las validaciones correspondientes:
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const validarNombre = () => {
    //console.log("validando el nombre!!!");

    let nom = nombre.value.trim();  //elimino los espacios en blanco de la cadena
    let exprRegNombre = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");  //validacion para nombres y apellidos

    if(nom != null && nom != "" && exprRegNombre.test(nom)==true) {   // nom.length > 4 --> este de controlar que ingrese nombre de un cierto tamaño si funciona 
        //console.log(nom + " Nombre valido!!!");
        return true;
    }
    else{
        alert(nom + " Nombre NO valido ya que no lo ingreso o esta mal escrito!!!");
        nombre.focus();  //me redirecciona para cargar de nuevo el nombre
        return false;
    }
}

const validarTelefono = () => {
    //console.log("Validando telefono!!!");

    let tel = telefono.value.trim();
    let exprRegTel = new RegExp("^[0-9]+$");   //expresion regular para solo numeros

    if(tel != null && tel != "" && exprRegTel.test(tel)==true){
        //console.log(" Telefono Valido!!!");
        return true;
    }
    else{
        alert("Telefono No valido!!!");
        telefono.focus();
        return false;
    }
}

const validarCorreo = () => {
    //console.log("Validando correo!!!");

    let corr = correo.value.trim();
    let exprRegCorreo = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"); //validacion de correo  (creo que funciona para todos los casos)

    if(corr != null && corr != "" && exprRegCorreo.test(corr)==true){
        //console.log("Correo valido!!!");
        return true;
    }
    else{
        alert("Correo No valido!!!");
        correo.focus();
        return false;
    }
}

const validarMensaje = () => {
    //console.log("Validando Mensaje!!!");

    let mens = mensaje.value.trim();
    let exprRegMens = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");  //solo letras

    if(mens != null && mens != "" && exprRegMens.test(mens)==true){
        //console.log("Mensaje Valido!!!");
        return true;
    }
    else{
        alert("Mensaje no valido!!!");
        mensaje.focus();
        return false;
    }
}

const validarFormulario = (e) => {
    e.preventDefault();  //detemos el submit (el envio del formulario) ya que nosotros vamos a procesar este formulario con JS

    if(validarNombre()==true && validarTelefono()==true && validarCorreo()==true){ //&& validarMensaje()==true
        //enviamos al informacion de nuestro formulario a un archivo php 
        let datos = new FormData(formulario);  //obtengo los datos del formulario
        //para ver los datos:
        console.log(datos);
        console.log(datos.get("nombre"));
        console.log(datos.get("telefono"));
        /*
        fetch('./post.php', {
            method: 'post',
            headers: { // cabeceras HTTP
                // vamos a enviar los datos en formato JSON
                'Content-Type': 'application/json'
            },
            body: datos
        })
            .then(res => res.json())  //nosotros recibimos una respuesta y esa respuesta viene en formato json 
            .then(data => {           //y en esta promesa nos llegaban los datos 
                console.log(data)
            }
        ).catch(e)(
            console.log("El error es: "+e)
        );
        */
        formulario.submit();
        //alert("Muchas gracias, su mensaje fue recibido correctamente y sera respondido lo mas antes posible");
        //Swal.fire('Muchas gracias, su mensaje fue recibido correctamente y sera respondido lo mas antes posible');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Muchas gracias, su mensaje fue recibido correctamente y sera respondido lo mas antes posible',
            showConfirmButton: false,
            timer: 9500
          })

        //alert("Formulario enviado!!!!");
    }
    else{
        alert("Datos incorrectos, revise, ingreselos y envielos nuevamente!!!");
    }

    return;
}

formulario.addEventListener('submit', validarFormulario); //agregamos un evento al formulario, es decir, va a detectar el evento del submit cuando se precione el bton enviar