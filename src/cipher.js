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
      if (strInputInAscii[m] >= 65 && strInputInAscii[m] <= 90) {
        while (offsetInput > 26  && offsetInput !== 33) {
          offsetInput = Math.floor(offsetInput / 27 + offsetInput % 27);
        }
        encodedAscii = (strInputInAscii[m] - 65 + offsetInput) % 26 + 65;
        encodedPhrase += String.fromCharCode(encodedAscii);

        // Caso Minúsculas: aplicamos la ecuación del cifrado César para codificar cada caracter */

      } else if (strInputInAscii[m] >= 97 && strInputInAscii[m] <= 122) {
        while (offsetInput > 26  && offsetInput !== 33) {
          offsetInput = Math.floor(offsetInput / 27 + offsetInput % 27);
        }
        encodedAscii = (strInputInAscii[m] - 97 + offsetInput) % 26 + 97;
        encodedPhrase += String.fromCharCode(encodedAscii);
        //Caracteres especiales

      } else if (strInputInAscii[m] >= 32 && strInputInAscii[m] <= 64) {
        if(strInputInAscii[m]==32){
          encodedAscii = 32;
        }
        while (offsetInput > 32  && offsetInput !== 33 && offsetInput !== 32) {
          offsetInput = Math.floor(offsetInput / 33 + offsetInput % 33);
        }
        encodedAscii = (strInputInAscii[m] - 32 + offsetInput) % 33 + 32;
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

    //obtenemos los valores ascii del texto cifrado rescatado desde el DOM almacenándolo en un array
    for (let i = 0; i < toDecipher.length; i++) {
      descipherArr.push(toDecipher[i].charCodeAt());
    }
    for (let m = 0; m < descipherArr.length; m++) {

      //Caso Mayúsculas: aplicamos la ecuación del cifrado César en reversa para decodificar cada caracter 
      if (descipherArr[m] >= 65 && descipherArr[m] <= 90) {
        while (offsetInput > 26  && offsetInput !== 33) {
          offsetInput = Math.floor(offsetInput / 27 + offsetInput % 27);
        }
        decodedAscii = (descipherArr[m] + 65 - offsetInput) % 26 + 65;
        decodedPhrase += String.fromCharCode(decodedAscii);


        // Caso Minúsculas: aplicamos la ecuación del cifrado César en reversa para decodificar cada caracter 
      } else if (descipherArr[m] >= 97 && descipherArr[m] <= 122) {
        while (offsetInput > 26 && offsetInput !== 33) {
          offsetInput = Math.floor(offsetInput / 27 + offsetInput % 27);
        }
        decodedAscii = (descipherArr[m] + 97 + offsetInput) % 26 + 97;
        decodedPhrase += String.fromCharCode(decodedAscii);

         
        // Caso caracteres especiales con códgo ascii de 32-64: 
      } else if (descipherArr[m] >= 32 && descipherArr[m] <= 64) {
       
        while (offsetInput > 33  && offsetInput !== 33 && offsetInput !== 32)  {
          offsetInput = Math.floor(offsetInput / 33 + offsetInput % 33);
        }

        decodedAscii = (descipherArr[m] + 32 - offsetInput) % 33 + 34;
        if(descipherArr[m]==32){
          decodedAscii = 32;
        }
        decodedPhrase += String.fromCharCode(decodedAscii);
      }
    }
    return decodedPhrase;
  }

};
