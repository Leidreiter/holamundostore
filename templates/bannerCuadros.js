document.addEventListener("DOMContentLoaded", cargarTemplate)

const bannerCuadrosHTML = `
    <div class="contenedor banner contenido-banner">
        <div class="banner__imagen">
            <a href="/tienda/cuadros/customtheme.html">
                <picture>
                    <source srcset="/img/banners/banner-personalizado.webp" type="image/webp">
                    <img loading="lazy" src="/img/banners/banner-personalizado.png" alt="banner cuadro personalizado" class="block border">
                </picture>
            </a>
        </div>
        <div class="banner__info">
            <div class="banner__info__icono">
                <img loading="lazy" src="/img/iconos-logos/cuentagotas.png" alt="ícono personalizado" class="block">   
            </div>
            <div class="banner__info__copy">
                <h4 class="no-space b1">Personalizálo</h4>
                <h2 class="no-space b2">Lo hacemos <br>
                    con tu theme</h2>
                <a href="/tienda/cuadros/customtheme.html">
                    <p class="no-space b3">Más info
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </p>
                </a>
            </div>
        </div>
    </div>
`;

function cargarTemplate() {
    document.querySelector("#bannerCuadros").innerHTML = bannerCuadrosHTML;
}