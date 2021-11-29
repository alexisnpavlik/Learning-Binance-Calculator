const input = document.querySelector('input'); // Get the input element
input.addEventListener('change', getDataLong); //Cuando el input cambie ejecute la función


function getDataLong() {
    var entradaL = document.getElementById("precio_entrada_long").value;
    // var salidaL = document.getElementById("precio_salida_long").value;
    // var apalancamientoL = document.getElementById("apalancamiento_long").value;
    // var margen_inicialL = document.getElementById("margen_inicial_long").value;
    // var balanceL = document.getElementById("balance_long").value;

    const value = entradaL * 4; 

    const log = document.getElementById('log');
    log.innerHTML = value;

}





// var getDataShort = function() {
//     var entradaSh = document.getElementById("precio_entrada_short").value;
//     var salidaSh = document.getElementById("precio_salida_short").value;
//     var apalancamientoSh = document.getElementById("apalancamiento_short").value;
//     var margen_inicialSh = document.getElementById("margen_inicial_short").value;
//     var balanceSh = document.getElementById("balance_short").value;
//     var calcularSh;
//     calcularSh = precio_entradaSh * 100;
//     console.log(calcularSh);
// };



