(function () {
    const endpoint = 'https://script.google.com/macros/s/AKfycbxfbllNgSMKZZ-d_NroRMnDdsT87Oau_WFKzQPPr7f287RVz8udiXxQ0QFQVVb_ANBtRQ/exec';
    let activeModal = null;

    function closeModal(modal) {
        if (!modal) {
            return;
        }

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        activeModal = null;
    }

    function openModal(modal) {
        if (!modal) {
            return;
        }

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

        if (!form || !thankYouMessage) {
            return;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();
            const data = new FormData(form);

            form.reset();
            thankYouMessage.classList.add('show');

            window.setTimeout(() => {
                thankYouMessage.classList.remove('show');
                closeModal(modal);
            }, 3000);

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