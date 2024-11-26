document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    yearSpan.textContent = new Date().getFullYear();

    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden"); 
    hamburgerBtn.textContent = menu.classList.contains("hidden") ? "☰" : "✖"; 
});
