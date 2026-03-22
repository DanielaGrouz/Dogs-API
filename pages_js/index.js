const MOCK_API_URL = "https://ee2c45c6-d711-4975-ae79-30d08231c795.mock.pstmn.io/dogs";

async function loadDogs() {
    try {
        // fetch data from the API
        // await = stop until getting a response
        const response = await fetch(MOCK_API_URL);
        const dogs = await response.json();

        // get all 6 <div> from the HTML file and save them as array
        const dogCards = document.querySelectorAll('.dog-card');

        dogs.forEach((dog, index) => {
            // check if there ia a relevant dog-card in the HTML file
            if (dogCards[index]) {
                const card = dogCards[index];

                // update image in relevant dog-card
                const img = card.querySelector('img');
                img.src = dog.first_image_url;
                img.alt = dog.name;

                // update dog name in relevant dog-card
                const nameHeader = card.querySelector('.dog-name');
                nameHeader.textContent = dog.name;

                // update link in relevant dog-card
                const link = card.querySelector('.more-info-link');
                link.href = `dog.html?id=${index}`;
            }
        });

    } catch (error) {
        console.error("Error loading dogs:", error);
    }
}

// wait for all the HTML and CSS to finish loading, and only then run the function
window.onload = loadDogs;