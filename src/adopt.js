import { fetchDogById, getDogIdFromURL } from './script.js';

let dogId = null;

document.addEventListener('DOMContentLoaded', async () => {
    dogId = getDogIdFromURL();
    if (dogId === null) return;

    const dog = await fetchDogById(dogId);

    if (dog) {
        document.getElementById('dog-name').textContent = dog.name;
        const previewImg = document.getElementById('preview-img');
        previewImg.src = dog.first_image_url;
        previewImg.alt = `Enquiry for ${dog.name}`;
    }

    // הגדרת מאזין לשליחת הטופס
    const form = document.getElementById('adoption-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = `thankyou.html?id=${dogId}`;
    });
});