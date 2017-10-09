function encriptado(mensaje,arr,valorFijo){
    //debugger;
    for(var i=0;i<arr.length;i++){
       var valorASCII=mensaje.charCodeAt(i);
       var codigoASCIILetra=(valorASCII-65+valorFijo)%26+65;
       var letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
       arr.splice(i,1,letraAlfabetoEncriptada);
    }
    return alert(arr.join(""));

}


    var mensaje = prompt("Ingrese frase").toLocaleUpperCase();
    var fraseArray = mensaje.split("");
    encriptado(mensaje,fraseArray,33);
