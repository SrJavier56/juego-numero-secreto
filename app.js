
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numerodeUsuario = parseInt (document.getElementById('numeroUsuario').value);
    
    if (numerodeUsuario === numeroSecreto) {
        
        asignarTextoElemento('p', `Haz acertado el número en ${intentos} ${(intentos === 1) ? `intento` : `intentos`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //El usuario no acertó
    } else if (numerodeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número correcto es menor')
        } else {
            asignarTextoElemento('p', 'El número ingresado es mayor')
        }
        intentos++;
        limpiarCaja();
    return;
}
function limpiarCaja() {
    document.getElementById('numeroUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado)
    //Si ya se sortearon todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Todos los números del 1 al 10 han sido sorteados')
    } else {
        //Si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //Si el numero aún no esta en la lista
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Reiniciar intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
