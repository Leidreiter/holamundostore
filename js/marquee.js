// Marquee promocional - 3 textos en loop continuo

document.addEventListener('DOMContentLoaded', function () {
    const textos = [
        '🤩 Regresa la tienda favorita de todos los devs',
        '🚚 Envío incluído para toda la Argentina',
        '⭐ Nuevos productos disponibles — ¡Descubrí las novedades!'
    ];

    // Crear el contenedor del marquee
    const marqueeBar = document.createElement('div');
    marqueeBar.className = 'marquee-bar';

    // Crear el track que se desplaza
    const marqueeTrack = document.createElement('div');
    marqueeTrack.className = 'marquee-track';

    // Función para generar el bloque de textos con separadores
    function crearBloque() {
        let html = '';
        textos.forEach(function (texto, index) {
            html += '<span class="marquee-item">' + texto + '</span>';

        }); 
        return html;
        
    }

    // Duplicar el contenido para lograr el loop infinito sin cortes
    marqueeTrack.innerHTML = crearBloque() + crearBloque();

    marqueeBar.appendChild(marqueeTrack);

    // Insertar el marquee como primer elemento del body (antes del header)
    document.body.insertBefore(marqueeBar, document.body.firstChild);
});
