document.addEventListener("DOMContentLoaded", function(){
    //EJEMPLO CALCULADORA
    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let nume1 = parseFloat(document.getElementById("numero1").value);
        let nume2 = parseFloat(document.getElementById("numero2").value);
        let operacion = document.getElementById("operacion").value;
        let resultado = document.getElementById("resultado");

        if(isNaN(nume1)||isNaN(nume2)){
            alert("Ingresa un numero pe!");
            resultado.textContent = "Ingrese números válidos";
            return;
        }

        let res; //temporal para almacenar el resultado

        switch (operacion) {
            case "sum":
                res = nume1+nume2;
                break;
            case "rest":
                res = nume1-nume2;
                break;
            case "mul":
                res = nume1*nume2;
                break;
            case "div":
                alert("haganlo Ustedes");
                break;
            default:
                break;
        }

    resultado.textContent = "Resultado es "+res;

    });
    //ejercicio 04
document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let salario = parseFloat(document.getElementById("salario").value);
        let horasT = parseFloat(document.getElementById("horasT").value);
        let horasE=0;
        let salarioE=0;
        let sueldo=0;
        let VariableSalida = document.getElementById("salida");

        if(isNaN(salario)||isNaN(horasT)){
            VariableSalida.textContent = "Ingrese números válidos";
            alert("Ingresa un numero pe!");
            return;
        }
        if(horasT>40){
            alert("Usted trabajó mas de 40 horas, y merece un pago extra");
            horasE = horasT-40;
            salarioE = horasE*(salario*1.5);
            sueldo = salario*40+salarioE;
        }else{
        sueldo = salario*horasT;   
        }

        VariableSalida.textContent = "Su sueldo a pagar es de S/."+sueldo;
        });
        //ejercicio09
document.getElementById("Eje09").addEventListener("submit", function(e){
        e.preventDefault();
        let distancia = parseFloat(document.getElementById("distancia").value);
        let tBase = 10;
        let adic = 3;
        let total = tBase + (distancia*adic);
        let salidaV = document.getElementById("pagar");

        if(isNaN(distancia)){
            VariableSalida.textContent = "Ingrese números válidos";
            alert("Ingresa un numero pe!");
            return;
        }
        salidaV.textContent= "Total a Pagar por "+distancia +"km. es de S/."+ total;

        });

document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();
            //AQUI ES DONDE RESUELVES TU EJERCICIO
        });

})

// Ejercicios para aumentar nota
document.addEventListener("DOMContentLoaded", function(){

    // Ejercicio 1 - Compra
    document.getElementById("formCompra").addEventListener("submit", function(e){
        e.preventDefault();

        let p1 = parseFloat(document.getElementById("precio1").value);
        let c1 = parseFloat(document.getElementById("cant1").value);
        let p2 = parseFloat(document.getElementById("precio2").value);
        let c2 = parseFloat(document.getElementById("cant2").value);
        let p3 = parseFloat(document.getElementById("precio3").value);
        let c3 = parseFloat(document.getElementById("cant3").value);
        let salida = document.getElementById("totalCompra");

        if(isNaN(p1) || isNaN(c1) || isNaN(p2) || isNaN(c2) || isNaN(p3) || isNaN(c3)){
            alert("Completa todos los campos con números válidos");
            salida.textContent = "Error: faltan datos";
            return;
        }

        let total = (p1*c1) + (p2*c2) + (p3*c3);
        if(total > 100) total *= 0.95; // descuento 5%

        salida.textContent = "Total a pagar: $" + total.toFixed(2);
    });

    // Ejercicio 2 - División de cuenta
    document.getElementById("formCuenta").addEventListener("submit", function(e){
        e.preventDefault();

        let cuenta = parseFloat(document.getElementById("cuentaTotal").value);
        let personas = parseInt(document.getElementById("personas").value);
        let salida = document.getElementById("divisionCuenta");

        if(isNaN(cuenta) || isNaN(personas) || personas <= 0){
            alert("Ingresa valores válidos");
            salida.textContent = "Error: datos incorrectos";
            return;
        }

        let pago = cuenta / personas;
        salida.textContent = "Cada persona paga: $" + pago.toFixed(2);
    });

    // Ejercicio 3 - Conversión de divisas
    document.getElementById("formDivisas").addEventListener("submit", function(e){
        e.preventDefault();

        let usd = parseFloat(document.getElementById("dolares").value);
        let tasa = parseFloat(document.getElementById("tasa").value);
        let salida = document.getElementById("conversion");

        if(isNaN(usd) || isNaN(tasa) || tasa <= 0){
            alert("Ingresa valores válidos");
            salida.textContent = "Error: datos incorrectos";
            return;
        }

        let equivalente = usd * tasa;
        salida.textContent = "Equivalente en moneda local: S/." + equivalente.toFixed(2);
    });

});

// Validacion para mi formulario
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formSenati").addEventListener("submit", function(e){
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let dni = document.getElementById("dni").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let curso = document.getElementById("curso").value;
        let salida = document.getElementById("respuestaSenati");

        if(nombre === "" || dni === "" || correo === "" || telefono === "" || curso === ""){
            alert("Por favor completa todos los campos");
            salida.textContent = "Error: faltan datos";
            return;
        }

        // Validación básica de correo
        if(!correo.includes("@") || !correo.includes(".")){
            alert("Ingresa un correo válido");
            salida.textContent = "Error: correo inválido";
            return;
        }

        salida.textContent = "¡Gracias, " + nombre + "! Tu inscripción al curso de " + curso + " fue registrada correctamente.";
    });
});
