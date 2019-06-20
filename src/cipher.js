window.cipher = {
  encode: (offset, string) => {
    let textoCifrado = '';
    let toAddNumber2 = null;
    let toAddNumberInput = offset;
    //verificar si es viable usar let
    let toAddNumber = null;
    /* Vamos a generar un número entre 1 y 25 ya que el rango A-Z son 26 números (ascii 065-090)
    tomando como argumento el valor del offset que ingrese el usuario
    si el valor que ingresa el usuario está entre 1 y 25 */
    if (toAddNumberInput >= 1 && toAddNumberInput <= 25) {
      toAddNumber = toAddNumberInput;
    } else {
      toAddNumber = Math.floor(toAddNumberInput / 25 + toAddNumberInput % 25);
    }
    if (toAddNumber >= 25) {
      do {
        toAddNumber2 = Math.floor(toAddNumber / 25 + offset % 25);
      } while ((!toAddNumber2 >= 1) && (!toAddNumber2 <= 25));
      //cuando salga del while, es decir que ya nuestra condición se cumpla, la asignamos a la variable toAddNumber
      toAddNumber = toAddNumber2;
    }

    //recorremos el texto y a cada caracter,
    //console.log(string);
    for (let i = 0; i < string.length; i++) {
      console.log('este es el string que está llegando a la función encode en cipher.js: ' + string);
      //ciframos el código ascii, lo parseamos a String y lo concatenamos con la cadena textoCifrado
      textoCifrado += String.fromCharCode(string.charCodeAt([i]) + toAddNumber);

    }
    console.log('esto es textoCifrado proveniente de la función encode:  ' + textoCifrado);
    return textoCifrado;


  },



  decode: (offset, string) => {
    let toAddNumber = offset;
    //rescatamos el valor de textoCifrado
    let historiaCifrada = string;
    //console.log('entra a la funcion decode');
    let textoRevertido = '';
    //tomamos el texto cifrado, lo recorremos y revertimos el valor ascii
    console.log('esto es la historia cifrada que llega a decode en cipher.js: ' + '[' + historiaCifrada + ']');
    for (let i = 0; i < historiaCifrada.length; i++) {
      // extraemos el valor ascii de cada caracter cifrado y revertimos el valor restando el offset sumado
      let valorCifradoRevertido = historiaCifrada.charCodeAt(i) - toAddNumber;
      //convertimos ese valor ascii en el caracter correspondiente
      let caracterRevertido = String.fromCharCode(valorCifradoRevertido);
      //concatenamos el caracer revertido al textoRevertido
      textoRevertido += caracterRevertido;
    }
    return textoRevertido;
  }
};
