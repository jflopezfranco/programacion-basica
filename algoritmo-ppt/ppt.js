function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1) {
        resultado = "Elegiste piedra"
    }   else if (jugada == 2) {
        resultado = "Elegiste papel"
    }   else if (jugada == 3) {
        resultado = "Elegiste tijeras"
    }   else {
        resultado = "input invalido" 
    }  
    return resultado
}
// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas <3){
    pc = aleatorio(1,3)

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
// alert("Elegiste " + jugador)
//inicia la variable pc

alert("Tu eliges: " + eleccion(jugador))
alert("PC elige: " + eleccion(pc))

//COMBATE
if (jugador == pc){
        alert("EMPATE")
}   else if (jugador == 1 && pc == 3){//piedra y tijeras
        alert("Ganaste") 
        triunfos = triunfos + 1
}   else if (jugador == 2 && pc == 1){//papel y piedra
        alert("Ganaste")
        triunfos = triunfos + 1
}   else if (jugador == 3 && pc == 2){//tijeras y papel
        alert("Ganaste")
        triunfos = triunfos + 1
}   else {
        alert("Perdiste")
        perdidas = perdidas + 1
}
}

alert ("Ganaster " + triunfos + " veces y Perdiste "+ perdidas) + " veces."
