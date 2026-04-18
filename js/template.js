// Template dinámico para Header y Footer

// Renderizar Header
function renderHeader(activePage = '') {
    const header = document.createElement('header');
    header.innerHTML = `
    <header>
        <div class="redes">
            <div class="cont1200">
                <a href="https://www.instagram.com/soymarcusdev" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@soymarcusdev" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://www.youtube.com/@soymarcusdev" target="_blank" aria-label="Youtube"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.twitch.tv/soymarcusdev" target="_blank" aria-label="Youtube"><i class="fa-brands fa-twitch"></i></a>
            </div>
        </div>
        <nav class="navbar">
            <div class="nav-container">
                <!--
                <a href="index.html" class="logo">Mi Tienda</a>
                -->
                <a href="index.html" class="logo-link">
                    <img src="img/logo.svg" alt="Logo de la tienda" class="logo">
                </a>

                <button class="menu-toggle" aria-label="Abrir menú de navegación">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div class="nav-menu">
                    <a href="index.html" class="nav-link ${activePage === 'inicio' ? 'active' : ''}">Inicio</a>
                    <a href="index.html#tienda" class="nav-link ${activePage === 'productos' ? 'active' : ''}">Productos</a>
                    <a href="nosotros.html" class="nav-link ${activePage === 'nosotros' ? 'active' : ''}">Nosotros</a>
                    <a href="faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}">Preguntas</a> 
                    <!-- <a href="index.html#contacto" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a>-->
                    <a href="contacto.html" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a> 
                    <a href="favoritos.html" class="nav-link favorites-link ${activePage === 'favoritos' ? 'active' : ''}" aria-label="Mis Favoritos">
                        <i class="fa-solid fa-heart"></i><span class="favorites-count">0</span>
                    </a>
                    <a href="carrito.html" class="nav-link cart-link ${activePage === 'carrito' ? 'active' : ''}">
                    <i class="fa-solid fa-cart-shopping"></i><span class="cart-count">0</span>
                    </a>
                </div>
            </div>
        </nav>
    </header>
    `;

    return header;
}

// Renderizar Footer
function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2026 Mi Tienda Online. Todos los derechos reservados. Hecho con ♥️ por <a href="https://lemora.lat" target="_blank"><img src="img/lemora.svg" alt="Diseño y Desarrollo por Lemora" class="devBy"></a></p>
        <div class="whatsapp">
        <a href="https://wa.me/+5493515957014?text=Hola, quería consultar ">
            <img loading="lazy" src="img/whatsapp.png" alt="whatsapp logo">
        </a>
    </div>
        `;

    return footer;
}

// Inicializar template
function initTemplate(activePage = '') {
    // Insertar header al inicio del body
    const body = document.body;
    const header = renderHeader(activePage);
    body.insertBefore(header, body.firstChild);

    // Insertar footer al final del body
    const footer = renderFooter();
    body.appendChild(footer);
}

// Actualizar contador de favoritos en el nav
function actualizarContadorFavoritosGlobal() {
    const favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
    const contadores = document.querySelectorAll('.favorites-count');
    contadores.forEach(contador => {
        contador.textContent = favoritos.length;
        if (favoritos.length > 0) {
            contador.style.display = 'flex';
        } else {
            contador.style.display = 'none';
        }
    });
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Detectar página activa desde el atributo data-page del body
    const activePage = document.body.getAttribute('data-page') || '';
    initTemplate(activePage);
    
    // Actualizar contador de favoritos
    actualizarContadorFavoritosGlobal();
});
