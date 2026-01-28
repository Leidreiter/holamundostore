// Gestión del formulario de contacto - WhatsApp

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', enviarContactoWhatsApp);
    }
});

function enviarContactoWhatsApp(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre').trim();
    const mensaje = formData.get('mensaje').trim();
    
    // Validación básica
    if (!nombre || !mensaje) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Construir mensaje para WhatsApp
    let mensajeWhatsApp = `*CONSULTA DESDE LA WEB*\n\n`;
    mensajeWhatsApp += `*Nombre:* ${nombre}\n\n`;
    mensajeWhatsApp += `*Mensaje:*\n${mensaje}`;
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    // Número de WhatsApp
    const numeroWhatsApp = '545555555555';
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar formulario después de enviar
    e.target.reset();
    
    // Mostrar mensaje de confirmación
    mostrarConfirmacion();
}

function mostrarConfirmacion() {
    // Crear overlay de confirmación
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Crear mensaje de confirmación
    const mensaje = document.createElement('div');
    mensaje.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        text-align: center;
        max-width: 400px;
        margin: 1rem;
        animation: slideUp 0.3s ease-out;
    `;
    
    mensaje.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h2 style="color: #22c55e; margin-bottom: 1rem;">¡Mensaje Enviado!</h2>
        <p style="color: #64748b; margin-bottom: 1.5rem;">
            Tu consulta se ha abierto en WhatsApp. Te responderemos lo antes posible.
        </p>
        <button onclick="cerrarConfirmacion()" style="
            padding: 0.75rem 2rem;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
        ">Cerrar</button>
    `;
    
    overlay.appendChild(mensaje);
    document.body.appendChild(overlay);
    
    // Hacer disponible globalmente la función de cerrar
    window.cerrarConfirmacion = function() {
        overlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => overlay.remove(), 300);
    };
    
    // Cerrar al hacer clic fuera del mensaje
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            window.cerrarConfirmacion();
        }
    });
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);