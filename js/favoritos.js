// Página de Mis Favoritos

document.addEventListener('DOMContentLoaded', function() {
    cargarFavoritos();
});

// Obtener favoritos desde localStorage
function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Cargar y renderizar favoritos
function cargarFavoritos() {
    const favoritos = obtenerFavoritos();
    const container = document.getElementById('favoritosContainer');
    
    if (!container) return;
    
    if (favoritos.length === 0) {
        mostrarFavoritosVacios(container);
        return;
    }
    
    // Filtrar productos que existen en el catálogo
    const productosFavoritos = favoritos
        .map(id => productos.find(p => p.id === id))
        .filter(p => p !== undefined);
    
    if (productosFavoritos.length === 0) {
        // Limpiar favoritos inválidos
        localStorage.setItem('favorites', JSON.stringify([]));
        mostrarFavoritosVacios(container);
        return;
    }
    
    const subtitulo = document.getElementById('favoritosSubtitle');
    if (subtitulo) {
        subtitulo.textContent = `Tienes ${productosFavoritos.length} ${productosFavoritos.length === 1 ? 'producto guardado' : 'productos guardados'}`;
    }
    
    container.innerHTML = `
        <div class="favoritos-list">
            ${productosFavoritos.map(producto => `
                <div class="favorito-item" id="favorito-${producto.id}">
                    <a href="producto.html?id=${producto.id}">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="favorito-imagen" loading="lazy">
                    </a>
                    <div class="favorito-info">
                        <a href="producto.html?id=${producto.id}" class="favorito-nombre">${producto.nombre}</a>
                        <p class="favorito-categoria">${producto.categoria}</p>
                        <p class="favorito-precio">$${formatearPrecio(producto.precio)}</p>
                    </div>
                    <div class="favorito-acciones">
                        <a href="producto.html?id=${producto.id}" class="favorito-ver-btn">
                            <i class="fa-solid fa-eye"></i> Ver
                        </a>
                        <button class="favorito-eliminar-btn" onclick="eliminarFavorito(${producto.id})">
                            <i class="fa-solid fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Mostrar estado vacío
function mostrarFavoritosVacios(container) {
    const subtitulo = document.getElementById('favoritosSubtitle');
    if (subtitulo) {
        subtitulo.textContent = '';
    }
    
    container.innerHTML = `
        <div class="favoritos-empty">
            <i class="fa-regular fa-heart"></i>
            <h2>No tienes favoritos aún</h2>
            <p>Explora nuestros productos y guarda los que más te gusten haciendo clic en el ícono de corazón.</p>
            <a href="index.html" class="shop-btn">Explorar productos</a>
        </div>
    `;
}

// Eliminar un favorito
function eliminarFavorito(id) {
    let favoritos = obtenerFavoritos();
    const index = favoritos.indexOf(id);
    
    if (index > -1) {
        favoritos.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favoritos));
    }
    
    // Animación de salida
    const item = document.getElementById(`favorito-${id}`);
    if (item) {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            cargarFavoritos();
            actualizarContadorFavoritosNav();
        }, 300);
    } else {
        cargarFavoritos();
        actualizarContadorFavoritosNav();
    }
}

// Actualizar contador de favoritos en el nav
function actualizarContadorFavoritosNav() {
    const favoritos = obtenerFavoritos();
    const contadores = document.querySelectorAll('.favorites-count');
    contadores.forEach(contador => {
        contador.textContent = favoritos.length;
        if (favoritos.length > 0) {
            contador.style.display = 'flex';
        } else {
            contador.style.display = 'none';
        }
    });
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}
