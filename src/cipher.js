window.cipher = {
  encode: (offset, string) => {
    const textoACifrar = string;
    const toAddNumberInput = offset ;
    //verificar si es viable usar let
    var toAddNumber = null;
    /* Vamos a generar un número entre 1 y 25 ya que el rango A-Z son 26 números (ascii 065-090)
    tomando como argumento el valor del offset que ingrese el usuario
    si el valor que ingresa el usuario está entre 1 y 25 */
    if(toAddNumberInput >=1 && toAddNumberInput <=25){
        toAddNumber = toAddNumberInput;
    }else{
        toAddNumber = Math.floor(toAddNumberInput / 25 + toAddNumberInput % 25);
    }
    if(toAddNumber >= 25){
       do{
        var toAddNumber2 = Math.floor(toAddNumber / 25 + offset % 25);   
       }while ( (!toAddNumber2 >=1) && (!toAddNumber2 <=25));
       //cuando salga del while, es decir que ya nuestra condición se cumpla, la asignamos a la variable toAddNumber
        toAddNumber = toAddNumber2;
    }
  
    //recorremos el texto y a cada caracter,
    for(let i=0; i<textoACifrar.length; i++){
        //ciframos el código ascii, lo parseamos a String y lo concatenamos con la cadena textoCifrado
        textoCifrado += String.fromCharCode(textoACifrar.charCodeAt([i])+toAddNumber);
        
    }   
    return(textoCifrado);   
    
  },
  
  decode: (historiaCifrada, toAddNumber) => {
   //creamos una variable donde alojar el texto descifrado
    let textoRevertido = '';
   //tomamos el texto cifrado, lo recorremos y revertimos el valor ascii
    for(let i=0; i<historiaCifrada.length; i++){
        console.log('historiaCifrada['+ i + ']' + historiaCifrada[i]);
         //extraemos el valor ascii de cada caracter cifrado
        let valorCifrado =  historiaCifrada.charCodeAt(i);
        //revertimos el valor restando el offset sumado
        let valorCifradoRevertido = historiaCifrada.charCodeAt(i)-toAddNumber;
        //convertimos ese valor ascii en el caracter correspondiente
        let caracterRevertido = String.fromCharCode(valorCifradoRevertido);
        //concatenamos el caracer revertido al textoRevertido
        textoRevertido += caracterRevertido;
   }
   return textoRevertido;
  }
};
