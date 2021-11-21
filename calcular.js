var getData = function() {
    var contract = document.getElementById("contract").value;
    var mode = document.getElementById("mode").value;
    var precio_entrada = document.getElementById("precio_entrada").value;
    var precio_salida = document.getElementById("precio_salida").value;
    var margen_inicial = document.getElementById("margen_inicial").value;
    var balance = document.getElementById("wallet").value;
    var calcular;
    calcular = precio_entrada * 100
    console.log(calcular);
};


document.getElementById('hola').style.visibility = ' visible';
document.getElementById('hola').innerHTML = getData();
hola.innerHTML = '<div>su resultado es:' + getData() + '</div>';



// var calcular; ///no se si va esta
// var quanty_crip;
// var pnl_usdt;
// var roe_porcentual;
// var liqui_price;

//quanty_crip = ///ecuacion
//pnl_usdt = /// ecuacion 
//roe_porcentual = /// ecuacion
//liqui_price = /// ecuacion