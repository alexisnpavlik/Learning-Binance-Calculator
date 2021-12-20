var getDataLong = function() {
    var entradaL = document.getElementById("precio_entrada_long").value;
    var salidaL = document.getElementById("precio_salida_long").value;
    var apalancamientoL = document.getElementById("apalancamiento_long").value;
    var margen_inicialL = document.getElementById("margen_inicial_long").value;
    var balanceL = document.getElementById("balance_long").value;
    var calcularL;
    calcularL = precio_entradaL * 100;
    console.log(calcularL);
    document.getElementById("resultado_long").style.visibility = 'visible';
    document.getElementById("resultado_long").innerHTML = getDataLong();
    resultado_long.innerHTML = '<div>su resultado es:' + getDatalong() + '</div>'
};


@ - 19, 21 + 22, 4 @ @
var getDataShort = function() {
    var calcularSh;
    calcularSh = precio_entradaSh * 100;
    console.log(calcularSh);
};

///document.getElementById('hola').style.visibility = 'visible';
///document.getElementById('hola').innerHTML = getData();
///hola.innerHTML = '<div>su resultado es:' + getData() + '</div>';



// var calcular; ///no se si va esta
// var quanty_crip;
// var pnl_usdt;
// var roe_porcentual;
// var liqui_price;

//quanty_crip = ///ecuacion
//pnl_usdt = /// ecuacion 
//roe_porcentual = /// ecuacion
//liqui_price = /// ecuacion
};