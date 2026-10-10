/* --- Tema Azul Corporativo - Instituto Advance --- */

:root {
    --bs-primary: #0d6efd;
    --bs-primary-rgb: 13, 110, 253;
}

/* Navbar con toque azul moderno */
.navbar {
    border-bottom: 2px solid #e2e8f0;
}

/* Estilo para los botones principales y enlaces */
.btn-primary {
    background-color: #0284c7;
    border-color: #0284c7;
}

.btn-primary:hover {
    background-color: #0369a1;
    border-color: #0369a1;
}

.text-primary {
    color: #0284c7 !important;
}

/* Tarjetas y sombras */
.card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 .5rem 1rem rgba(2, 132, 199, 0.15) !important;
}