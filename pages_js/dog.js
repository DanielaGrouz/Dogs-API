import { MOCK_API_URL } from './config.js';

// extracting the ID from the URL address
const urlParams = new URLSearchParams(window.location.search);
let dogId = parseInt(urlParams.get('id'));

async function loadDogDetails() {
    try {
        // get the data from the server for the specific dog
        const response = await fetch(`${MOCK_API_URL}/${dogId}`);

        if (!response.ok) throw new Error("Dog not found");

        const dog = await response.json();

        document.getElementById('dog-name-header').textContent = dog.name;
        document.title = `${dog.name} - Details`;
        document.getElementById('dog-image').src = dog.first_image_url;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-sex').textContent = dog.sex;
        document.getElementById('dog-story').textContent = dog.story;

        document.getElementById('dog-house-trained').textContent = dog.house_trained ? "Yes" : "No";

        const vaccinated = document.getElementById('dog-vaccinated');
        if (dog.vaccinated === true) {
            vaccinated.textContent = "Yes";
        } else if (dog.vaccinated === false) {
            vaccinated.textContent = "No";
        } else {
            vaccinated.textContent = "Unknown";
        }

        document.getElementById('adopt-btn').href = `adopt.html?id=${dogId}`;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (dogId <= 0) {
            // hide prev button on the first dog
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.onclick = () => { window.location.href = `dog.html?id=${dogId - 1}`; };
        }

        if (dogId >= 5) {
            // hide prev button on the last dog
            nextBtn.style.visibility = 'hidden';
        } else {
            nextBtn.onclick = () => { window.location.href = `dog.html?id=${dogId + 1}`; };
        }

    } catch (error) {
        console.error("Error:", error);
        document.body.innerHTML = "<h1>Dog not found</h1><p>Sorry, we couldn't load the info.</p><a href='index.html'>Back to list</a>";
    }
}

// wait for all the HTML and CSS to finish loading, and only then run the function
window.onload = loadDogDetails;