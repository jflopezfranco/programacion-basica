function iniciar_juego(){
    let boton_mascota_jugador = document.getElementById("selector-mascota")
    boton_mascota_jugador.addEventListener("click", selector_mascota_jugador)  
}

function selector_mascota_jugador(){
let input_hipodogue = document.getElementById("hipodogue")
let input_capipepo = document.getElementById("capipepo")
let input_ratigueya = document.getElementById("ratigueya")
let span_mascota_jugador = document.getElementById("mascota-jugador")

    if (input_hipodogue.checked){
        span_mascota_jugador.innerHTML = "Hipodogue"
    }   else if (input_capipepo.checked){
        span_mascota_jugador.innerHTML = "Capipepo"
    }   else if(input_ratigueya.checked){
        span_mascota_jugador.innerHTML = "Ratigueya"
    } else {
        alert("input incorreto. Selecciona una mascota para iniciar")
    }
}

window.addEventListener("load", iniciar_juego)