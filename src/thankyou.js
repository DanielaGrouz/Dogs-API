import {fetchDogById, getDogIdFromURL, initAdoptionQuest} from './script.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dogId = getDogIdFromURL();
    if (dogId === null) return;

    const dog = await fetchDogById(dogId);

    if (dog) {
        document.getElementById('dog-name-display').textContent = dog.name;
        const dogPreview = document.getElementById('dog-preview');
        dogPreview.src = dog.first_image_url;
        dogPreview.alt = `Thank you for adopting ${dog.name}`;
        createConfetti();
    }
});

function createConfetti() {
    const container = document.body;
    const colorClasses = ['confetti-gold', 'confetti-red', 'confetti-blue', 'confetti-green', 'confetti-purple'];
    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        confetti.className = `confetti ${randomColorClass}`;
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 6000);
    }
}

// Show a step in the progress bar
initAdoptionQuest(3);