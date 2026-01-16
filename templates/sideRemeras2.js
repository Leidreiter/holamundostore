document.addEventListener("DOMContentLoaded", cargarTemplate)

const sideRemeras2HTML = `
<div class="sidebar_contenido" id="remeras-sidebar">
                <div class="lista__relacionados">

                    <a href="/tienda/remeras/php.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/remeras/mockup-php.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-php.png" alt="remera php - mascot logo" class="miniatura">
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">PHP (mascot logo)</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/remeras/angular.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/remeras/mockup-angular.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-angular.png" alt="remera Angular - mascot logo" class="miniatura">                                
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Angular (mascot logo)</p>
                                </div>
                            </li>
                        </ul>
                    </a>

                    <a href="/tienda/remeras/react.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/remeras/mockup-react.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-react.png" alt="remera React - mascot logo" class="miniatura">                                
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">React (mascot logo)</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                    
                    <a href="/tienda/remeras/vue.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/remeras/mockup-vue.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-vue.png" alt="remera vue - mascot logo" class="miniatura">
                                </picture>
                                </div>
                                <div class="lista__info">
                                    <h3 class="no-space precio" data-producto="remeras">$0</h3>
                                    <p class="bloque__envio no-space">Envío gratis</p>
                                    <p class="no-space">Vue (mascot logo)</p>
                                </div>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
`;

function cargarTemplate() {
    document.querySelector("#sideRemeras2").innerHTML = sideRemeras2HTML;
}