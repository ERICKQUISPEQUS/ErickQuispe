document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();

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
        document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();
            //AQUI ES DONDE RESUELVES TU EJERCICIO
        });
})
