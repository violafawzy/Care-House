
const productCards = document.querySelectorAll(".product");
const favoriteIcons = document.querySelectorAll(".favorite-icon");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let ratings = JSON.parse(localStorage.getItem("ratings")) || {}; 

document.addEventListener("DOMContentLoaded", () => {
    productCards.forEach((card) => {
        const icon = card.querySelector(".favorite-icon");
        const ratingValue = card.querySelector(".rate span");
        const stars = card.querySelectorAll(".stars input");
        const productTitle = icon.getAttribute("data-title");

        
        const favoriteItem = favorites.find(fav => fav.title === productTitle);

        if (favoriteItem) {
            icon.classList.add("active"); 
        }

        
        const storedRating = ratings[productTitle] || 0; 
        ratingValue.textContent = `${storedRating}/5`; 

        
        stars.forEach((star) => {
            if (parseInt(star.value) === storedRating) {
                star.checked = true;
            }
        });
    });
});


favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        const product = {
            img: this.getAttribute("data-img"),
            title: this.getAttribute("data-title"),
            brand: this.getAttribute("data-brand"),
            price: this.getAttribute("data-price"),
            rating: ratings[this.getAttribute("data-title")] || 0, 
        };

        
        const existingIndex = favorites.findIndex(fav => fav.title === product.title);

        if (existingIndex > -1) {
            favorites.splice(existingIndex, 1);
            this.classList.remove("active"); 
        } else {
            favorites.push(product);
            this.classList.add("active"); 
        }

    
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});


productCards.forEach((card) => {
    const stars = card.querySelectorAll(".stars input");
    const ratingValue = card.querySelector(".rate span");
    const icon = card.querySelector(".favorite-icon");
    const productTitle = icon.getAttribute("data-title");

    stars.forEach((star) => {
        star.addEventListener("change", () => {
            const rating = parseInt(star.value);
            ratingValue.textContent = `${rating}/5`;

            ratings[productTitle] = rating;
            localStorage.setItem("ratings", JSON.stringify(ratings));

            favorites = favorites.map((fav) => {
                if (fav.title === productTitle) {
                    fav.rating = rating;
                }
                return fav;
            });

            
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });
});


// function hover(detailsElement) {

//     const cardDiv = detailsElement.querySelector(".card");
//     if (cardDiv) {
//         cardDiv.style.backgroundColor = "#5A3673"; 
//     }
// }

// function unhover(detailsElement) {

//     const cardDiv = detailsElement.querySelector(".card");

//     if (cardDiv) {
//         cardDiv.style.backgroundColor = "#f8f9fa"; 
//     } 
// }





const themeSwitch = document.getElementById('themeSwitch');

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    