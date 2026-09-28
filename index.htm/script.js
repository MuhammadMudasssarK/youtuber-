document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const videoCards = document.querySelectorAll('.card');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            videoCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});