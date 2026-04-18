// Gestión del formulario de envío y WhatsApp

// ============ CONFIGURACIÓN ============
const CONFIG_PEDIDOS = {
    // URL del Web App de Google Apps Script
    // Después de desplegar el script, reemplaza esta URL
    GOOGLE_SCRIPT_URL: '',
    
    // Número de WhatsApp (sin espacios ni símbolos, con código de país)
    WHATSAPP_NUMBER: '543515957014'
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shippingForm');
    
    if (form) {
        form.addEventListener('submit', enviarPedidoWhatsApp);
    }
});

async function enviarPedidoWhatsApp(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const datosCliente = {
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
    
    // ============ ENVIAR A GOOGLE SHEETS ============
    await enviarPedidoGoogleSheets({
        cliente: datosCliente,
        productos: cart,
        total: total
    });
    
    // ============ ENVIAR POR WHATSAPP ============
    enviarPorWhatsApp(datosCliente, cart, total);
    
    // Limpiar carrito y redirigir a página de gracias
    localStorage.removeItem('cart');
    
    // Redirigir a la página de agradecimiento
    window.location.href = 'gracias.html';
}

// ============ ENVIAR PEDIDO A GOOGLE SHEETS ============
async function enviarPedidoGoogleSheets(pedido) {
    try {
        const response = await fetch(CONFIG_PEDIDOS.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Importante para Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido)
        });
        
        console.log('✅ Pedido registrado en Google Sheets');
        
    } catch (error) {
        console.error('❌ Error al enviar a Google Sheets:', error);
        // No bloqueamos el proceso si falla Google Sheets
        // El pedido se enviará igualmente por WhatsApp
    }
}

// ============ ENVIAR POR WHATSAPP ============
function enviarPorWhatsApp(datos, cart, total) {
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
        mensaje += `   Precio unitario: $${formatearPrecio(item.precio)}\n`;
        mensaje += `   Subtotal: $${formatearPrecio(item.precio * item.quantity)}\n\n`;
    });
    
    mensaje += `*TOTAL: $${formatearPrecio(total)}*\n\n`;
    mensaje += `*Notas adicionales:*\n${datos.notas}`;
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${CONFIG_PEDIDOS.WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(urlWhatsApp, '_blank');
}

function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}