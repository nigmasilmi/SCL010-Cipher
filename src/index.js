let toCipher = '';
let offset = '';
let encodedText = '';
let decoded = '';
/////////FUNCIÓN QUE TOMA EL ELEMENTO DEL DOM PARA SER CIFRADO/////////////
//asociamos la variable cifraBtn a el elemento botón cuyo Id es 'ejecutaCifrado'
const cifraBtn = document.getElementById('ejecutaCifrado');
//asociamos la variable cifraBtn con un evento del tipo click que gatilla la función anónima
cifraBtn.addEventListener('click', () => {
  toCipher = document.getElementById('mensajeInputId').value;
  offset = document.getElementById('offsetInput').value;
  encodedText = window.cipher.encode(offset, toCipher);
  document.getElementById('textoCifrado').value = encodedText;
});

/////////FUNCIÓN QUE TOMA EL ELEMENTO DEL DOM PARA SER DESCIFRADO/////////////
//asociamos la variable descifraBtn a el elemento botón cuyo Id es 'ejecutaDescifrado'
const descifraBtn = document.getElementById('ejecutaDescifrado');
//asociamos la variable descifraBtn con un evento del tipo click que gatilla la función anónima

descifraBtn.addEventListener('click', () => {
 
    //tomamos el texto cifrado que se encuentra en el elemento cuyo Id es "textoCifrado"
    let aDescifrar = document.getElementById('textoCifrado').value;
    //tomamos el valor del offset vigente
    offset = parseInt(document.getElementById('offsetInput').value);
    //ejecutamos la función decode con los valores offset y aDescifrar
    decoded = window.cipher.decode(offset, aDescifrar);
    //renueva el innerHTML del campo donde se muestra el resultado del descifrado
    document.getElementById('textoDescifrado').value = decoded;
  
});

/////////FUNCIÓN QUE LIMPIA LOS CAMPOS DE INGRESO Y RESULTADOS/////////////
//asociamos la variable limpiaBTn al elemento botón cuyo Id es 'limpiar'
const limpiaBTn = document.getElementById('limpiar');
//asociamos la variable limpiaBtn con un evento del tipo click que gatilla la función anónima
limpiaBTn.addEventListener('click', () => {
  //renueva el innerHTML de los campos de input
  document.getElementById('mensajeInputId').value = '';
  //y además reinicia la variable asociada a "aCifrar"
  toCipher = '';
  //renueva el innerHTML del campo donde se muestra el resultado del cifrado
  document.getElementById('textoCifrado').value = '';
  //y además reinicia la variable asociada a "cifrado"
  encodedText = '';
  //renueva el innerHTML del campo donde se muestra el resultado del descifrado
  document.getElementById('textoDescifrado').value = '';
  //y además reinicia la variable asociada a "aDescifrar"
  decoded = '';
  document.getElementById('offsetInput').value = null;
  offset = null;

});
