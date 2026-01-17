document.addEventListener("DOMContentLoaded", cargarTemplate)

const soymarcusHTML = `
            <div class="sidebar_contenido">
                <h3 class="publi-titulo">Transforma tu presencia digital con un sitio web profesional 👇</h3>
                <a href="https://soymarcus.dev"
                    target="_blank">
                    <img loading="lazy" src="/img/banners/banner-soymarcus.png" alt="banner Soy Marcus - Martin Leidreiter" class="banner-publi">
                </a>
            </div>
`;

const vidafreelanceHTML = `
            <div class="sidebar_contenido">
                <h3 class="publi-titulo">Escuchá el NUEVO Podcast: Vida Freelance: Cómo vivir como freelance y no fracasar en el intento 👇</h3>
                <a href="https://vidafreelance.live"
                    target="_blank">
                    <img loading="lazy" src="/img/banners/banner-vidafreelance.png" alt="banner Vida Freelance" class="banner-publi">
                </a>
            </div>
`;

function cargarTemplate() {
    document.querySelector("#soymarcus").innerHTML = soymarcusHTML;
    document.querySelector("#vidafreelance").innerHTML = vidafreelanceHTML;
}