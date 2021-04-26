function cadenaP(palabra){

    var palindromo = "";
    let arr = Array(5);
    longPalabra = palabra.length;
    sinEsPalabra = palabra.replace(/\s+/g,'');
    arr[2] = sinEsPalabra.length;

    //Recorro la palabra
    for(var i=0;i<arr[2];i++){
        letra = sinEsPalabra.charAt(arr[2]-1-i);
        palindromo = palindromo + letra;
    }

    // 1 verifico si es palindromo //
    if(sinEsPalabra === palindromo){
        arr[0] = "Si es palindromo";
    }
    else{ 
         arr[0] = "No es palindromo";
    }
    
    // 2 verifico el numero de palabras
    arr[1] = longPalabra - arr[2]+1;
    
    // 3 cuenta el numero de letras sin espacios "ya hecho en arr[2]"

    // 4 cuenta el numero de vocales
    arr[3] = longPalabra - palabra.replace(/[aeiouAEIOU]/g,'').length;

    // 5 cuenta el numero de consonantes
    arr[4] = palabra.replace(/[aeiouAEIOU]/g,'').replace(/\s+/g,'').length;
    return arr;

}

module.exports.cadenaP = cadenaP;