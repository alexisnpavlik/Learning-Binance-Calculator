// function getDataLong() {
//     var entradaL = document.getElementById("precio_entrada_long").value;
//     // var salidaL = document.getElementById("precio_salida_long").value;
//     // var apalancamientoL = document.getElementById("apalancamiento_long").value;
//     // var margen_inicialL = document.getElementById("margen_inicial_long").value;
//     // var balanceL = document.getElementById("balance_long").value;

//     const value = entradaL * 4; 

//     const log = document.getElementById('log');
//     log.innerHTML = value;

    
// 


function getDataLong() {
    var entradaL = document.getElementById("precio_entrada_long").value;
    var salidaL = document.getElementById("precio_salida_long").value;
    var margen_inicialL = document.getElementById("margen_inicial_long").value;
    // var apalancamientoL = document.getElementById("apalancamiento_long").value;
    // var balanceL = document.getElementById("balance_long").value;

<<<<<<< Updated upstream
    const value = salidaL * margen_inicialL / entradaL - margen_inicialL; 

    const log = document.getElementById('log');
    log.innerHTML = value;

}
=======
    const value_PNL = (salidaL * margen_inicialL * apalancamientoL / entradaL) - margen_inicialL * apalancamientoL;
    const long = document.getElementById('long');
    long.innerHTML = value_PNL;
    
    const value_liq = (entradaL * margen_inicialL) / (walletL + margen_inicialL);
    const leg = document.getElementById('leg');
    leg.innerHTML = value_liq;
}
>>>>>>> Stashed changes
