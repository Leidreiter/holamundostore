// Página de detalle de producto con galería de imágenes y zoom

let imagenActualIndex = 0;
let zoomActivo = false;

document.addEventListener('DOMContentLoaded', function() {
    cargarDetalleProducto();
    cargarProductosRelacionados();
});

// Obtener el ID del producto desde la URL
function obtenerIdProducto() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Cargar detalle del producto
function cargarDetalleProducto() {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto) {
        mostrarProductoNoEncontrado();
        return;
    }
    
    // Actualizar título de la página
    document.title = `${producto.nombre} - Mi Tienda Online`;
    
    // Actualizar breadcrumb
    const breadcrumbProduct = document.getElementById('breadcrumbProduct');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = producto.nombre;
    }
    
    // Renderizar detalle del producto
    renderizarDetalleProducto(producto);
}

// Renderizar el detalle completo del producto
function renderizarDetalleProducto(producto) {
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
    
    // Determinar estado del stock
    let stockClass = '';
    let stockText = '';
    if (producto.stock > 10) {
        stockClass = '';
        stockText = `En stock (${producto.stock} disponibles)`;
    } else if (producto.stock > 0) {
        stockClass = 'low';
        stockText = `¡Últimas unidades! (${producto.stock} disponibles)`;
    } else {
        stockClass = 'out';
        stockText = 'Agotado';
    }
    
    // Navegación entre productos
    const prevProduct = productos.find(p => p.id === producto.id - 1);
    const nextProduct = productos.find(p => p.id === producto.id + 1);
    
    // Usar galería si existe, sino usar imagen principal
    const imagenesGaleria = producto.galeria && producto.galeria.length > 0 
        ? producto.galeria 
        : [producto.imagen];
    
    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image-container">
                <!-- Imagen principal -->
                <div class="main-image-wrapper">
                    <img src="${imagenesGaleria[0]}" 
                         alt="${producto.nombre}" 
                         class="product-detail-image" 
                         id="mainProductImage"
                         onclick="toggleZoom()">
                    
                    ${imagenesGaleria.length > 1 ? `
                        <button class="gallery-nav-btn prev-img" onclick="cambiarImagen(-1)" aria-label="Imagen anterior">
                            ‹
                        </button>
                        <button class="gallery-nav-btn next-img" onclick="cambiarImagen(1)" aria-label="Imagen siguiente">
                            ›
                        </button>
                        
                        <div class="image-counter">
                            <span id="imageCounter">1 / ${imagenesGaleria.length}</span>
                        </div>
                    ` : ''}
                    
                    <div class="zoom-hint">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <span>Click para ampliar</span>
                    </div>
                </div>
                
                <!-- Miniaturas -->
                ${imagenesGaleria.length > 1 ? `
                    <div class="thumbnails-container">
                        ${imagenesGaleria.map((img, idx) => `
                            <img src="${img}" 
                                 alt="${producto.nombre} - Vista ${idx + 1}" 
                                 class="thumbnail ${idx === 0 ? 'active' : ''}" 
                                 onclick="seleccionarImagen(${idx})"
                                 loading="lazy">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="product-detail-info">
                <span class="product-category">${producto.categoria}</span>
                <h1>${producto.nombre}</h1>
                
                <p class="product-stock ${stockClass}">${stockText}</p>
                
                <p class="product-detail-price">$${formatearPrecio(producto.precio)}</p>
                
                <p class="product-detail-description">${producto.descripcionDetallada}</p>
                
                <div class="product-features">
                    <h3>Características:</h3>
                    <ul>
                        ${producto.caracteristicas.map(caracteristica => `
                            <li>${caracteristica}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="quantity-selector">
                    <label for="quantity">Cantidad:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cambiarCantidad(-1)" aria-label="Disminuir cantidad">-</button>
                        <span class="quantity-value" id="quantityValue">1</span>
                        <button class="quantity-btn" onclick="cambiarCantidad(1)" aria-label="Aumentar cantidad">+</button>
                    </div>
                </div>
                
                <div class="product-actions-detail">
                    <button class="btn-add-cart" id="btnAddCart" onclick="agregarAlCarritoDetalle(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>
                        ${producto.stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
                    </button>
                    <a href="carrito.html" class="btn-go-cart" id="btnGoCart" style="display: none;">
                        Ir al Carrito →
                    </a>
                    <button class="btn-buy-now" onclick="comprarAhora(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>
                        Comprar Ahora
                    </button>
                </div>
                
                <div class="product-navigation">
                    ${prevProduct ? `
                        <a href="producto.html?id=${prevProduct.id}" class="nav-product-btn prev">
                            ← ${prevProduct.nombre}
                        </a>
                    ` : '<span></span>'}
                    
                    ${nextProduct ? `
                        <a href="producto.html?id=${nextProduct.id}" class="nav-product-btn next">
                            ${nextProduct.nombre} →
                        </a>
                    ` : '<span></span>'}
                </div>
            </div>
        </div>
    `;
}

// Cambiar imagen en la galería
function cambiarImagen(direccion) {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.galeria || producto.galeria.length <= 1) return;
    
    imagenActualIndex += direccion;
    
    // Ciclo infinito
    if (imagenActualIndex < 0) {
        imagenActualIndex = producto.galeria.length - 1;
    }
    if (imagenActualIndex >= producto.galeria.length) {
        imagenActualIndex = 0;
    }
    
    actualizarImagenPrincipal();
}

// Seleccionar imagen desde miniatura
function seleccionarImagen(index) {
    imagenActualIndex = index;
    actualizarImagenPrincipal();
}

// Actualizar imagen principal y miniaturas
function actualizarImagenPrincipal() {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.galeria) return;
    
    const mainImage = document.getElementById('mainProductImage');
    const imageCounter = document.getElementById('imageCounter');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        // Efecto de transición
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = producto.galeria[imagenActualIndex];
            mainImage.style.opacity = '1';
        }, 200);
    }
    
    if (imageCounter) {
        imageCounter.textContent = `${imagenActualIndex + 1} / ${producto.galeria.length}`;
    }
    
    // Actualizar miniaturas activas
    thumbnails.forEach((thumb, idx) => {
        if (idx === imagenActualIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Toggle zoom en la imagen
function toggleZoom() {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto) return;
    
    const imagenesGaleria = producto.galeria && producto.galeria.length > 0 
        ? producto.galeria 
        : [producto.imagen];
    
    // Crear modal de zoom
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    zoomModal.innerHTML = `
        <div class="zoom-overlay" onclick="cerrarZoom()"></div>
        <div class="zoom-container">
            <button class="zoom-close" onclick="cerrarZoom()" aria-label="Cerrar zoom">
                <i class="fa-solid fa-xmark"></i>
            </button>
            
            ${imagenesGaleria.length > 1 ? `
                <button class="zoom-nav-btn prev" onclick="event.stopPropagation(); cambiarImagenZoom(-1)" aria-label="Imagen anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="zoom-nav-btn next" onclick="event.stopPropagation(); cambiarImagenZoom(1)" aria-label="Imagen siguiente">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            ` : ''}
            
            <div class="zoom-image-wrapper">
                <img src="${imagenesGaleria[imagenActualIndex]}" 
                     alt="${producto.nombre}" 
                     class="zoom-image" 
                     id="zoomImage"
                     draggable="false">
            </div>
            
            ${imagenesGaleria.length > 1 ? `
                <div class="zoom-counter">
                    <span id="zoomCounter">${imagenActualIndex + 1} / ${imagenesGaleria.length}</span>
                </div>
                
                <div class="zoom-thumbnails">
                    ${imagenesGaleria.map((img, idx) => `
                        <img src="${img}" 
                             alt="${producto.nombre} - Vista ${idx + 1}" 
                             class="zoom-thumbnail ${idx === imagenActualIndex ? 'active' : ''}" 
                             onclick="event.stopPropagation(); seleccionarImagenZoom(${idx})">
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(zoomModal);
    document.body.style.overflow = 'hidden';
    zoomActivo = true;
    
    // Animación de entrada
    setTimeout(() => {
        zoomModal.classList.add('active');
    }, 10);
    
    // Habilitar zoom con mouse y touch
    const zoomImg = document.getElementById('zoomImage');
    if (zoomImg) {
        habilitarZoomInteractivo(zoomImg);
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', manejarTeclasZoom);
}

// Cerrar zoom
function cerrarZoom() {
    const zoomModal = document.querySelector('.zoom-modal');
    if (zoomModal) {
        zoomModal.classList.remove('active');
        setTimeout(() => {
            zoomModal.remove();
            document.body.style.overflow = '';
            zoomActivo = false;
        }, 300);
    }
    document.removeEventListener('keydown', manejarTeclasZoom);
}

// Cambiar imagen en modo zoom
function cambiarImagenZoom(direccion) {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.galeria || producto.galeria.length <= 1) return;
    
    imagenActualIndex += direccion;
    
    if (imagenActualIndex < 0) {
        imagenActualIndex = producto.galeria.length - 1;
    }
    if (imagenActualIndex >= producto.galeria.length) {
        imagenActualIndex = 0;
    }
    
    actualizarImagenZoom();
}

// Seleccionar imagen desde miniatura en zoom
function seleccionarImagenZoom(index) {
    imagenActualIndex = index;
    actualizarImagenZoom();
}

// Actualizar imagen en modo zoom
function actualizarImagenZoom() {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.galeria) return;
    
    const zoomImage = document.getElementById('zoomImage');
    const zoomCounter = document.getElementById('zoomCounter');
    const zoomThumbnails = document.querySelectorAll('.zoom-thumbnail');
    
    if (zoomImage) {
        zoomImage.style.opacity = '0';
        zoomImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            zoomImage.src = producto.galeria[imagenActualIndex];
            zoomImage.style.opacity = '1';
            zoomImage.style.transform = 'scale(1)';
            
            // Resetear zoom interactivo
            zoomImage.style.cursor = 'zoom-in';
            if (zoomImage.dataset.zoomed === 'true') {
                zoomImage.dataset.zoomed = 'false';
            }
        }, 200);
    }
    
    if (zoomCounter) {
        zoomCounter.textContent = `${imagenActualIndex + 1} / ${producto.galeria.length}`;
    }
    
    zoomThumbnails.forEach((thumb, idx) => {
        if (idx === imagenActualIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Habilitar zoom interactivo en la imagen
function habilitarZoomInteractivo(img) {
    let zoomed = false;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!zoomed) {
            // Hacer zoom
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            img.style.transform = 'scale(2)';
            img.style.cursor = 'zoom-out';
            img.dataset.zoomed = 'true';
            zoomed = true;
        } else {
            // Quitar zoom
            img.style.transform = 'scale(1) translate(0, 0)';
            img.style.cursor = 'zoom-in';
            img.dataset.zoomed = 'false';
            zoomed = false;
            posX = 0;
            posY = 0;
        }
    });
    
    // Drag para mover la imagen zoomeada
    img.addEventListener('mousedown', function(e) {
        if (zoomed) {
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
            img.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging && zoomed) {
            posX = e.clientX - startX;
            posY = e.clientY - startY;
            img.style.transform = `scale(2) translate(${posX}px, ${posY}px)`;
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            img.style.cursor = 'zoom-out';
        }
    });
    
    // Soporte para touch en móvil
    img.addEventListener('touchstart', function(e) {
        if (zoomed) {
            const touch = e.touches[0];
            startX = touch.clientX - posX;
            startY = touch.clientY - posY;
        }
    });
    
    img.addEventListener('touchmove', function(e) {
        if (zoomed) {
            e.preventDefault();
            const touch = e.touches[0];
            posX = touch.clientX - startX;
            posY = touch.clientY - startY;
            img.style.transform = `scale(2) translate(${posX}px, ${posY}px)`;
        }
    });
}

// Manejar teclas en modo zoom
function manejarTeclasZoom(e) {
    if (!zoomActivo) return;
    
    switch(e.key) {
        case 'Escape':
            cerrarZoom();
            break;
        case 'ArrowLeft':
            cambiarImagenZoom(-1);
            break;
        case 'ArrowRight':
            cambiarImagenZoom(1);
            break;
    }
}

// Control de cantidad
let cantidadSeleccionada = 1;

function cambiarCantidad(cambio) {
    const productoId = obtenerIdProducto();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto) return;
    
    cantidadSeleccionada += cambio;
    
    // Limitar entre 1 y stock disponible
    if (cantidadSeleccionada < 1) cantidadSeleccionada = 1;
    if (cantidadSeleccionada > producto.stock) cantidadSeleccionada = producto.stock;
    
    // Actualizar display
    const quantityDisplay = document.getElementById('quantityValue');
    if (quantityDisplay) {
        quantityDisplay.textContent = cantidadSeleccionada;
    }
}

