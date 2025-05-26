document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const currentYearSpan = document.getElementById('currentYear');

    // Toggle Menu Mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    // Update Tahun di Footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});