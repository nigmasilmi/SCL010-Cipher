"use strict";
let cifrado = '';
let descifrado = '';
let string = '';
let offsetInput = '';


  const ejecutaCifrado = () =>{
     
        document.getElementById('textoCifrado').innerHTML = '';
        //rescatamos el valor del input ingresado por el usuario y lo asignamos a la variable string
        string = document.getElementById('mensajeInputId').value;
        console.log('esto es string: ' + string);
        //rescatamos el valor del offset seleccionado por el usuario y lo asignamos a la variable
        offsetInput = parseInt(document.getElementById('offsetInput').value);
        console.log('esto es offsetInput: ' + offsetInput);
        cifrado = cipher.encode(offsetInput, string);
        console.log("esto es cifrado: " + cifrado); 
        console.log('esto es lo que está en el id textoCifrado antes de jugar con su inner: (' + document.getElementById('textoCifrado').innerHTML + ')');
        document.getElementById('textoCifrado').innerHTML = cifrado;
        
    };


    const limpiar = ()=>{
        console.log('comenzando a limpiar');
        document.getElementById('mensajeInputId').value = '';
        console.log(typeof(document.getElementById('mensajeInputId').value));
        document.getElementById('textoCifrado').innerHTML = '';
        document.getElementById('textoDescifrado').innerHTML = '';

    };

    let ejecutaDescifrado = () =>{
     
        document.getElementById('textoDescifrado').innerHTML = '';
        //rescatamos el valor cifrado
        string = document.getElementById('textoCifrado').value;
        console.log('esto es string: ' + string);
        //rescatamos el valor del offset alojado en la variable global offsetInput
        console.log('esto es offsetInput: ' + offsetInput);
        descifrado = cipher.decode(offsetInput, string);
        console.log("esto es descifrado: " + descifrado); 
        console.log('esto es lo que está en el id textoCifrado antes de jugar con su inner: (' + document.getElementById('textoCifrado').innerHTML + ')');
        document.getElementById('textoDescifrado').innerHTML = descifrado;
        
    };





