// Sistema de acordeón para preguntas frecuentes

document.addEventListener('DOMContentLoaded', function() {
    inicializarAcordeon();
});

function inicializarAcordeon() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFaqItem(this);
        });
        
        // Accesibilidad: permitir abrir/cerrar con Enter o Space
        question.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaqItem(this);
            }
        });
    });
}

function toggleFaqItem(questionButton) {
    const faqItem = questionButton.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = questionButton.querySelector('i');
    const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';
    
    // Cerrar todos los otros items (opcional - comenta esta parte si quieres que varios puedan estar abiertos)
    // cerrarTodosLosItems();
    
    if (isExpanded) {
        // Cerrar item
        questionButton.setAttribute('aria-expanded', 'false');
        faqItem.classList.remove('active');
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Abrir item
        questionButton.setAttribute('aria-expanded', 'true');
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

function cerrarTodosLosItems() {
    const allQuestions = document.querySelectorAll('.faq-question');
    
    allQuestions.forEach(question => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.setAttribute('aria-expanded', 'false');
        faqItem.classList.remove('active');
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    });
}

// Función para abrir un item específico por ID (útil para enlaces directos)
function abrirFaqPorId(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
        const question = item.querySelector('.faq-question');
        if (question) {
            toggleFaqItem(question);
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}