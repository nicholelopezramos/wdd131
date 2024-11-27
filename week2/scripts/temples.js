document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    yearSpan.textContent = new Date().getFullYear();

    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
