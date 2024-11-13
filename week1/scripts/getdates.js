    // Set current year in the footer's first paragraph
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in the footer's second paragraph
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
