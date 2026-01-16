document.addEventListener("DOMContentLoaded", cargarTemplate)

const sideRemerasHTML = `
<div class="sidebar_contenido" id="remeras-sidebar">
                <div class="lista__relacionados">

                    <a href="/tienda/remeras/anticodingclub.html">
                        <ul class="caracteristicas__lista no-space">
                            <li class="lista">
                                <div class="lista__miniatura">
                                <picture>
                                <source srcset="/img/remeras/mockup-anti-coding.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-anti-coding.png" alt="remera anti coding coding club - Hola Mundo Store" class="miniatura">
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
                                <source srcset="/img/remeras/mockup-this-is-fine.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-this-is-fine.png" alt="remera this is fine - Hola Mundo Store" class="miniatura">                                
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
                                <source srcset="/img/remeras/mockup-BDHM.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-BDHM.png" alt="remera baby dont hurt me - Hola Mundo Store" class="miniatura">                                
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
                                <source srcset="/img/remeras/mockup-github.webp" type="image/webp">
                                <img loading="lazy" src="/img/remeras/mockup-github.png" alt="remera github the octocat- Hola Mundo Store" class="miniatura">
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

function cargarTemplate() {
    document.querySelector("#sideRemeras").innerHTML = sideRemerasHTML;
}