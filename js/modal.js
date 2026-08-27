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

        modal.classList.remove('is-thanking');
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

    function countryFlagForName(countryName) {
        const flagMap = {
            Australia: '🇦🇺',
            Brazil: '🇧🇷',
            Canada: '🇨🇦',
            France: '🇫🇷',
            Germany: '🇩🇪',
            India: '🇮🇳',
            Italy: '🇮🇹',
            Japan: '🇯🇵',
            Mexico: '🇲🇽',
            Netherlands: '🇳🇱',
            Poland: '🇵🇱',
            Spain: '🇪🇸',
            'United Kingdom': '🇬🇧',
            'United States': '🇺🇸',
            Other: '🌍'
        };

        return flagMap[countryName] || '🌍';
    }

    function populateAmazonCountryList() {
        const list = document.getElementById('campus-amazon-country-list');
        if (!list) {
            return;
        }

        fetch('amazon_links.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unable to load Amazon links');
                }

                return response.json();
            })
            .then(data => {
                const links = data.Campus || {};
                const countries = Object.entries(links)
                    .filter(([country, url]) => country && url && url.trim())
                    .sort(([countryA], [countryB]) => {
                        if (countryA === 'Other') {
                            return 1;
                        }
                        if (countryB === 'Other') {
                            return -1;
                        }
                        return countryA.localeCompare(countryB);
                    });

                if (!countries.length) {
                    list.innerHTML = '<p class="buy-links__note">Amazon store list unavailable.</p>';
                    return;
                }

                list.innerHTML = countries.map(([country, url]) => `
                    <button type="button" class="store-item" data-country-url="${url}">
                        <span class="store-item__flag">${countryFlagForName(country)}</span>
                        <span>${country}</span>
                    </button>
                `).join('');
            })
            .catch(() => {
                list.innerHTML = '<p class="buy-links__note">Amazon store list unavailable.</p>';
            });
    }

    populateAmazonCountryList();

    document.addEventListener('click', event => {
        const countryButton = event.target.closest('[data-country-url]');
        if (!countryButton) {
            return;
        }

        const url = countryButton.getAttribute('data-country-url');
        if (!url) {
            return;
        }

        window.open(url, '_blank', 'noopener,noreferrer');

        const modal = countryButton.closest('.subscribe-modal');
        if (modal) {
            closeModal(modal);
        }
    });

    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            openModal(document.getElementById(modalId));
        });
    });

    document.querySelectorAll('.subscribe-modal').forEach(modal => {
        modal.querySelectorAll('[data-modal-close]').forEach(element => {
            element.addEventListener('click', () => {
                if (modal.classList.contains('is-thanking')) {
                    return;
                }

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
                modal.classList.add('is-thanking');
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
        if (event.key === 'Escape' && activeModal && !activeModal.classList.contains('is-thanking')) {
            closeModal(activeModal);
        }
    });
})();