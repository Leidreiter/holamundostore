// Renderizar productos por categorías en el index

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductosPorCategoria('cuadros', 'gridCat1');
    renderizarProductosPorCategoria('remeras', 'gridCat2');
    renderizarProductosPorCategoria('deskpads', 'gridCat3');
    renderizarProductosPorCategoria('otros', 'gridCat4');
});

function renderizarProductosPorCategoria(categoria, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const productosFiltrados = productos.filter(
        producto => producto.categoria === categoria
    );

    // Mostrar todos los productos de la categoría
    grid.innerHTML = productosFiltrados.map(producto => `
        <article class="product-card">
            <a href="producto.html?id=${producto.id}" class="product-link">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <p class="product-price">$${formatearPrecio(producto.precio)}</p>
                </div>
            </a>

            <div class="product-actions">
                <button class="add-to-cart-btn"
                    onclick="window.location.href='producto.html?id=${producto.id}'"
                    aria-label="Ver detalles de ${producto.nombre}">
                    Ver producto
                </button>

                <button class="add-to-cart-btn"
                    onclick="agregarAlCarrito(${producto.id})"
                    aria-label="Agregar ${producto.nombre} al carrito">
                    Agregar al carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Función auxiliar de formateo
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}