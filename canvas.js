var lienso = document.getElementById("ahorcado");
var canvas = lienso.getContext("2d");



lienso.classList.add("invisible")




function ahorcado(){
    //base
   if(vidas === 6){
    canvas.beginPath();
    canvas.moveTo(573,503);
    canvas.lineTo(867,503);
    canvas.lineWidth = 5;
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(653.67,503);
    canvas.lineTo(653.67,148);
    canvas.lineTo(831.42,148);
    canvas.lineTo(831.42,197.5)
    canvas.stroke();
   } 
//cabeza
   if(vidas === 5){
    canvas.beginPath();
    canvas.arc(831.42,229,31.5,0,Math.PI * 2);
    canvas.stroke();
   }
//brazao derecho
   if (vidas === 4){
    canvas.beginPath();
    canvas.moveTo(831,260.5);
    canvas.lineTo(866.52,319.48);
    canvas.stroke();
   }
   //brazo izquierdo
   if( vidas === 3){
    canvas.beginPath();
    canvas.moveTo(831,260.5);
    canvas.lineTo(791.75,319.48);
    canvas.stroke();
   }
//cuerpo
   if(vidas === 2){
    canvas.beginPath();
    canvas.moveTo(831,260.5);
    canvas.lineTo(831,391);
    canvas.stroke();
   }
//pierna derecha
   if(vidas === 1){
    canvas.beginPath();
    canvas.moveTo(831,387.62);
    canvas.lineTo(866.52,452.23)
    canvas.stroke();
   }
//pierna izquierda
   if(vidas === 0){
    canvas.beginPath();
    canvas.moveTo(831,387.62);
    canvas.lineTo(791.75,452.23);
    canvas.stroke();
   }
}