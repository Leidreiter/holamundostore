// Gestión del formulario de envío y WhatsApp

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shippingForm');
    
    if (form) {
        form.addEventListener('submit', enviarPedidoWhatsApp);
    }
});

function enviarPedidoWhatsApp(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const datos = {
        nombre: formData.get('nombre'),
        telefono: formData.get('telefono'),
        email: formData.get('email'),
        direccion: formData.get('direccion'),
        ciudad: formData.get('ciudad'),
        provincia: formData.get('provincia'),
        codigoPostal: formData.get('codigoPostal'),
        notas: formData.get('notas') || 'Sin notas adicionales'
    };
    
    // Obtener productos del carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
    
    // Guardar el total en localStorage para mostrarlo en la página de gracias
    localStorage.setItem('orderTotal', total.toString());
    
    // Construir mensaje para WhatsApp
    let mensaje = `*NUEVO PEDIDO*\n\n`;
    mensaje += `*Datos del Cliente:*\n`;
    mensaje += `Nombre: ${datos.nombre}\n`;
    mensaje += `Teléfono: ${datos.telefono}\n`;
    mensaje += `Email: ${datos.email}\n\n`;
    
    mensaje += `*Dirección de Envío:*\n`;
    mensaje += `Calle: ${datos.direccion}\n`;
    mensaje += `Ciudad: ${datos.ciudad}\n`;
    mensaje += `Provincia: ${datos.provincia}\n`;
    mensaje += `Código Postal: ${datos.codigoPostal}\n\n`;
    
    mensaje += `*Productos:*\n`;
    cart.forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre}\n`;
        mensaje += `   Cantidad: ${item.quantity}\n`;
        mensaje += `   Precio unitario: ${formatearPrecio(item.precio)}\n`;
        mensaje += `   Subtotal: ${formatearPrecio(item.precio * item.quantity)}\n\n`;
    });
    
    mensaje += `*TOTAL: ${formatearPrecio(total)}*\n\n`;
    mensaje += `*Notas adicionales:*\n${datos.notas}`;
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp (sin espacios ni símbolos)
    const numeroWhatsApp = '545555555555';
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar carrito y redirigir a página de gracias
    localStorage.removeItem('cart');
    
    // Redirigir a la página de agradecimiento
    window.location.href = 'gracias.html';
}

function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}