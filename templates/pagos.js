document.addEventListener("DOMContentLoaded", cargarTemplate)

const pagosHTML = `
<div class="sidebar_contenido">
                <h3>Medios de pago</h3>
                <p>Todas tus compras con tu cuenta de MercadoPago</p>
                <img loading="lazy" src="/img/iconos-logos/mercadopago.svg" alt="logo mercadopago" class="mercadopago">
                <p>Tarjetas de crédito</p>
                <div class="sidebar__logos">
                    <img loading="lazy" src="/img/iconos-logos/visa.svg" alt="visa crédito">
                    <img loading="lazy" src="/img/iconos-logos/amex.svg" alt="american express">
                    <img loading="lazy" src="/img/iconos-logos/mastercard.svg" alt="martercard">
                    <img loading="lazy" src="/img/iconos-logos/naranja.svg" alt="tarjeta naranja">
                </div>
                <p>Tarjetas de débito</p>
                <div class="sidebar__logos">
                    <img loading="lazy" src="/img/iconos-logos/visa-debito.svg" alt="visa débito">
                    <img loading="lazy" src="/img/iconos-logos/maestro.svg" alt="maestro">
                    <img loading="lazy" src="/img/iconos-logos/cabal-debito.svg" alt="cabal débito">
                    <img loading="lazy" src="/img/iconos-logos/maestro.svg" alt="maestro">
                </div>
                <p>Efectivo</p>
                <div class="sidebar__logos">
                    <img loading="lazy" src="/img/iconos-logos/pagofacil.svg" alt="pagofácil">
                    <img loading="lazy" src="/img/iconos-logos/rapipago.svg" alt="rapipago">
                </div>
</div>
`;

function cargarTemplate() {
    document.querySelector("#pagos").innerHTML = pagosHTML;
}