import { MOCK_API_URL, fetchData, getDogIdFromURL } from './script.js';

async function init() {
    const dogId = getDogIdFromURL();
    if (dogId === null) {
        console.error("No dog ID found in URL");
        return;
    }

    const dog = await fetchData(`${MOCK_API_URL}/${dogId}`);

    if (dog) {
        document.getElementById('dog-name-display').textContent = dog.name;
        document.getElementById('dog-preview').src = dog.first_image_url;
        document.getElementById('dog-preview').alt = `Photo of ${dog.name}`;
    }
}

// wait for all the HTML and CSS to finish loading, and only then run the function
window.onload = init;