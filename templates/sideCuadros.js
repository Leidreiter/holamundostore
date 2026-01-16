document.addEventListener("DOMContentLoaded", cargarTemplate)

const sideCuadrosHTML = `
<div class="sidebar_contenido">
                <div class="lista__relacionados">

                    <a href="/tienda/cuadros/monokaipro.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                    <img loading="lazy" src="/img/cuadros/monokai-pro.jpg"
                                        alt="Cuadro Hello World - Monokai Pro" class="miniatura">
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="cuadros">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Cuadro Hello World - Monokai Pro</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/cuadros/dracula.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                    <img loading="lazy" src="/img/cuadros/dracula.jpg" alt="Cuadro Hello World - Drácula"
                                        class="miniatura">
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="cuadros">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Cuadro Hello World - Drácula</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/cuadros/gruvbox.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                    <img loading="lazy" src="/img/cuadros/gruvbox.jpg"
                                        alt="Cuadro Hello World - Gruvbox" class="miniatura">
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="cuadros">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Cuadro Hello World - Gruvbox</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/cuadros/edicionespecial.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                    <img loading="lazy" src="/img/cuadros/somos-campeones.jpg"
                                        alt="Cuadro Hello World - edición especial" class="miniatura">
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="cuadros">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Cuadro Hello World - edición especial</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                    <a href="/tienda/cuadros/customtheme.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                    <img loading="lazy" src="/img/cuadros/custom.png" alt="Cuadro Hello World - personalizado"
                                        class="miniatura">
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="cuadrosCustom">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Cuadro Hello World - Personalizado</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
`;

function cargarTemplate() {
    document.querySelector("#sideCuadros").innerHTML = sideCuadrosHTML;
}