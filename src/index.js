let aCifrar = '';
let offset = '';
let cifrado = '';
let aDescifrar = '';
let descifrado = '';



/////////FUNCIÓN QUE TOMA EL ELEMENTO DEL DOM PARA SER CIFRADO/////////////
//asociamos la variable cifraBtn a el elemento botón cuyo Id es 'ejecutaCifrado'
const cifraBtn = document.getElementById('ejecutaCifrado');
//asociamos la variable cifraBtn con un evento del tipo click que gatilla la función anónima
cifraBtn.addEventListener('click', () => {
  'use strict';
  //toma el texto que ingresa el usuario
  aCifrar = document.getElementById('mensajeInputId').value;
  //probamos que lo esté trayendo
  console.log('esto es el texto que viene del input del usuario ' + '[' + aCifrar + ']');
  //toma el valor del offset que escogió el usuario
  offset = parseInt(document.getElementById('offsetInput').value);
  //console.log(typeof(offset));
  //console.log(offset);
  //validamos que el usuario ingrese un offset
  if (isNaN(offset)) {
    alert("Por favor ingresa el número de espacios para cifrar");
  } else {
    //probamos que lo esté trayendo
    console.log('esto es el valor del offset que ha escogido el usuario: ' + '[' + offset + ']');
    console.log(aCifrar);

    //ejecutamos la funcion encode con los valores ingresados y escogidos
    console.log('esto es lo que ingresa a la funcion en el index.js: ' + '[' + offset + ',' + aCifrar + ']');
    cifrado = window.cipher.encode(offset, aCifrar);
    //convertimos el valor cifrado a ser el innerHTML del espacio destinado para ello
    document.getElementById('textoCifrado').value = cifrado;
    //retornamos el valor aCifrar para que esté disponible por otra función que lo requiera
    return aCifrar;

  }

});

/////////FUNCIÓN QUE TOMA EL ELEMENTO DEL DOM PARA SER DESCIFRADO/////////////
//asociamos la variable descifraBtn a el elemento botón cuyo Id es 'ejecutaDescifrado'
const descifraBtn = document.getElementById('ejecutaDescifrado');
//asociamos la variable descifraBtn con un evento del tipo click que gatilla la función anónima

descifraBtn.addEventListener('click', () => {
  /*condicionamos qué hacer si el valor a decodificar ya fue ingresado previamente a)) o si ha sido ingresado
  recientemente por el usuario b))*/
  //a))
  if (aCifrar !== "") {
    //tomamos el texto cifrado que se encuentra elemento cuyo Id es "textoCifrado"
    aDescifrar = document.getElementById('textoCifrado').value;
    //tomamos el valor del offset vigente
    offset = parseInt(document.getElementById('offsetInput').value);
    //ejecutamos la función decode con los valores offset y aDescifrar
    descifrado = window.cipher.decode(offset, aDescifrar);
    //renueva el innerHTML del campo donde se muestra el resultado del descifrado
    document.getElementById('textoDescifrado').value = descifrado;
  } else {
    //tomamos el valor en el campo de descifrar
    let aDescifrarIngresado = document.getElementById('textoDescifrado').value;
    //ejecutamos la función decode con los argumentos correspondientes
    descifrado = window.cipher.decode(offset, aDescifrarIngresado);

  }
  return descifrado;
});

/////////FUNCIÓN QUE LIMPIA LOS CAMPOS DE INGRESO Y RESULTADOS/////////////
//asociamos la variable limpiaBTn al elemento botón cuyo Id es 'limpiar'
const limpiaBTn = document.getElementById('limpiar');
//asociamos la variable limpiaBtn con un evento del tipo click que gatilla la función anónima
limpiaBTn.addEventListener('click', () => {
  //renueva el innerHTML de los campos de input
  document.getElementById('mensajeInputId').value = '';
  //y además reinicia la variable asociada a "aCifrar"
  aCifrar = '';
  //renueva el innerHTML del campo donde se muestra el resultado del cifrado
  document.getElementById('textoCifrado').value = '';
  //y además reinicia la variable asociada a "cifrado"
  cifrado = '';
  //renueva el innerHTML del campo donde se muestra el resultado del descifrado
  document.getElementById('textoDescifrado').value = '';
  //y además reinicia la variable asociada a "aDescifrar"
  aDescifrar = '';

});
