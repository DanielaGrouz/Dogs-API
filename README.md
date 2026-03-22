# 🐾 Dog Adoption Website

A multi-page, interactive dog adoption platform built as part of a Software Quality Engineering assignment. This project demonstrates dynamic data handling, DOM manipulation, and a gamified user experience.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules).
* **Backend Mock:** Postman REST API Mock Server.
* **Design:** Custom Pure CSS (No frameworks).

## 📂 Project Structure
All files are located in the `src` folder:
* **HTML Files:** `index.html`, `dog.html`, `adopt.html`, `thankyou.html`.
* **CSS Files:** `styles.css` (shared), `index.css`, `dog.css`, `adopt.css`, `thankyou.css`.
* **JS Files:** `script.js` (shared utilities/API), `index.js`, `dog.js`, `adopt.js`, `thankyou.js`.
* **Data:** `dogs_data.json` (Source data for Postman Mock Server).

## 🚀 Key Features
* **Dynamic Data Fetching:** Uses the Fetch API to retrieve dog data from the Postman Mock Server.
* **State Management:** Passes data between pages using URL Query Parameters (`?id=N`).
* **Navigation Logic:** Includes "Prev" and "Next" buttons on the detail page with logic to hide them at the start/end of the list.
* **Form Validation:** Adoption form with basic HTML5 validation and custom submission handling (`e.preventDefault()`).

## ✨ Gamification & Bonus Features
To enhance user engagement, several interactive elements were added:
1.  **Adoption Quest:** A visual progress bar at the bottom of every page showing the user's journey from finding a friend to sending an inquiry.
2.  **Live Status:** Dynamic tags like "🔥 3 people looking now" or "⏳ Pending Adoption" to create a sense of community.
3.  **Interactive Like Button:** Users can "heart" a dog, triggering a toggle animation and a "bark" sound effect.
4.  **Staff Pick Badges:** Randomly assigned badges (e.g., "New Arrival", "Super Sweet") generated via DOM manipulation.
5.  **Confetti Celebration:** A dynamic confetti effect on the Thank You page to celebrate a successful inquiry.

## 📝 Setup & Running
1.  Ensure the **Postman Mock Server** is active and the URL is correctly set in `script.js`.
2.  Open the project using a local server (e.g., **WebStorm's** built-in server or **Live Server** in VS Code) to avoid CORS issues.
3.  Launch `index.html` in Google Chrome.

