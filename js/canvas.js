var lienso = document.getElementById("ahorcado");
var canvas = lienso.getContext("2d");

canvas.lineWidth=4.5;
canvas.lineCap = "round";
canvas.strokeStyle = "#0A3871"




function ahorcado(){
    //base
   if(fallas === 0){
    canvas.beginPath();
    canvas.moveTo(0,355);
    canvas.lineTo(294,355);
    canvas.lineWidth = 5;
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(80.67,503-148);
    canvas.lineTo(80.67,2);
    canvas.lineTo(831.42-573,2);
    canvas.lineTo(831.42-573,49.5)
    canvas.stroke();
   } 
//cabeza
   if(fallas === 1){
    canvas.beginPath();
    canvas.arc(258.42,81,31.5,0,Math.PI * 2);
    canvas.stroke();
   }
//brazao derecho
   if (fallas === 4){
    canvas.beginPath();
    canvas.moveTo(258,112.5);
    canvas.lineTo(293.52,171.48);
    canvas.stroke();
   }
   //brazo izquierdo
   if( fallas === 3){
    canvas.beginPath();
    canvas.moveTo(258,112.5);
    canvas.lineTo(218.75,171.48);
    canvas.stroke();
   }
//cuerpo
   if(fallas === 2){
    canvas.beginPath();
    canvas.moveTo(258,112.5);
    canvas.lineTo(258,235);
    canvas.stroke();
   }
//pierna derecha
   if(fallas === 6){
    canvas.beginPath();
    canvas.moveTo(258,230.62);
    canvas.lineTo(293.52,304.23)
    canvas.stroke();
   }
//pierna izquierda
   if(fallas === 5){
    canvas.beginPath();
    canvas.moveTo(258,230.62);
    canvas.lineTo(218.75,304.23);
    canvas.stroke();
   }
}

function limpiarCanvas(){
   canvas.clearRect(0,0,300,360);
}