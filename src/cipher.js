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
    /* aplicamos la ecuación del cifrado César para codificar cada caracter */
    let encodedPhrase = '';
    let encodedAscii = '';
    for (let m = 0; m < strInputInAscii.length; m++) {
      encodedAscii = (strInputInAscii[m] - 65 + offsetInput) % 26 + 65;
      encodedPhrase += String.fromCharCode(encodedAscii);
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
    /* aplicamos la ecuación del cifrado César en reversa para descodificar cada caracter */

    for (let m = 0; m < toDecipher.length; m++) {
      decodedAscii = (toDecipher.charCodeAt(m) + 65 - offsetInput) % 26 + 65;
      decodedPhrase += String.fromCharCode(decodedAscii);
    }
    return decodedPhrase;
  }
};
