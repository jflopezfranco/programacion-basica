function iniciar_juego(){
    let boton_mascota_jugador = document.getElementById("selector-mascota")
    boton_mascota_jugador.addEventListener("click", selector_mascota_jugador)
}

function selector_mascota_jugador(){
let input_hipodogue = document.getElementById("hipodogue")
let input_capipepo = document.getElementById("capipepo")
let input_ratigueya = document.getElementById("ratigueya")
    if (input_hipodogue.checked){
        alert("Seleccionaste a Hipodogue")
    }   else if (input_capipepo.checked){
        alert("Seleccionaste a Capipepo")
    }   else if(input_ratigueya.checked){
        alert("Seleccionaste a Ratigueya")
    } else {
        alert("input incorreto. Selecciona una mascota para iniciar")
    }
}

window.addEventListener("load", iniciar_juego)