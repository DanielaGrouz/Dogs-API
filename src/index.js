import { fetchAllDogs } from './script.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dogs = await fetchAllDogs();

    const dogCards = document.querySelectorAll('.dog-card');

    dogs.forEach((dog, index) => {
        if (dogCards[index]) {
            const card = dogCards[index];

            const img = card.querySelector('img');
            img.src = dog.first_image_url;
            img.alt = `Photo of ${dog.name}`;

            card.querySelector('.dog-name').textContent = dog.name;
            card.querySelector('.more-info-link').href = `dog.html?id=${index}`;
        }
    });
});