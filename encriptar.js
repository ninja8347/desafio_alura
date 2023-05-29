
var text1="";
var text2="";

var respuesta=true;

var informacion=false;

function visible(respuesta){           
                                        

    if(respuesta==true){

        document.getElementById("bloque7").style.display = "block";
        document.getElementById("bloque8").style.display = "none";
        document.getElementById("bloque9").style.display = "block";
    }
    if(respuesta==false){
        document.getElementById("bloque7").style.display = "none";
        document.getElementById("bloque8").style.display = "block";
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



function encriptar2(){
    text1 = document.getElementById("area1").value;
    var validar=text1.length;

    if(validar >0){
        text1 = document.getElementById("area1").value;
        var validar=text1.length;
    
        for(var x = 0; x < text1.length; x++) {
            var caracter=text1.charAt(x);
            var caracter2= caracter.charCodeAt();
            
            console.log(caracter2);

            if(caracter2 >=97 && caracter2 <= 123){
                console.log("NO VALIDO: " + caracter2);

                var advertencia= document.getElementById("nota");
                advertencia.style.color="red";
                break;
                
            }else{
                var color= document.getElementById("nota");
                color.style.color="black";


                respuesta=false;
                visible(respuesta);
        
            }
        }
    }
    else{
        alert("¡¡PRIMERO DEBES AGREGAR DATOS!!");
    }
    
}

function desencriptar2(){
    text1 = document.getElementById("area1").value; 
    text2 = document.getElementById("area2").value; 

    if(informacion==true){

        if(text2 != text1){
            document.getElementById("area2").innerHTML=text1;
    
            respuesta=false;
            visible(respuesta);

        }
    
        if(text2==text1 && text1 != "" && text2 != ""){         //-------->
            alert("¡¡EL TEXTO YA ESTA DESENCRIPATDO.!!");
    
            respuesta=false;
            visible(respuesta);
        }
        
        
        if(text2 !="" && text1== ""){
            alert("PRIMERO DEBES INGRESAR DATOS y ENCRIPTAR 2.");
            informacion=false;

        }
        
        if(text2=="" && text1 != ""){       //-------->
            alert(" DEBES ECRIPTAR PRIMERO");
    
            respuesta=true;
            visible(respuesta); 
        }


    }else{
        alert("PRIMERO DEBES INGRESAR DATOS CORRECTOS y ENCRIPTAR.");
    }

}

function copiar2(){
    var texto_copiado = document.getElementById('area2').innerHTML;         //ALAMACENA LA INFO//

    if(texto_copiado == ""){
        alert("NADA PARA COPIAR");
    }
    else{
        navigator.clipboard.writeText(texto_copiado).then(() => { alert("copiado")});       //COPIA Y MANDFA ALERTA//
    }
}
