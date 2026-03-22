import { fetchAllDogs } from './script.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dogs = await fetchAllDogs();

    const dogCards = document.querySelectorAll('.dog-card');

    const badges = [
        { text: 'Staff Pick 🌟', class: 'badge-staff' },
        { text: 'New Arrival ✨', class: 'badge-new' },
        { text: 'Most Playful 🎾', class: 'badge-playful' },
        { text: 'Super Sweet 🍬', class: 'badge-sweet' }
    ];

    dogs.forEach((dog, index) => {
        if (dogCards[index]) {
            const card = dogCards[index];
            //select random badge from the list
            const randomBadge = badges[Math.floor(Math.random() * badges.length)];
            const badgeElement = document.createElement('span');
            badgeElement.className = `dog-badge ${randomBadge.class}`;
            badgeElement.textContent = randomBadge.text;
            //add the badge to the top of the card
            card.prepend(badgeElement);

            const likeBtn = card.querySelector('.like-button');
            if (likeBtn) {
                likeBtn.addEventListener('click', function() {
                    this.classList.toggle('liked');
                    this.textContent = this.classList.contains('liked') ? '❤️' : '🤍';
                });
            }

            const img = card.querySelector('img');
            img.src = dog.first_image_url;
            img.alt = `Photo of ${dog.name}`;

            card.querySelector('.dog-name').textContent = dog.name;
            card.querySelector('.more-info-link').href = `dog.html?id=${index}`;
        }
    });
});