document.addEventListener("DOMContentLoaded", cargarTemplate)

const soymarcusHTML = `
            <div class="sidebar_contenido">
                <h3>Transforma tu presencia digital con un sitio web profesional 👇</h3>
                <a href="https://soymarcus.dev"
                    target="_blank">
                    <img loading="lazy" src="/img/banners/BannerWeb.png" alt="banner Soy Marcus - Martin Leidreiter" class="banner-ml">
                </a>
            </div>
`;

function cargarTemplate() {
    document.querySelector("#soymarcus").innerHTML = soymarcusHTML;
}