//*********** banco de palabras************//
var palabras=["argentina","bolivia","brazil","chile","colombia","peru","uruguay","paraguay","mexico","canada"];

//************* Capturas de eventos del DOM**************//
var listaDeCaracteres=document.getElementById("lista-caracteres");
var pantallaInicial = document.getElementById("pantalla-inicial")
var botonDeInicio = document.getElementById("iniciar-juego");


            //variables globales que se actualizaran con mas frecuencia//


//palabra elegida//
var palabra
//vidas iniciales//
var vidas = 6;
//almacenar las letras correctas
var letrasCorrectas
//almacenar las letras incorrectas
var letrasIncorrectas

//************************** Funciones *****************************//
function palabraAzar(){
    palabra = palabras[Math.floor(Math.random()*palabras.length)]
    alert(palabra)
}

function deletrear(){
    palabra=palabra.toUpperCase()
    palabra=palabra.split("")
    alert(palabra)
}

function mostrarLetras(texto){
    for(var i=0; i<texto.length; i++){
    var elementoLista = document.createElement("li");
    var nuevoContenido= document.createTextNode(texto[i]);
    elementoLista.appendChild(nuevoContenido);
    listaDeCaracteres.appendChild(elementoLista);
    }
}

function validarEntradas(){

}



function victoria(){

}

function derrota(){

}


            //****************scrips que hacen que comience el juego**********************

botonDeInicio.addEventListener("click",function(event){
    event.preventDefault()
    alert("se presiono inicio");
    pantallaInicial.classList.add("invisible")
    lienso.classList.remove("invisible")
    ahorcado();
    palabraAzar();
    deletrear();
    mostrarLetras(palabra);

})
