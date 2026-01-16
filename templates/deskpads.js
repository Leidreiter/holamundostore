document.addEventListener("DOMContentLoaded", cargarTemplate)

const deskpadsHTML = `
    <section class="contenedor contenido" id="deskpads">

        <h3 class="titulos">Tu lugar, tu setup</h3>
        <div class="bloques">

            <div class="bloque">
                <a href="/tienda/deskpads/monokaipro.html">
                    <picture>
                        <source srcset="/img/deskpads/hw3.webp" type="image/webp">
                        <img loading="lazy" src="/img/deskpads/hw3.png" alt="deskpad hello world - monokai pro" class="bloque__imagen ">
                    </picture>
                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">DeskPad Hello World - Monokai Pro</h3>
                        <p class="bloque__precio no-space precio" data-producto="deskpads">$0</p>
                        <div class="bloque__detalle">
                            <!--<p class="detalle">Marcos de distintos colores*</p>-->
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
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
                <a href="/tienda/deskpads/dracula.html">
                    <picture>
                        <source srcset="/img/deskpads/hw4.webp" type="image/webp">
                        <img loading="lazy" src="/img/deskpads/hw4.png" alt="desk pad hello world - drácula theme" class="bloque__imagen ">
                    </picture>
                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">DeskPad Hello World - Drácula theme</h3>
                        <p class="bloque__precio no-space precio" data-producto="deskpads">$0</p>
                        <div class="bloque__detalle">
                            <!--<p class="detalle">Marcos de distintos colores*</p>-->
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
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
                <a href="/tienda/deskpads/gruvbox.html">
                    <picture>
                        <source srcset="/img/deskpads/hw2.webp" type="image/webp">
                        <img loading="lazy" src="/img/deskpads/hw2.png" alt="deskpad hello world - gruvbox theme" class="bloque__imagen ">
                    </picture>
                <div class="bloque__info">
                    <h3 class="bloque__nombre no-space">DeskPad Hello World - Gruvbox</h3>
                    <p class="bloque__precio no-space precio" data-producto="deskpads">$0</p>
                    <div class="bloque__detalle">
                        <!--<p class="detalle">Marcos de distintos colores*</p>-->
                        <p class="bloque__envio no-space">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
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
                <a href="/tienda/deskpads/customtheme.html">
                    <picture>
                        <source srcset="/img/deskpads/hw1.webp" type="image/webp">
                        <img loading="lazy" src="/img/deskpads/hw1.png" alt="deskpad hello world - personalizado" class="bloque__imagen ">
                    </picture>
                    <div class="bloque__info">
                        <h3 class="bloque__nombre no-space">DeskPad Hello World - personalizado</h3>
                        <p class="bloque__precio no-space precio" data-producto="deskpadsCustom">$0</p>
                        <div class="bloque__detalle">
                            <!--<p class="detalle">Marcos de distintos colores*</p>-->
                            <p class="bloque__envio no-space">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
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
    document.querySelector("#deskpads").innerHTML = deskpadsHTML;
}