// Agregar al carrito desde detalle
function agregarAlCarritoDetalle(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += cantidadSeleccionada;
    } else {
        cart.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            quantity: cantidadSeleccionada
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
    mostrarNotificacion(`${cantidadSeleccionada} ${cantidadSeleccionada === 1 ? 'producto agregado' : 'productos agregados'} al carrito`);
    
    // Mostrar botón "Ir al Carrito"
    const btnAddCart = document.getElementById('btnAddCart');
    const btnGoCart = document.getElementById('btnGoCart');
    
    if (btnAddCart && btnGoCart) {
        btnAddCart.style.display = 'none';
        btnGoCart.style.display = 'inline-flex';
    }
    
    // Resetear cantidad
    cantidadSeleccionada = 1;
    const quantityDisplay = document.getElementById('quantityValue');
    if (quantityDisplay) {
        quantityDisplay.textContent = '1';
    }
}

// Comprar ahora
function comprarAhora(id) {
    agregarAlCarritoDetalle(id);
    setTimeout(() => {
        window.location.href = 'carrito.html';
    }, 500);
}

// Cargar productos relacionados
function cargarProductosRelacionados() {
    const productoId = obtenerIdProducto();
    const productoActual = productos.find(p => p.id === productoId);
    
    if (!productoActual) return;
    
    let relacionados = productos.filter(p => 
        p.id !== productoId && p.categoria === productoActual.categoria
    );
    
    if (relacionados.length < 3) {
        const otros = productos.filter(p => 
            p.id !== productoId && !relacionados.includes(p)
        );
        relacionados = [...relacionados, ...otros];
    }
    
    relacionados = relacionados.slice(0, 3);
    
    const grid = document.getElementById('relatedProducts');
    if (!grid) return;
    
    grid.innerHTML = relacionados.map(producto => `
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
                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})" aria-label="Agregar ${producto.nombre} al carrito">
                    Agregar al Carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Mostrar producto no encontrado
function mostrarProductoNoEncontrado() {
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="empty-cart">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe o ha sido eliminado</p>
            <a href="index.html" class="shop-btn">Volver a la tienda</a>
        </div>
    `;
}

// Notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}