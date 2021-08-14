const d = document,
      $btn =d.querySelectorAll(".btn"),
      $text =d.getElementById("text");

    $btn[5].style.width = "100px";
    $btn[5].style.background = "white";
    $btn[5].style.color = "black";

    function Ecuacion(muestra,confianza, exito, fracaso, error){
        resolveConfianza = Math.pow(confianza,2);
        resolveError = Math.pow(error,2);
        resolve = Math.floor((((resolveConfianza*(exito*fracaso))*muestra))/((resolveError*(muestra-1))+(resolveConfianza*(exito*fracaso))))
        return resolve;
    }


    $btn[5].addEventListener("click",()=>{

        var muestra = $btn[0].value;
        var confianza = $btn[1].value;
        var exito = $btn[2].value;
        var fracaso =$btn[3].value;
        var error = $btn[4].value;

        resultado = Ecuacion(muestra, confianza, exito, fracaso, error)
        console.log(resultado )
        if (resultado === undefined){
            resultado = "Coloca bien los Nº o llena todas las casillas"
        }
        $text.textContent = `${resultado}`;

    }
    )




