export const MOCK_API_URL = "https://ee2c45c6-d711-4975-ae79-30d08231c795.mock.pstmn.io/dogs";

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