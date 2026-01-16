document.addEventListener("DOMContentLoaded", cargarTemplate);

const relRemerasHTML = `
    <section class="relacionados separador">
        <h3 class="titulos">Productos relacionados</h3>
                <div class="relacionados_bloques">

                    <div class="relacionados_bloque card">
                        <a href="/tienda/remeras/thisisfine.html">
                            <img loading="lazy" src="/img/remeras/mockup-this-is-fine.png" alt="remera this is fine!"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">This is fine!</h3>
                                <p class="bloque__precio no-space precio" data-producto="remeras">$0</p>
                                <div class="bloque__detalle">
                                    <p class="detalle">Todos los talles disponibles*</p>
                                    <p class="bloque__envio no-space">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-bolt" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
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

                    <div class="relacionados_bloque card">
                        <a href="/tienda/remeras/babydonthurtme.html">
                            <img loading="lazy" src="/img/remeras/mockup-BDHM.png" alt="remera baby dont hurt me"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">Baby dont hurt me</h3>
                                <p class="bloque__precio no-space precio" data-producto="remeras">$0</p>
                                <div class="bloque__detalle">
                                    <p class="detalle">Todos los talles disponibles*</p>
                                    <p class="bloque__envio no-space">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-bolt" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
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

                    <div class="relacionados_bloque card no-movil">
                        <a href="/tienda/remeras/github.html">
                            <img loading="lazy" src="/img/remeras/mockup-github.png" alt="remera github"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">Github - mona</h3>
                                <p class="bloque__precio no-space precio" data-producto="remeras">$0</p>
                                <div class="bloque__detalle">
                                    <p class="detalle">Todos los talles disponibles*</p>
                                    <p class="bloque__envio no-space">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-bolt" width="20" height="20"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#00a650" fill="none"
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
    document.querySelector("#relRemeras").innerHTML = relRemerasHTML;
}
