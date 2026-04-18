/**
 * Popup al detectar intención de abandonar el sitio (cursor hacia la barra del navegador).
 * No usa beforeunload: en sitios multipágina molestaría al cambiar de página interna.
 */
(function () {
    const STORAGE_KEY = 'exitIntentModalShown';
    const body = document.body;

    if (body.dataset.noExitPopup !== undefined) {
        return;
    }

    let modalEl = null;
    let previousFocus = null;

    function isFinePointer() {
        return window.matchMedia('(pointer: fine)').matches;
    }

    function lockScroll(lock) {
        document.documentElement.classList.toggle('exit-intent-locked', lock);
    }

    function closeModal() {
        if (!modalEl) return;
        modalEl.classList.remove('active');
        modalEl.setAttribute('aria-hidden', 'true');
        lockScroll(false);
        if (previousFocus && typeof previousFocus.focus === 'function') {
            previousFocus.focus();
        }
    }

    function openModal() {
        if (!modalEl) return;
        previousFocus = document.activeElement;
        modalEl.classList.add('active');
        modalEl.setAttribute('aria-hidden', 'false');
        lockScroll(true);
        const btn = modalEl.querySelector('.exit-intent__cta');
        if (btn) btn.focus();
    }

    function tryShowExitIntent() {
        if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
        if (!isFinePointer()) return;
        sessionStorage.setItem(STORAGE_KEY, '1');
        openModal();
    }

    function onDocumentMouseLeave(e) {
        if (e.clientY > 0) return;
        tryShowExitIntent();
    }

    function buildModal() {
        const wrap = document.createElement('div');
        wrap.className = 'exit-intent-modal';
        wrap.setAttribute('role', 'dialog');
        wrap.setAttribute('aria-modal', 'true');
        wrap.setAttribute('aria-labelledby', 'exit-intent-title');
        wrap.setAttribute('aria-hidden', 'true');
        wrap.innerHTML = `
            <div class="exit-intent-overlay" data-exit-close tabindex="-1"></div>
            <div class="exit-intent-dialog">
                <button type="button" class="exit-intent-close" aria-label="Cerrar">&times;</button>
                <h2 id="exit-intent-title">¿Te vas tan pronto?</h2>
                <p>Antes de irte: envíos a todo el país y ofertas en la tienda. ¿Quieres echar un vistazo?</p>
                <div class="exit-intent-actions">
                    <a href="index.html#tienda" class="exit-intent__cta">Ver productos</a>
                    <button type="button" class="exit-intent__secondary" data-exit-close>Seguir navegando</button>
                </div>
            </div>
        `;
        wrap.querySelectorAll('[data-exit-close]').forEach((el) => {
            el.addEventListener('click', closeModal);
        });
        wrap.querySelector('.exit-intent-close').addEventListener('click', closeModal);
        wrap.querySelector('.exit-intent__cta').addEventListener('click', closeModal);
        return wrap;
    }

    function onKeyDown(e) {
        if (e.key === 'Escape' && modalEl && modalEl.classList.contains('active')) {
            closeModal();
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        modalEl = buildModal();
        document.body.appendChild(modalEl);

        document.documentElement.addEventListener('mouseleave', onDocumentMouseLeave);

        document.addEventListener('keydown', onKeyDown);
    });
})();
