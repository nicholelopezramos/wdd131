const yearSpan = document.getElementById('2024');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;