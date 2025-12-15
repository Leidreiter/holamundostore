// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarTemplate);


// HTML del header
const headerHTML = `
    <div class="promo-banner">
        <div class="promo-track">
          <div class="promo-content">
            <span>🥳 Tu tienda favorita vuelve a operar en 2026</span>
            <span class="separator">|</span>
            <span>🎨 nuevos diseño disponibles de cuadros, remeras y stickers</span>
            <span class="separator">|</span>
            <span>🎁 con tu primera compra te llevas de regalo una mystery box</span>
            <span class="separator">|</span>
            <span>🥳 Tu tienda favorita vuelve a operar en 2026</span>
            <span class="separator">|</span>
            <span>🎨 nuevos diseño disponibles de cuadros, remeras y stickers</span>
            <span class="separator">|</span>
            <span>🎁 con tu primera compra te llevas de regalo una mystery box</span>
            <span class="separator">|</span>
          </div>
        </div>
      </div>
   
    <header class="header">
        <div class="contenedor contenido__header">
            <a href="/index.html">
                <img loading="lazy" src="/img/logo.png" alt="logo Hola Mundo Store" class="logo">
            </a>
            <nav class="navegacion navegacion-principal">
                <!-- menu hamburguesa -->
                <input type="checkbox" id="menu-toggle">
                    <label for="menu-toggle" class="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                <ul class="menu">
                <li><a href="/index.html" class="navegacion__enlace">Inicio</a></li>
                <li><a href="/tienda/cuadros.html" class="navegacion__enlace">Cuadros</a></li>
                <li><a href="/tienda/remeras.html" class="navegacion__enlace">Remeras</a></li>
                <li><a href="/tienda/deskpads.html" class="navegacion__enlace">Desk Pads</a></li>
                <li><a href="/tienda/otros.html" class="navegacion__enlace">Otros</a></li>
                </ul>
            </nav>
            <div class="redes">
                <a href="https://www.tiktok.com/@soymarcusdev/" target="_new">
                    <img src="/img/tiktok.svg" alt="tik tok Hola Mundo Store" class="iconored">
                </a>
                <a href="https://www.instagram.com/soymarcusdev/" target="_new">
                    <img src="/img/instagram.svg" alt="instagram Hola Mundo Store" class="iconored">
                </a>
                <a href="https://www.youtube.com/@soymarcusdev" target="_new">
                    <img src="/img/youtube.svg" alt="YouTube Hola Mundo Store" class="iconored">
                </a>
            </div>
        </div>
    </header>
`;

// HTML del footer
const footerHTML = `
    <footer class="footer">
        <div class="footer_lista">
            <div class="contenedor footer_lista_grid">
                <div class="footer_listas">
                    <a href=/tienda/cuadros.html><h5 class="footer_titulo">Cuadros</h5></a>
                    <ul class="caracteristicas__lista no-space">
                        <li class="lista"><a href="/tienda/cuadros/monokaipro.html" class="footer_link">Monokai Pro theme</a></li>
                        <li class="lista"><a href="/tienda/cuadros/dracula.html" class="footer_link">Drácula theme</a></li>
                        <li class="lista"><a href="/tienda/cuadros/gruvbox.html" class="footer_link">Gruvbox theme</a></li>
                        <li class="lista"><a href="/tienda/cuadros/edicionespecial.html" class="footer_link">Edición Especial theme</a></li>
                        <li class="lista"><a href="/tienda/cuadros/customtheme.html" class="footer_link">Custom theme</a></li>
                    </ul>
                </div>
                <div class="footer_listas">
                    <a href=/tienda/remeras.html><h5 class="footer_titulo">Remeras</h5></a>
                    <ul class="caracteristicas__lista no-space">
                        <li class="lista"><a href="/tienda/remeras/anticodingclub.html" class="footer_link">Anti Coding Coding Club</a></li>
                        <li class="lista"><a href="/tienda/remeras/babydonthurtme.html" class="footer_link">Baby don't hurt me</a></li>
                        <li class="lista"><a href="/tienda/remeras/github.html" class="footer_link">Github (Mona - the octocat)</a></li>
                        <li class="lista"><a href="/tienda/remeras/thisisfine.html" class="footer_link">This is fine!</a></li>
                    </ul>
                </div>
                <div class="footer_listas">
                    <a href="/tienda/deskpads.html"><h5 class="footer_titulo">Deskpads</h5></a>
                    <ul class="caracteristicas__lista no-space">
                        <li class="lista"><a href="/tienda/deskpads/monokaipro.html" class="footer_link">Monokai Pro theme</a></li>
                        <li class="lista"><a href="/tienda/deskpads/dracula.html" class="footer_link">Drácula theme</a></li>
                        <li class="lista"><a href="/tienda/deskpads/gruvbox.html" class="footer_link">Gruvbox theme</a></li>
                        <li class="lista"><a href="/tienda/deskpads/customtheme.html" class="footer_link">Edición Especial theme</a></li>
                    </ul>
                </div>
                <div class="footer_listas">
                    <a href=/tienda/otros.html><h5 class="footer_titulo">Otros</h5></a>
                    <ul class="caracteristicas__lista no-space">
                        <li class="lista"><a href="github-rgb.html" class="footer_link">Cartel Github RGB</a></li>
                        <li class="lista"><a href="/tienda/otros/stickers.html" class="footer_link">Stickers Programación</a></li>
                    </ul>
                </div>
                <div class="footer_listas">
                    <h5 class="footer_titulo">Hecha con ♥️ por:</h5>
                    <a href="https://soymarcus.pages.dev" target="_blank"><img src="/img/devBy.svg" class="designby"></a>
                </div>
            </div>
        </div>

    </footer>
`;

const whatsappHTML = `
        <div class="whatsapp">
        <a href="https://wa.me/+5493515957014?text=Hola, quería consultar por ">
            <img loading="lazy" src="/img/whatsapp.png" alt="whatsapp Hola Mundo Store">
        </a>
    </div>
`;

// Función para inyectar el header y footer en el DOM
function cargarTemplate() {
    document.querySelector("header").innerHTML = headerHTML;
    document.querySelector("footer").innerHTML = footerHTML;
    document.querySelector("#whatsapp").innerHTML = whatsappHTML;
}
