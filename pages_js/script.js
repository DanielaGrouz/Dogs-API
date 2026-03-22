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


export function navigateTo(page, id = null) {
    /**
     *  Helper function for page navigation
     * */
    const url = id !== null ? `${page}?id=${id}` : page;
    window.location.href = url;
}


export async function fetchData(url) {
    /**
    * Generic Fetch function with error handling
     * */
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}