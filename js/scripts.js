/* ==== PRECIOS ==== */
document.addEventListener('DOMContentLoaded', actualizarPrecios);

const preciosProductos = {
    cuadros: 55,
    cuadrosCustom: 65,
    deskpads: 50,
    deskpadsCustom: 60,
    remeras: 40,
    stickers: 15, 
    stickersPromo: 10, 
    carteles: 0
};

function actualizarPrecios() {
    const elementosPrecios = document.querySelectorAll('.precio');
    elementosPrecios.forEach(elemento => {
        const productoId = elemento.getAttribute('data-producto');
        if (preciosProductos[productoId] !== undefined) {
            elemento.textContent = `$${preciosProductos[productoId].toFixed(3)}`;
        }
    });
}



/* ==== ANIMACIÓN DE CARDS ==== */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}); 

cards.forEach(card => observer.observe(card)); 


/* ==== GALERÍA DE PRODUCTOS ==== */
function changeImage(mainImageId, thumbnail) {
    const mainImage = document.getElementById(mainImageId);
    mainImage.src = thumbnail.src;
}


/* ==== AÑADIR A FAVORITOS ==== */
window.addEventListener('load', function () {
    const icon = document.getElementById('favoriteIcon');
    if (!icon) return;

    // Verificamos si el icono está marcado como favorito
    const isFavorite = localStorage.getItem('isFavorite');
    if (isFavorite === 'true') {
        icon.classList.add('active');
    }

    // Función para alternar el estado de favorito
    icon.addEventListener('click', function () {
        icon.classList.toggle('active');
        const estado = icon.classList.contains('active');
        localStorage.setItem('isFavorite', estado);
    });
});


/* ==== FECHA DE ENTREGA ==== */
window.addEventListener('load', function () {
    const deliveryElement = document.getElementById('deliveryDate');
    if (!deliveryElement) return;

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 4);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);

    const options = { day: 'numeric', month: 'long' };
    const formattedStartDate = startDate.toLocaleDateString('es-ES', options);
    const formattedEndDate = endDate.toLocaleDateString('es-ES', options);

    deliveryElement.textContent = `Este producto llega entre el ${formattedStartDate} y el ${formattedEndDate}`;
});


/* ==== SLIDER ==== */
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
let autoSlide; // variable para guardar el intervalo

// === fn mostrar slides ===
function showSlide(n) {
    index += n;

    if (index < 0) index = slide.length - 1;
    if (index >= slide.length) index = 0;

    slides.style.transform = `translateX(${-index * 100}%)`;
}

// === btn de nav ===
if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => showSlide(-1));
    nextButton.addEventListener('click', () => showSlide(1));
}

// === desplazamiento ===
const intervalo = 4000; 

function startAutoSlide() {
    autoSlide = setInterval(() => {
        showSlide(1);
    }, intervalo);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Inicia el desplazamiento 
startAutoSlide();

// === Ppausa mouse hover ===
slides.addEventListener('mouseenter', stopAutoSlide);
slides.addEventListener('mouseleave', startAutoSlide);


/* ==== CAMPOS DEL FORMULARIO ==== */
const checkbox = document.getElementById('toggle-checkbox');
const camposAdicionales = document.getElementById('campos-adicionales');

if (checkbox && camposAdicionales) {
    checkbox.addEventListener('change', function () {
        camposAdicionales.style.display = checkbox.checked ? 'none' : 'block';
    });
}




