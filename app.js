const calcularInteres = (dias, cuotas, importe) => {
    let resultado = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);
    return (resultado * importe) / 100;
  };
  
  let SolicitudFinanciacion = false;
  let genero = "";
  let edad = "";
  let edadMujer = 60;
  let edadHombre = 65;
  
  while (!SolicitudFinanciacion) {
    genero = prompt("Ingrese si es hombre o mujer");
    edad = Number(prompt("Ingrese su edad (Hombres (= o > a 65 ×) y Mujeres (= o > a 60 ×)"));
  
    if (genero === "hombre" && edad < edadHombre) {
      let dias = Number(prompt("Ingrese qué día es hoy"));
      let cuotas = Number(prompt("Ingrese cantidad de cuotas"));
      let importe = Number(prompt("Ingrese importe"));
    
      let resultadoFinal = calcularInteres(dias, cuotas, importe);
    
      alert("El interés es: " + resultadoFinal);
    } else if (genero === "mujer" && edad < edadMujer) {
        let dias = Number(prompt("Ingrese qué día es hoy"));
        let cuotas = Number(prompt("Ingrese cantidad de cuotas"));
        let importe = Number(prompt("Ingrese importe"));
      
        let resultadoFinal = calcularInteres(dias, cuotas, importe);
      
        alert("El interés es: " + resultadoFinal);
    }else{
        alert("No puedes realizar financiación.");
    }
  }
  