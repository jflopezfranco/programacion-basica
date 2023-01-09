function iniciar_juego(){
    let boton_mascota_jugador = document.getElementById("selector-mascota")
    boton_mascota_jugador.addEventListener("click", selector_mascota_jugador)
}

function selector_mascota_jugador(){
    alert("seleccionaste tu mascota")
}

window.addEventListener("load", iniciar_juego)