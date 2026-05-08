(function () {
    const endpoint = 'https://script.google.com/macros/s/AKfycbxfbllNgSMKZZ-d_NroRMnDdsT87Oau_WFKzQPPr7f287RVz8udiXxQ0QFQVVb_ANBtRQ/exec';
    let activeModal = null;

    function resetModalState(modal) {
        if (!modal) {
            return;
        }

        const form = modal.querySelector('[data-subscribe-form]');
        const thankYouMessage = modal.querySelector('.thank-you-message');

        if (form) {
            form.style.display = '';
        }

        if (thankYouMessage) {
            thankYouMessage.classList.remove('show');
        }
    }

    function closeModal(modal) {
        if (!modal) {
            return;
        }

        resetModalState(modal);
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        activeModal = null;
    }

    function openModal(modal) {
        if (!modal) {
            return;
        }

        resetModalState(modal);
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        activeModal = modal;

        const input = modal.querySelector('input[type="email"]');
        if (input) {
            input.focus();
        }
    }

    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            openModal(document.getElementById(modalId));
        });
    });

    document.querySelectorAll('.subscribe-modal').forEach(modal => {
        modal.querySelectorAll('[data-modal-close]').forEach(element => {
            element.addEventListener('click', () => {
                closeModal(modal);
            });
        });

        const form = modal.querySelector('[data-subscribe-form]');
        const thankYouMessage = modal.querySelector('.thank-you-message');
        let closeTimer = null;

        if (!form) {
            return;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();
            const data = new FormData(form);

            form.reset();

            if (closeTimer) {
                window.clearTimeout(closeTimer);
            }

            if (thankYouMessage) {
                form.style.display = 'none';
                thankYouMessage.classList.add('show');

                closeTimer = window.setTimeout(() => {
                    closeTimer = null;
                    closeModal(modal);
                }, 1000);
            } else {
                closeModal(modal);
            }

            fetch(endpoint, { method: 'POST', body: data })
                .then(response => console.log('Submitted', response))
                .catch(error => console.error('Error sending form', error));
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && activeModal) {
            closeModal(activeModal);
        }
    });
})();