
var text1="";
var text2="";

var respuesta=true;
var acceder=false;

function limpiar(){

    document.getElementById("area1").value = "";
}


function visible(respuesta){           
            
    if(respuesta==true){

        document.getElementById("bloque7").style.display = "block";
        document.getElementById("bloque8").style.display = "none";      //IMAGEN
        document.getElementById("bloque9").style.display = "block";
    }
    if(respuesta==false){
        document.getElementById("bloque7").style.display = "none";
        document.getElementById("bloque8").style.display = "block";     //TEXTAREA
        document.getElementById("bloque9").style.display = "none";
    }

}


visible(respuesta);


function buscar(cambio) {

    var codigo;
    codigo=cambio.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

    console.log(codigo)
    document.getElementById("area2").innerHTML=codigo;

}


var original;

function encriptar2(){
    text1 = document.getElementById("area1").value;

    if(text1.length > 0 ){

        var contador=0;

        for(var x = 0; x < text1.length; x++) {
            var caracter=text1.charAt(x);
            var caracter2=caracter.charCodeAt();
            
            console.log(caracter2);

            if(caracter2 >=97 && caracter2 <= 123){
                contador=contador +1;
            }
            else{
                contador=0;
                break;
            }
        }

        console.log(contador);

        if(contador>0){
            var color= document.getElementById("nota");
            color.style.color="black";
    
            respuesta=false;
            visible(respuesta);

            buscar(text1);
    
            original=text1;
            acceder=true;
        }
        else{

            console.log("NO VALIDO: " + caracter2);

            var advertencia= document.getElementById("nota");
            advertencia.style.color="red";



            visible(respuesta);
        }
    }
    else{
        alert("¡¡PRIMERO DEBES AGREGAR DATOS!!");
    }
}


function desencriptar2(){

    text1 = document.getElementById("area1").value;
    var validar1 =text1.length;

    text2 = document.getElementById("area2").value;
    var validar2=text2.length;

    //-------------------------------------------------------------->
    if(acceder==true){

        if(validar2==0 && validar1== 0){
            alert("DEBES AGREGAR DATOS Y DESPUES ENCRIPTAR.")
        }
        else{

            if(validar1>0 && validar2>0){
                if(text2 != text1){

                    document.getElementById("area2").innerHTML=original;
                    respuesta=false;
                    visible(respuesta);   /*  RESUELTO */
                }
                else{
                    alert("EL texto ya esta desencriptado 2.")
                }
            }

            if(validar1==0 && validar2>0){
                if(text2==original){
                    alert("EL TEXTO YA ESTA des-ENCRIPTADO 1");
                }
                else{
                    document.getElementById("area2").innerHTML=original;
                    respuesta=false;
                    visible(respuesta);   /*  RESUELTO */
                }
            }

            if(validar2==0 && validar1>0){
                document.getElementById("area2").innerHTML=original;
                respuesta=false;
                visible(respuesta);   /*  RESUELTO */
            }
        }
    }
    else{
        alert("DEBES ENCRIPTAR PRIMERO 1.");
    }
}

  //-------------------------------------------------------------->

function copiar2(){
    var texto_copiado = document.getElementById('area2').innerHTML;         //ALAMACENA LA INFO//

    if(texto_copiado == ""){
        alert("NADA PARA COPIAR");
    }
    else{
        navigator.clipboard.writeText(texto_copiado).then(() => { alert("copiado")});       //COPIA Y MANDFA ALERTA//
    }
}
