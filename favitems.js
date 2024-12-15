document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    const container = document.getElementById('favorites-container');

    favorites.forEach(item => {
        const favoriteHTML = `
            <div class="favorite-item card mb-3 p-3 col-lg-3 col-sm-12 mx-3" style="transition: all 0.3s ease; border: 1px solid #ccc; border-radius: 8px; ">
            <div class="text-center">
                <img src="${item.img}" alt="${item.title}" class="favorite-img" style="width: 100%; height: 300px; margin-bottom: 10px; margin-top:10px;">
            </div>
            <h4 class="text-center">${item.title}</h4>
            <h6 class="text-center">${item.brand}</h6>
            <p class="text-center">${item.price}</p>
        </div>
        `
        
        ;
        container.innerHTML += favoriteHTML;
    });

    if (favorites.length === 0) {
        container.innerHTML = '<p>No favorites yet!</p>';
    }
    // localStorage.clear();
});


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
    