import { MOCK_API_URL, fetchData, getDogIdFromURL } from './script.js';

let dogId = null;

async function init() {
    dogId = getDogIdFromURL();
    if (dogId === null) {
        console.error("No dog ID found in URL");
        return;
    }

    const dog = await fetchData(`${MOCK_API_URL}/${dogId}`);

    if (dog) {
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('preview-img').src = dog.first_image_url;
        document.getElementById('preview-img').alt = dog.name;
    }
}

const form = document.getElementById('adoption-form');
form.addEventListener('submit', function(e) {
    // The form does not need to actually send data to a server.
    e.preventDefault();
    window.location.href = `thankyou.html?id=${dogId}`;
});

// wait for all the HTML and CSS to finish loading, and only then run the function
window.onload = init;