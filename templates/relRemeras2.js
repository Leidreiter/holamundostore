document.addEventListener("DOMContentLoaded", cargarTemplate);

const relRemeras2HTML = `
    <section class="relacionados separador">
        <h3 class="titulos">Productos relacionados</h3>
                <div class="relacionados_bloques">

                    <div class="relacionados_bloque card">
                        <a href="/tienda/remeras/html.html">
                            <img loading="lazy" src="/img/remeras/mockup-html.png" alt="remera HTML - mascot logo"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">Remera HTML (mascot logo)</h3>
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
                        <a href="/tienda/remeras/javascript.html">
                            <img loading="lazy" src="/img/remeras/mockup-javascript.png" alt="remera javascript - mascot logo"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">Remera JavaScript (mascot logo)</h3>
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
                        <a href="/tienda/remeras/python.html">
                            <img loading="lazy" src="/img/remeras/mockup-python.png" alt="remera python - mascot logo"
                                class="bloque__imagen ">
                            <div class="bloque__info">
                                <h3 class="bloque__nombre no-space">Remera python (mascot logo)</h3>
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
    document.querySelector("#relRemeras2").innerHTML = relRemeras2HTML;
}







