const input = document.querySelector('input'); // Get the input element
input.addEventListener('change', getDataLong); //Cuando el input cambie ejecute la función


function getDataLong() {
    var entradaL = document.getElementById("precio_entrada_long").value;
    var salidaL = document.getElementById("precio_salida_long").value;
    var margen_inicialL = document.getElementById("margen_inicial_long").value;
    var apalancamientoL = document.getElementById("apalancamineto_long").value;
    var walletL = document.getElementById("waller_long").value;

    const value_PNL = (salidaL * margen_inicialL * apalancamientoL) / (entradaL);
    const long = document.getElementById('long');
    long.innerHTML = value_PNL;
}

//     const value_liq = (walletL+margen_inicialL+margen_inicialL*apalancamientoL*entradaL)/(apalancamientoL*margen_inicialL);
//     const leg = document.getElementById('leg');
//     leg.innerHTML = value_liq;
//