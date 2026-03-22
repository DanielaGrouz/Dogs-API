import {fetchDogById, getDogIdFromURL, formatBoolean, initAdoptionQuest} from './script.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dogId = getDogIdFromURL();
    if (dogId === null) return;

    const dog = await fetchDogById(dogId);

    if (dog) {
        document.getElementById('dog-name-header').textContent = dog.name;
        document.getElementById('dog-name').textContent = dog.name;
        document.title = `${dog.name} - Details`;

        const dogImg = document.getElementById('dog-image');
        dogImg.src = dog.first_image_url;
        dogImg.alt = `A photo of ${dog.name}, a ${dog.breed}`;

        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-sex').textContent = dog.sex;
        document.getElementById('dog-story').textContent = dog.story;

        document.getElementById('dog-house-trained').textContent = formatBoolean(dog.house_trained);
        document.getElementById('dog-vaccinated').textContent = formatBoolean(dog.vaccinated);

        document.getElementById('adopt-btn').href = `adopt.html?id=${dogId}`;

        setupNavigation(dogId);

        const matchElement = document.getElementById('match-percentage');
        // random number between 85 and 100
        const randomMatch = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
        animateCountUp(matchElement, randomMatch);
    }
});

function setupNavigation(dogId) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (dogId <= 0) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.onclick = () => window.location.href = `dog.html?id=${dogId - 1}`;
    }

    if (dogId >= 5) {
        nextBtn.style.visibility = 'hidden';
    } else {
        nextBtn.onclick = () => window.location.href = `dog.html?id=${dogId + 1}`;
    }
}

function animateCountUp(element, target) {
    let current = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
        current += 1;
        element.textContent = `${current}%`;
        if (current === target) {
            clearInterval(timer);
            element.style.color = '#28a745';
            element.style.fontWeight = 'bold';
        }
    }, stepTime);
}

initAdoptionQuest(1);