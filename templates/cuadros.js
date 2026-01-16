document.addEventListener("DOMContentLoaded", cargarTemplate)

const cuadrosHTML = `
   <section class="contenedor contenido" id="cuadros">
        <h3 class="titulos">Los elegidos por todos</h3>
        <div class="bloques">

            <div class="bloque">
                <a href="/tienda/cuadros/monokaipro.html">
                    <picture>
                        <source srcset="/img/cuadros/monokai-pro.webp" type="image/webp">
                        <img loading="lazy" src="/img/cuadros/monokai-pro.jpg" alt="Cuadro Hello World - Monokai Pro" class="bloque__imagen ">
                    </picture>
                    
                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">Cuadro Hello World - Monokai Pro</h3>
                        <p class="bloque__precio no-space precio" data-producto="cuadros">$0</p>
                        <div class="bloque__detalle">
                            <p class="detalle">Marcos de distintos colores*</p>
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                                </svg>
                                <b>Envío gratis</b>
                            </p>
                        </div>

                    </div>
                </a>
            </div>

            <div class="bloque">
                <a href="/tienda/cuadros/dracula.html">
                    <picture>
                        <source srcset="/img/cuadros/dracula.webp" type="image/webp">
                        <img loading="lazy" src="/img/cuadros/dracula.jpg" alt="Cuadro Hello World - Drácula" class="bloque__imagen ">
                    </picture>
                    
                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">Cuadro Hello World - Drácula</h3>
                        <p class="bloque__precio no-space precio" data-producto="cuadros">$0</p>
                        <div class="bloque__detalle">
                            <p class="detalle">Marcos de distintos colores*</p>
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                                </svg>
                                <b>Envío gratis</b>
                            </p>
                        </div>

                    </div>
                </a>
            </div>

            <div class="bloque">
                <a href="/tienda/cuadros/gruvbox.html">
                    <picture>
                        <source srcset="/img/cuadros/gruvbox.webp" type="image/webp">
                        <img loading="lazy" src="/img/cuadros/gruvbox.jpg" alt="Cuadro Hello World - Gruvbox" class="bloque__imagen ">
                    </picture>

                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">Cuadro Hello World - Gruvbox</h3>
                        <p class="bloque__precio no-space precio" data-producto="cuadros">$0</p>
                        <div class="bloque__detalle">
                            <p class="detalle">Marcos de distintos colores*</p>
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                                </svg>
                                <b>Envío gratis</b>
                            </p>
                        </div>

                    </div>
                </a>
            </div>

            <div class="bloque">
                <a href="/tienda/cuadros/edicionespecial.html">
                    <picture>
                        <source srcset="/img/cuadros/somos-campeones.webp" type="image/webp">
                        <img loading="lazy" src="/img/cuadros/somos-campeones.jpg" alt="Cuadro Hello World - edición especial" class="bloque__imagen ">
                    </picture>

                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">Cuadro Hello World - edición especial</h3>
                        <p class="bloque__precio no-space precio" data-producto="cuadros">$0</p>
                        <div class="bloque__detalle">
                            <p class="detalle">Marcos de distintos colores*</p>
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                                </svg>
                                <b>Envío gratis</b>
                            </p>
                        </div>

                    </div>
                </a>
            </div>

        </div>
    </section>
`;

function cargarTemplate() {
    document.querySelector("#cuadros").innerHTML = cuadrosHTML;
}