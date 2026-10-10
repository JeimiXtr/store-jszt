/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*!
* Instituto Advance - Scripts del Sitio
*/





// LO QUE HICE


const TASA_DOLAR = 3.50;
const TASA_EURO = 4.00;

function convertir() {
  let soles = parseFloat(document.getElementById("txtSoles").value);

  let dolares = soles / TASA_DOLAR;
  let euros = soles / TASA_EURO;

  alert(
    "Equivalente de S/ " + soles + ":\n" +
    "- Dólares: $" + dolares.toFixed(2) + "\n" +
    "- Euros: €" + euros.toFixed(2)
  );
}


function calcularTerreno() {
  
  let largo = parseFloat(document.getElementById("txtLargo").value);
  let ancho = parseFloat(document.getElementById("txtAncho").value);

  
  let area = largo * ancho;
  let perimetro = 2 * (largo + ancho);

 
  alert(
    "Resultados del terreno:\n" +
    "- Área: " + area + " m²\n" +
    "- Perímetro: " + perimetro + " m"
  );
}





