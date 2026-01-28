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
                <a href="https://www.youtube.com/@soymarcusdev" target="_blank" aria-label="youtube"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
        <nav class="navbar">
            <div class="nav-container">
                <!--
                <a href="index.html" class="logo">Mi Tienda</a>
                -->
                <a href="index.html" class="logo-link">
                    <img src="img/logo.webp" alt="Logo de la tienda" class="logo">
                </a>

                <button class="menu-toggle" aria-label="Abrir menú de navegación">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div class="nav-menu">
                    <a href="index.html" class="nav-link ${activePage === 'inicio' ? 'active' : ''}">Inicio</a>
                    <a href="index.html#tienda" class="nav-link ${activePage === 'productos' ? 'active' : ''}">Productos</a>
                    <a href="faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}">Preguntas</a> 
                    <!-- <a href="index.html#contacto" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a>-->
                    <a href="contacto.html" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a> 
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
        <p>&copy; 2026 Hola Mundo Store. Todos los derechos reservados. Hecho con ♥️ por <a href="https://soymarcus.dev" target="_blank"><img src="img/devBy.svg" alt="Diseño y Desarrollo por Soy Marcus - Martin Leidreiter" class="devBy"></a></p>
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

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Detectar página activa desde el atributo data-page del body
    const activePage = document.body.getAttribute('data-page') || '';
    initTemplate(activePage);
});