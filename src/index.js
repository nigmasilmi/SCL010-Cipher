
let aCifrar = '';
let offset = '';
let cifrado = '';
let aDescifrar = '';
let descifrado = '';




  const ejecutaCifrado = () =>{
        'use strict';
        //toma el texto que ingresa el usuario
        aCifrar = document.getElementById('mensajeInputId').value;
        //probamos que lo esté trayendo
        console.log('esto es el texto que viene del input del usuario ' + '[' + aCifrar + ']');
        //toma el valor del offset que escogió el usuario
        offset = parseInt(document.getElementById('offsetInput').value);
        //probamos que lo esté trayendo
        console.log('esto es el valor del offset que ha escogido el usuario: ' + '[' + offset + ']');
        //ejecutamos la funcion encode con los valores ingresados y escogidos
        cifrado = window.cipher.encode(offset, aCifrar);
        //convertimos el valor cifrado a ser el innerHTML del espacio destinado para ello
        document.getElementById('textoCifrado').innerHTML = cifrado;
        return aCifrar;
    };


    const limpiar = ()=>{
        //renueva el innerHTML de los campos de input
        document.getElementById('mensajeInputId').value = '';
        //y además reinicia la variable contenida en cifrado
        aCifrar = '';
        //renueva el innerHTML del campo donde se muestra el resultado del cifrado
        document.getElementById('textoCifrado').innerHTML = '';
        //y además reinicia la variable contenida en cifrado
        cifrado = '';
        //probamos que lo esté haciendo
        console.log('esto es el texto que está alojado ahora en la variable aCifrar ' + '[' + aCifrar + ']');

    };

    let ejecutaDescifrado = () =>{
          /*condicionamos qué hacer si el valor a decodificar ya fue ingresado previamente a)) o si ha sido ingresado
  recientemente por el usuario b))*/
  //a))
        if(aCifrar){
         //tomamos el texto cifrado
            aDescifrar = document.getElementById('textoCifrado').value;
         //tomamos el valor del offset vigente
            offset = parseInt(document.getElementById('offsetInput').value);
         //ejecutamos la función decode con los valores offset y aDescifrar
            descifrado = window.cipher.decode(aDescifrar, offset);
         //renueva el innerHTML del campo donde se muestra el resultado del descifrado
             document.getElementById('textoDescifrado').innerHTML = descifrado ;
         }else{
             //tomamos el valor en el campo de descifrar
             let aDescifrarIngresado = document.getElementById('textoDescifrado').innerHTML;
             //ejecutamos la función decode con los argumentos correspondientes
             descifrado = window.cipher.decode(aDescifrarIngresado, offset);
             
         }
        return aDescifrar;
    };





