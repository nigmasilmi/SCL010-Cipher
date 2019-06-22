window.cipher = {
  encode: (offset, string) => {

    let offsetInput = offset;
    //convertimos el offset en un número entero
    offsetInput = parseInt(offsetInput);

    /*obtenemos los valores ascii del string rescatado desde el DOM ingresado previamente por el usuario
     almacenándolo en un array*/

    let strInputInAscii = [];
    for (let k = 0; k < string.length; k++) {
      strInputInAscii.push(string.charCodeAt(k));
    }
    let encodedPhrase = '';
    let encodedAscii = '';
    for (let m = 0; m < strInputInAscii.length; m++) {

     // Caso Mayúsculas: aplicamos la ecuación del cifrado César para codificar cada caracter 
      if (strInputInAscii[m] > 64 && strInputInAscii[m] < 91) {
        encodedAscii = (strInputInAscii[m] - 65 + offsetInput) % 26 + 65;
        encodedPhrase += String.fromCharCode(encodedAscii);

    // Caso Minúsculas: aplicamos la ecuación del cifrado César para codificar cada caracter */
      } else if (strInputInAscii[m] >= 97 && strInputInAscii[m] <= 122) {
        encodedAscii = (strInputInAscii[m] - 97 + offsetInput) % 26 + 97;
        encodedPhrase += String.fromCharCode(encodedAscii);

      }

    }
    return encodedPhrase;
    
  },

  decode: (offset, string) => {
    let offsetInput = offset;
    //convertimos el offset en un número entero
    offsetInput = parseInt(offsetInput);
    let toDecipher = string;
    let decodedPhrase = '';
    let decodedAscii = null;
    let descipherArr = [];
    let pruebaArray = [];

    //obtenemos los valores ascii del texto cifrado rescatado desde el DOM almacenándolo en un array
    for(let i=0; i<toDecipher.length; i++){
      descipherArr.push(toDecipher[i].charCodeAt());
    }
    for (let m = 0; m < descipherArr.length; m++) {

      //Caso Mayúsculas: aplicamos la ecuación del cifrado César en reversa para descodificar cada caracter 
      if (descipherArr[m] > 64 && descipherArr[m] < 91) {
        decodedAscii = (descipherArr[m] + 65 - offsetInput) % 26 + 65;
        decodedPhrase += String.fromCharCode(decodedAscii);

      // Caso Minúsculas: aplicamos la ecuación del cifrado César en reversa para descodificar cada caracter 
      } else if (descipherArr[m] >= 97 && descipherArr[m] <= 122) {
        decodedAscii = (descipherArr[m] + 97 + offsetInput) % 26 + 97;
        decodedPhrase += String.fromCharCode(decodedAscii);
        pruebaArray.push(decodedAscii);
      }
    }

    return decodedPhrase;
  }
 
};
