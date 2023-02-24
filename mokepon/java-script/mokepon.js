let ataqueJugador 
let ataqueEnemigo

function iniciar_juego(){
    let boton_mascota_jugador = document.getElementById("selector-mascota")
    boton_mascota_jugador.addEventListener("click", selector_mascota_jugador)  

    let botonFuego = document.getElementById("selector-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("selector-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("selector-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
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
    seleccionar_mascota_enemigo ()
}

function seleccionar_mascota_enemigo (){
    let ataque_mascota_aleatorio =  aleatorio(1,3)
    let span_mascota_enemigo = document.getElementById("mascota-enemigo")

    if (ataque_mascota_aleatorio == 1){
        span_mascota_enemigo.innerHTML = "Hipodogue"
    }   else if (ataque_mascota_aleatorio == 2){
        span_mascota_enemigo.innerHTML = "Capipepo"
    }   else {
        span_mascota_enemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo (){
    let ataque_aleatorio = aleatorio(1,3)
    
    if (ataque_aleatorio == 1){
        ataqueEnemigo = "FUEGO" 
    }   else if (ataque_aleatorio == 2){
        ataqueEnemigo = "AGUA" 
    }   else {
        ataqueEnemigo = "TIERRA" 
    }
}

function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciar_juego)