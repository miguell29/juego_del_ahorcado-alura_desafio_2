//*********** banco de palabras************//
var palabras = ["ARGENTINA", "BOLIVIA", "BRAZIL", "CHILE", "COLOMBIA", "PERU", "URUGUAY", "PARAGUAY", "MEXICO", "CANADA"];
var ABC=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var letrasUsadas=[];

/********************************Sonido *****************************/

var sonidoActivado=true;
var clickBoton=new Audio("../audio/boton-click.mp3");
var clickKey=new Audio("../audio/press-key.wav");
var ganaste= new Audio("../audio/win.wav");
var perdiste = new Audio("../audio/game-over.wav");


document.getElementById("img-sonido").addEventListener("click",function(){
    sonidoActivado=!sonidoActivado;
    this.classList.add("invisible")
    document.getElementById("img-mute").classList.remove("invisible");
})
document.getElementById("img-mute").addEventListener("click",function(){
    sonidoActivado=!sonidoActivado;
    this.classList.add("invisible")
    document.getElementById("img-sonido").classList.remove("invisible");
})

function audioBoton(){
    if(sonidoActivado){
        clickBoton.play();
    }
}
function audioTecla(){
    if(sonidoActivado){
        clickKey.play();
    }
}


//pantalla inicial//
lienso.classList.add("invisible");  //EN EL INICIO NO SE MUESTRA EL CANVAS//
document.getElementById("botones-juego").classList.add("invisible");
document.getElementById("input-nueva-palabra").classList.add("invisible");
document.getElementById("h2").classList.add("invisible");
document.getElementById("Agregar-palabra").classList.add("invisible");
document.getElementById("cancelar").classList.add("invisible");
document.getElementById("img-mute").classList.add("invisible");
document.getElementById("win").classList.add("invisible");
document.getElementById("fin").classList.add("invisible");
function mostrarPantallaInicial(){
    pantallaInicial.classList.remove("invisible");
}

function ocultarPantallaInicial(){
    pantallaInicial.classList.add("invisible");
}


//************* Capturas de eventos del DOM**************//
var listaDeCaracteres = document.getElementById("lista-caracteres");
var listaDeRenglones = document.getElementById("lista-renglones");

var pantallaInicial = document.getElementById("pantalla-inicial");
var botonDeInicio = document.getElementById("iniciar-juego");
var agregarPalabra =document.getElementById("nueva-palabra");
var inputPalabra = document.getElementById("input-nueva-palabra");


//variables globales que se actualizaran con mas frecuencia//


//palabra elegida//
var palabra
//errores cometidos//
var fallas = 0;
var aciertos = 0;
//letra a evaluar//
var letra;
//valor booleano que devuelve si la letra pertenece a la palabra secreta//
var valor;
//almacenar las letras correctas
var letrasCorrectas = [];
var posicion = [];

//stop detiene el juego

var detener=false;




//************************** Funciones *****************************//
function palabraAzar() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
}

function mostrarRenglones(texto) {
    for (var i = 0; i < texto.length; i++) {
        var parrafoUno = document.createElement("p");
        var parrafoDos = document.createElement("p");
        var elementoLista = document.createElement("li");
        var vacio = document.createTextNode("*")
        var renglones = document.createTextNode("______");

        parrafoUno.appendChild(vacio);
        parrafoUno.setAttribute("id", i);
        parrafoDos.appendChild(renglones);
        elementoLista.appendChild(parrafoUno);
        elementoLista.appendChild(parrafoDos);
        listaDeRenglones.appendChild(elementoLista);
    }
}

function deletrear() {
    palabra = palabra.toUpperCase();
    letrasCorrectas = palabra.split("");
    palabra = palabra.split("");
}

function mostrarLetrasIncorrectas() {
    if(!(valor)){
        var elementoLista = document.createElement("li");
        var nuevoContenido = document.createTextNode(letra);
        elementoLista.appendChild(nuevoContenido);
        listaDeCaracteres.appendChild(elementoLista);
    }
}

function compararLetra() {/* PARA SABER SI LA LETRA PRESIONADA ESTA EN LA PALABRA SECRETA*/
    valor = false;
    posicion = [];
    for (var i = 0; i < palabra.length; i++) {
        if (letra === palabra[i]) {
            valor = true;
            aciertos++;
            posicion.push(i);
        }
    }
}

