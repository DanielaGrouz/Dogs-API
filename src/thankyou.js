import { fetchDogById, getDogIdFromURL } from './script.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dogId = getDogIdFromURL();
    if (dogId === null) return;

    const dog = await fetchDogById(dogId);

    if (dog) {
        document.getElementById('dog-name-display').textContent = dog.name;
        const dogPreview = document.getElementById('dog-preview');
        dogPreview.src = dog.first_image_url;
        dogPreview.alt = `Thank you for adopting ${dog.name}`;
    }
});