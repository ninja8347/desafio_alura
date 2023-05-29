
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

    var simbolos=text1.charCodeAt();

    console.log(simbolos);
    
    if(text1 !=""){

        if (text1 == text1.toUpperCase()){

            var color= document.getElementById("nota");
            color.style.color="red";
        }
        else{
            buscar(text1);

            var color= document.getElementById("nota");
            color.style.color="black";

            respuesta=false;
            visible(respuesta);
    
            informacion=true;
            return informacion;
        }
    }
    else{
        alert("DEBES AGREGAR DATOS");
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
    
            console.log(text2);
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
