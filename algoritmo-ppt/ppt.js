// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0

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
}