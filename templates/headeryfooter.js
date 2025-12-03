// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarTemplate);


{/* <p>🥳 Tu tienda favorita vuelve a operar en 2026 </p> | 
<p>🚀 envíos gratis en compras superiores a $?????? </p> |  
<p>🎨 nuevos diseño disponibles de cuadros, remeras y stickers</p> | 
<p>🎁 con tu primera compra te llevas de regalo una mystery box</p> |  */}

// HTML del header
const headerHTML = `
    <div class="promo-banner">
        <div class="promo-track">
          <div class="promo-content">
            <span>La tienda aún no se encuentra operando</span>
            <span class="separator">|</span>
            <span>PROXIMAMENTE ANUNCIO DE LANZAMIENTO</span>
            <span class="separator">|</span>
            <span>La tienda aún no se encuentra operando</span>
            <span class="separator">|</span>
            <span>PROXIMAMENTE ANUNCIO DE LANZAMIENTO</span>
            <span class="separator">|</span>
            <span>La tienda aún no se encuentra operando</span>
            <span class="separator">|</span>
            <span>PROXIMAMENTE ANUNCIO DE LANZAMIENTO</span>
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
        <div class="iconos contenedor">
            <div class="icono">
                <img loading="lazy" src="/img/icono-pagos.png" alt="icono pagos en Hola Mundo Store" class="icono__imagen">
                <h3>Muchas formas de pago</h3>
                <p class="icono__copy">Trabajo con mercadopago, lo cuál se aceptan todos los medios de pagos
                    de la villetera virtual número 1 de Argentina, para que compres con total confianza.
                </p>
            </div>
            <div class="icono">
                <img loading="lazy" src="/img/icono-envios.png" alt="icono envios en Hola Mundo Store" class="icono__imagen">
                <h3>Envíos a toda Argentina</h3>
                <p class="icono__copy">Envío a toda la Argentina de norte a sur, todos los pedidos salen
                    desde Córdoba, Argentina y pueden variar dependiendo tu ubicación.
                </p>
            </div>
            <div class="icono">
                <img loading="lazy" src="/img/icono-stock.png" alt="icono stock en Hola Mundo Store" class="icono__imagen">
                <h3>Stock siempre disponible</h3>
                <p class="icono__copy">Toda la web opera bajo pedido, compra con total confianza, yo
                    me counicaré contigo personalmente para asegurar que llegué lo que pidas.
                </p>
            </div>
        </div>

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
                    <a href="https://soymarcus.pages.dev" target="_blank"><img src="/img/designby.png" class="designby"></a>
                </div>
            </div>
        </div>

    </footer>
`;
const remerasSidebarHTML = `
    <div class="sidebar_contenido" id="remeras-sidebar">
                <div class="lista__relacionados">

                    <a href="/tienda/remeras/anticodingclub.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/anti-coding.webp" type="image/webp">
                                <img loading="lazy" src="/img/anti-coding.jpg" alt="remera anti coding coding club - Hola Mundo Store" class="miniatura">
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Anti Coding Coding CLub</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/remeras/thisisfine.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/this-is-fine.webp" type="image/webp">
                                <img loading="lazy" src="/img/this-is-fine.jpg" alt="remera this is fine - Hola Mundo Store" class="miniatura">                                
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">This is fine</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/remeras/babydonthurtme.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/baby-dont-hurt-me.webp" type="image/webp">
                                <img loading="lazy" src="/img/baby-dont-hurt-me.jpg" alt="remera baby dont hurt me - Hola Mundo Store" class="miniatura">                                
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Baby dont hurt me</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                    
                    <a href="/tienda/remeras/github.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/github.webp" type="image/webp">
                                <img loading="lazy" src="/img/github.jpg" alt="remera github the octocat- Hola Mundo Store" class="miniatura">
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Mona (Github)</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
`;

// Función para inyectar el header y footer en el DOM
function cargarTemplate() {
    document.querySelector("header").innerHTML = headerHTML;
    document.querySelector("footer").innerHTML = footerHTML;
    document.querySelector("#remeras-sidebar").innerHTML = remerasSidebarHTML;
}
