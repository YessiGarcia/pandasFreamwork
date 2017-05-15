var restaurar = document.getElementsByTagName("div");
var botonRestaurar = document.getElementById("reiniciar");

var elimPan1 = document.getElementById("eliminarPanda1");
var elimPan2 = document.getElementById("eliminarPanda2");
var elimPan3 = document.getElementById("eliminarPanda3");
var elimPan4 = document.getElementById("eliminarPanda4");
var fotoPanda1 = document.getElementById("panda1");
var fotoPanda2 = document.getElementById("panda2");
var fotoPanda3 = document.getElementById("panda3");
var fotoPanda4 = document.getElementById("panda4");

var text1 = document.getElementById("texto1");
var textOculto1 = document.getElementById("textoOculto1");
var text2 = document.getElementById("texto2");
var ocultarIzq = document.getElementById("izquierda");
var ocultarDer = document.getElementById("derecha");
var mostrarIzq = document.getElementById("mostrarIzquierda");
var mostrarDer = document.getElementById("mostrarDerecha");

elimPan1.addEventListener("click",eliminar1);
elimPan2.addEventListener("click",eliminar2);
elimPan3.addEventListener("click",eliminar3);
elimPan4.addEventListener("click",eliminar4);
reiniciar.addEventListener("click",reiniciarTodo);
ocultarIzq.addEventListener("click",esconderIzq);
ocultarDer.addEventListener("click",esconderDer);
mostrarIzq.addEventListener("click",mostrarIzq);
mostrarDer.addEventListener("click",mostrarDer);

function reiniciarTodo (){
  for(var i=0;i<restaurar.length;i++){
    restaurar[i].style.display = "inline-block";
    }
}


function eliminar1(){
  fotoPanda1.style.display = "none";
}

function eliminar2(){
  fotoPanda2.style.display = "none";
}

function eliminar3(){
  fotoPanda3.style.display = "none";
}

function eliminar4(){
  fotoPanda4.style.display = "none";
}

function esconderIzq(){
  text1.style.visibility = "hidden";
  document.getElementById("texto1").id="textoOculto1";
  document.getElementById("izquierda").id="mostrarIzquierda";

}
function esconderDer(){
  text2.style.visibility = "hidden";
  document.getElementById("texto2").id="textoOculto2";
  document.getElementById("derecha").id="mostrarDerecha";
}

function mostrarDer(){
  textoOculto2.style.visibility = "visible";
}

function mostrarIzq(){
  textoOculto1.style.visibility = "visible";
}