function contadorFallas() {
    if (!valor) {
        fallas += 1
    }
}

function mostrarLetraCorrecta() {
    if (valor) {
        for (var i = 0; i < posicion.length; i++) {
            parrafoUno = document.getElementById(posicion[i]);
            parrafoUno.innerHTML = letra;
        }
    }
}

function victoria() {
    if (aciertos===palabra.length){
        document.getElementById("win").classList.remove("invisible");
        if(sonidoActivado){
            ganaste.play();
        }
        detener=true;
    }
}

function derrota() {
    if(fallas===6){
        document.getElementById("fin").classList.remove("invisible");
        if(sonidoActivado){
            perdiste.play();
        }
        detener=true;
    }
}

/*************************SEGUNDA PANTALLA**********************/
function mostrarSegundaPantalla(){
    document.getElementById("h2").classList.remove("invisible");
    document.getElementById("input-nueva-palabra").classList.remove("invisible");
    document.getElementById("Agregar-palabra").classList.remove("invisible");
    document.getElementById("cancelar").classList.remove("invisible");
    document.getElementById("win").classList.add("invisible");
    document.getElementById("fin").classList.add("invisible");
}

function ocultarSegundaPantalla(){
    document.getElementById("h2").classList.add("invisible");
    document.getElementById("input-nueva-palabra").classList.add("invisible");
    document.getElementById("Agregar-palabra").classList.add("invisible");
    document.getElementById("cancelar").classList.add("invisible");
}


agregarPalabra.addEventListener("click",function(){
    mostrarSegundaPantalla();
    ocultarPantallaInicial();
    audioBoton()
})

document.getElementById("Agregar-palabra").addEventListener("click",function(){
    var input=document.getElementById("input-nueva-palabra")
    repetida = false;
    for(var i=0; i<palabras.length; i++){
        if(input.value.toUpperCase()===palabras[i]){
            repetida=true;
        }
    }
    if(!repetida){
        palabras.push(input.value.toUpperCase());
    }

    iniciarJuego();
    ocultarSegundaPantalla();
    audioBoton();
})

document.getElementById("cancelar").addEventListener("click",function(){
    mostrarPantallaInicial();
    ocultarSegundaPantalla();
    audioBoton();
})

document.getElementById("juego-nuevo").addEventListener("click",function(event){
    event.preventDefault();
    
    limpiarCanvas();
    iniciarJuego();
    audioBoton();
})

document.getElementById("terminar-juego").addEventListener("click",function(){
    audioBoton();
    fallas=0;
    listaDeCaracteres.innerHTML="";
    listaDeRenglones.innerHTML="";
    letrasUsadas=[];
    limpiarCanvas();
    lienso.classList.add("invisible");
    document.getElementById("botones-juego").classList.add("invisible");
    document.getElementById("win").classList.add("invisible");
    document.getElementById("fin").classList.add("invisible");
    mostrarPantallaInicial();
})

//****************scrips que hacen que comience el juego**********************
function iniciarJuego(){
    pantallaInicial.classList.add("invisible")
    lienso.classList.remove("invisible")
    document.getElementById("botones-juego").classList.remove("invisible");
    document.getElementById("win").classList.add("invisible");
    document.getElementById("fin").classList.add("invisible");
    listaDeCaracteres.innerHTML="";
    listaDeRenglones.innerHTML="";
    letrasUsadas=[];
    fallas=0;
    aciertos=0;
    detener=false;
    ahorcado();
    palabraAzar();
    mostrarRenglones(palabra);
    deletrear();
    detectKey();
    audioBoton();
}
botonDeInicio.addEventListener("click", function (event) {
    event.preventDefault()
    iniciarJuego()
})

    /*****************************CAPTURA DEL TECLADO *****************************/
function detectKey() {
    window.addEventListener("keypress", function (event) {
        if(!detener){
            if(ABC.includes(event.key.toUpperCase())){
                if(! letrasUsadas.includes(event.key.toUpperCase())){
                    audioTecla()
                    letra = event.key.toUpperCase();
                    compararLetra();
                    contadorFallas();
                    mostrarLetraCorrecta();
                    mostrarLetrasIncorrectas();
                    ahorcado();
                    victoria();
                    derrota();
                    letrasUsadas.push(event.key.toUpperCase());
                }
                
            }
        }
        
        
    });
}
