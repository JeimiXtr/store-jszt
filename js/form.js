
function formu(){
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);

    let salida = document.getElementById("salida");
    salida.textContent=nombre +" guardado";

}