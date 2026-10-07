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

window.addEventListener('DOMContentLoaded', event => {

    // --- 1. Cambio de Imagen Dinámico (mouseover / mouseout) ---
    const imgPrincipal = document.getElementById("imgPrincipal");

    if (imgPrincipal) {
        // Imagen original (Desarrollo Web)
        const imagenOriginal = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=700&fit=crop";
        // Imagen al pasar el cursor (Estudiantes en campus/aula)
        const imagenHover = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop";

        imgPrincipal.addEventListener("mouseover", function () {
            imgPrincipal.src = imagenHover;
        });

        imgPrincipal.addEventListener("mouseout", function () {
            imgPrincipal.src = imagenOriginal;
        });
    }

    // --- 2. Contador interactivo para el Carrito / Matrícula ---
    const btnInscribir = document.getElementById("btnInscribir");
    const inputCantidad = document.getElementById("inputQuantity");
    const badgeCarrito = document.getElementById("badgeCarrito");

    if (btnInscribir && inputCantidad && badgeCarrito) {
        btnInscribir.addEventListener("click", function () {
            const cantidad = parseInt(inputCantidad.value) || 1;
            let actual = parseInt(badgeCarrito.innerText) || 0;
            badgeCarrito.innerText = actual + cantidad;
            
            alert(`¡Se han añadido ${cantidad} vacante(s) al carrito de matrícula!`);
        });
    }

});



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