let jugador = 0;
let pc = 0;
let triunfos = 0
let perdidas = 0
let Empates = 0

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = `PIEDRA 🪨`
    } else if (jugada == 2) {
        resultado = `PAPEL 📃`
    } else if (jugada == 3) {
        resultado = `TIGERA ✂️`
    } else {
        resultado = `MAL ELEGIDO`
    }
    return resultado
}

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt(`Elige: 1-Piedra \n2-para papel \n3-para tijera`)

    alert('PC elige: ' + eleccion(pc))
    alert('Tu elige: ' + eleccion(jugador))

    if (pc == jugador) {
        alert("EMPATE")
        Empates = Empates + 1
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE");
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE");
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
alert(`Ganaste\n${triunfos} veces.\nPerdiste\n${perdidas} veces.\nTuviste\n${Empates} empate`)