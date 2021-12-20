const input = document.querySelector('input'); // Get the input element
input.addEventListener('change', getDataLong); //Cuando el input cambie ejecute la función


function getDataLong() {
    var entradaL = document.getElementById("precio_entrada_long").value;
    var salidaL = document.getElementById("precio_salida_long").value;
    var margen_inicialL = document.getElementById("margen_inicial_long").value;
    // var apalancamientoL = document.getElementById("apalancamiento_long").value;
    // var balanceL = document.getElementById("balance_long").value;

    const value = salidaL * margen_inicialL / entradaL - margen_inicialL; 

    const log = document.getElementById('log');
    log.innerHTML = value;
}

