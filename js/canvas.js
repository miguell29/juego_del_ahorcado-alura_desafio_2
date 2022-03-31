var lienso = document.getElementById("ahorcado");
var canvas = lienso.getContext("2d");


lienso.classList.add("invisible")  //EN EL INICIO NO SE MUESTRA EL CANVAS//




function ahorcado(){
    //base
   if(vidas === 6){
    canvas.beginPath();
    canvas.moveTo(0,503);
    canvas.lineTo(294,503);
    canvas.lineWidth = 5;
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(80.67,503);
    canvas.lineTo(80.67,148);
    canvas.lineTo(831.42-573,148);
    canvas.lineTo(831.42-573,197.5)
    canvas.stroke();
   } 
//cabeza
   if(vidas === 5){
    canvas.beginPath();
    canvas.arc(258.42,229,31.5,0,Math.PI * 2);
    canvas.stroke();
   }
//brazao derecho
   if (vidas === 4){
    canvas.beginPath();
    canvas.moveTo(258,260.5);
    canvas.lineTo(293.52,319.48);
    canvas.stroke();
   }
   //brazo izquierdo
   if( vidas === 3){
    canvas.beginPath();
    canvas.moveTo(258,260.5);
    canvas.lineTo(218.75,319.48);
    canvas.stroke();
   }
//cuerpo
   if(vidas === 2){
    canvas.beginPath();
    canvas.moveTo(258,260.5);
    canvas.lineTo(258,391);
    canvas.stroke();
   }
//pierna derecha
   if(vidas === 1){
    canvas.beginPath();
    canvas.moveTo(258,387.62);
    canvas.lineTo(258.52,452.23)
    canvas.stroke();
   }
//pierna izquierda
   if(vidas === 0){
    canvas.beginPath();
    canvas.moveTo(258,387.62);
    canvas.lineTo(218.75,452.23);
    canvas.stroke();
   }
}