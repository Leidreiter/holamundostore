// Página de agradecimiento - mostrar monto total y funcionalidad de copiar alias

document.addEventListener('DOMContentLoaded', function() {
    mostrarMontoTotal();
});

// Mostrar el monto total del pedido
function mostrarMontoTotal() {
    const totalAmountElement = document.getElementById('totalAmount');
    
    if (!totalAmountElement) return;
    
    // Obtener el total del localStorage (guardado desde el formulario)
    const orderTotal = localStorage.getItem('orderTotal');
    
    if (orderTotal) {
        const total = parseFloat(orderTotal);
        totalAmountElement.textContent = `$${formatearPrecio(total)}`;
    } else {
        // Si no hay total guardado, calcular del carrito
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
        totalAmountElement.textContent = `$${formatearPrecio(total)}`;
    }
}

// Copiar alias al portapapeles
function copiarAlias() {
    const alias = 'hola.mundo.2023';
    const copyBtn = document.querySelector('.copy-btn');
    
    // Usar la API del portapapeles
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(alias)
            .then(() => {
                mostrarExitoCopia(copyBtn);
            })
            .catch(() => {
                copiarConFallback(alias, copyBtn);
            });
    } else {
        copiarConFallback(alias, copyBtn);
    }
}

// Método alternativo para copiar (fallback)
function copiarConFallback(text, btn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        mostrarExitoCopia(btn);
    } catch (err) {
        alert('No se pudo copiar el alias. Por favor, cópialo manualmente: ' + text);
    }
    
    document.body.removeChild(textArea);
}

// Mostrar feedback visual al copiar
function mostrarExitoCopia(btn) {
    const originalText = btn.textContent;
    btn.textContent = '¡Copiado!';
    btn.classList.add('copied');
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
    }, 2000);
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}