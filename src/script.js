export const MOCK_API_URL = "https://76046bc0-f35c-4004-939a-af147e115b68.mock.pstmn.io/dogs";

export function getDogIdFromURL() {
    /**
     * Extracts the ID from the current URL and returns it as a number
     * */
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id !== null ? parseInt(id) : null;
}

export function formatBoolean(value) {
    /**
     * Converts boolean values to human-readable text
     * true -> "Yes", false -> "No", null/undefined -> "Unknown"
     * */
    if (value === true) return "Yes";
    if (value === false) return "No";
    return "Unknown";
}

export async function fetchAllDogs() {
    try {
        const response = await fetch(MOCK_API_URL);
        if (!response.ok) throw new Error("Failed to fetch all dogs");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchDogById(id) {
    try {
        const response = await fetch(`${MOCK_API_URL}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch dog with id ${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function initAdoptionQuest(currentStep) {
    const steps = [
        { name: "Find a friend", icon: "🔍" },
        { name: "Get to know them", icon: "🐶" },
        { name: "Send love", icon: "📩" }
    ];

    const questContainer = document.createElement('div');
    questContainer.className = 'adoption-quest container';

    let html = '<div class="quest-steps">';
    steps.forEach((step, index) => {
        const isActive = index === currentStep ? 'active' : '';
        const isCompleted = index < currentStep ? 'completed' : '';
        html += `
            <div class="step ${isActive} ${isCompleted}">
                <span class="step-icon">${isCompleted ? '✅' : step.icon}</span>
                <span class="step-name">${step.name}</span>
            </div>
            ${index < steps.length - 1 ? '<div class="step-line"></div>' : ''}
        `;
    });
    html += '</div>';

    questContainer.innerHTML = html;
    document.body.appendChild(questContainer);
}