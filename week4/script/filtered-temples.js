document.addEventListener("DOMContentLoaded", () => {
    displayTempleCards(temples);

    setFooterInfo();

    document.getElementById("home").addEventListener("click", () => {
        displayTempleCards(temples); 
    });

    document.getElementById("old").addEventListener("click", () => {
        const oldTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900; 
        });
        displayTempleCards(oldTemples);
    });

    document.getElementById("new").addEventListener("click", () => {
        const newTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year > 2000; 
        });
        displayTempleCards(newTemples);
    });

    document.getElementById("large").addEventListener("click", () => {
        const largeTemples = temples.filter((temple) => temple.area > 90000);
        displayTempleCards(largeTemples);
    });

    document.getElementById("small").addEventListener("click", () => {
        const smallTemples = temples.filter((temple) => temple.area < 10000);
        displayTempleCards(smallTemples);
    });

    
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});


const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicationDate: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicationDate: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicationDate: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicationDate: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicationDate: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    name: "Lima Perú",
    location: "Lima, Perú",
    dedicationDate: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicationDate: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicationDate: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8453.jpg",
  },
  {
    name: "Manila Philippines",
    location: "Manila, Philippines",
    dedicationDate: "1984, September, 25",
    area: 24705,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44346.jpg",
  },
  {
    name: "Paris France",
    location: "Le Chesnay, France",
    dedicationDate: "2017, May, 21",
    area: 44000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2055.jpg",
  },
];



function displayTemples(templesToDisplay) {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";
  
    templesToDisplay.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicationDate}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;
  
      gallery.appendChild(card);
    });
  }
  
  function filterTemples(filter) {
    let filteredTemples;
  
    switch (filter) {
      case "old":
        filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }
  
    displayTemples(filteredTemples);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
  
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  });
  
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = link.getAttribute("href").split(".")[0]; 
      filterTemples(filter);
    });
  });

function setFooterInfo() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

