// Gestión del carrito de compras

// Obtener carrito del localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Guardar carrito en localStorage
function guardarCarrito(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
}

// Renderizar items del carrito
function renderizarCarrito() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    const cart = obtenerCarrito();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para comenzar tu compra</p>
                <a href="index.html" class="shop-btn">Ir a la tienda</a>
            </div>
        `;
        actualizarTotales();
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.imagen}" alt="${item.nombre}" class="item-image" loading="lazy">
            <div class="item-details">
                <h3 class="item-title">${item.nombre}</h3>
                <p class="item-price">$${formatearPrecio(item.precio)}</p>
                <div class="item-controls">
                    <button class="qty-btn" onclick="actualizarCantidad(${item.id}, -1)" aria-label="Disminuir cantidad">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="actualizarCantidad(${item.id}, 1)" aria-label="Aumentar cantidad">+</button>
                    <button class="remove-btn" onclick="eliminarDelCarrito(${item.id})" aria-label="Eliminar ${item.nombre}">Eliminar</button>
                </div>
            </div>
        </div>
    `).join('');

    actualizarTotales();
}

// Actualizar cantidad de un producto
function actualizarCantidad(id, cambio) {
    let cart = obtenerCarrito();
    const item = cart.find(i => i.id === id);

    if (item) {
        item.quantity += cambio;
        
        if (item.quantity <= 0) {
            eliminarDelCarrito(id);
            return;
        }

        guardarCarrito(cart);
        renderizarCarrito();
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    let cart = obtenerCarrito();
    cart = cart.filter(item => item.id !== id);
    guardarCarrito(cart);
    renderizarCarrito();
}

// Actualizar totales
function actualizarTotales() {
    const cart = obtenerCarrito();
    const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    if (subtotalElement) {
        subtotalElement.textContent = `$${formatearPrecio(subtotal)}`;
    }

    if (totalElement) {
        totalElement.textContent = `$${formatearPrecio(subtotal)}`;
    }

    // Habilitar/deshabilitar botón de checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Mostrar formulario de checkout
function mostrarFormularioCheckout() {
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (checkoutForm && checkoutBtn) {
        checkoutForm.classList.remove('hidden');
        checkoutBtn.style.display = 'none';
        
        // Scroll al formulario
        checkoutForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Event listener para el botón de checkout
document.addEventListener('DOMContentLoaded', function() {
    renderizarCarrito();
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', mostrarFormularioCheckout);
    }
});