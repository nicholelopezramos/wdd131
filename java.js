
const yearSpan = document.getElementById('2024');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
    // Wind chill formula for Imperial units (Fahrenheit and mph)
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // Round to 1 decimal place
}

// Static Weather Data
const temperature = 40; // °F
const windSpeed = 10; // mph

// Conditions for Valid Wind Chill Calculation
if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('.weather-icon').insertAdjacentHTML(
        'afterend',
        `<p>Wind Chill: ${windChill}°F</p>`
    );
} else {
    document.querySelector('.weather-icon').insertAdjacentHTML(
        'afterend',
        `<p>Wind Chill: N/A</p>`
    );
}