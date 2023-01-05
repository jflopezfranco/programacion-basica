// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 2

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
// alert("Elegiste " + jugador)
if(jugador == 1) {
    alert("Elegiste piedra")
}   else if (jugador == 2) {
    alert("Elegiste papel")
}   else if (jugador == 3) {
    alert("Elegiste tijeras")
}   else {
    alert("input invalido") 
} //inicia la variable pc
if(pc == 1) {
    alert("PC elige piedra")
}   else if (pc == 2) {
    alert("PC elige papel")
}   else if (pc == 3) {
    alert("PC elige tijeras")
} 
//COMBATE
if (jugador == pc){
        alert("EMPATE")
}   else if (jugador == 1 && pc == 3){//piedra y tijeras
        alert("Ganaste")
}   else if (jugador == 2 && pc == 1){//papel y piedra
        alert("Ganaste")
}   else if (jugador == 3 && pc == 2){//tijeras y papel
        alert("Ganaste")
}   else {
        alert("Perdiste")
}