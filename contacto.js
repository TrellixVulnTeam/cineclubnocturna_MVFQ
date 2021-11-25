//Almacenar datos de contacto - DOM

//Tuve que agregar un preventDefault porque el botón de enviar me redireccionaba solo y no me imprimía por consola

document.getElementById("botoncito").addEventListener("reset", function(event){
    event.preventDefault()
  });



/* Al no tener login, voy a aplicar los conceptos de DOM a la página de Contacto, capturando
los datos y el mensaje que deja el seguidor, para de esa manera contactarlo en el futuro. 

Al hacer click ENVIAR, en ese evento almaceno el value de todos los datos que me proporcionó, envío 
un alert de que se envío la consulta correctamente y "guardo" sus datos en un array. */

function contactar(){

    let nombre = document.getElementById("name");
    let email = document.getElementById ("email");
    let tel = document.getElementById ("tel");
    let mensaje =document.getElementById ("mensaje")
    
    alert("Mensaje enviado")

    let contactoGuardado = []

    contactoGuardado.push(nombre.value)
    contactoGuardado.push(email.value)
    contactoGuardado.push(tel.value)
    contactoGuardado.push(mensaje.value)

    console.log(contactoGuardado)
    
}

