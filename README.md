# 🐾 Dog Adoption Website - Assignment 1

[cite_start]A multi-page, interactive dog adoption platform built as part of a Software Quality Engineering assignment[cite: 1, 4]. [cite_start]This project demonstrates dynamic data handling, DOM manipulation, and a gamified user experience[cite: 5, 111].

## 🛠️ Tech Stack
* [cite_start]**Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)[cite: 4, 99].
* [cite_start]**Backend Mock:** Postman REST API Mock Server[cite: 7, 100].
* [cite_start]**Design:** Custom Pure CSS (No frameworks allowed)[cite: 92, 99].

## 📂 Project Structure
[cite_start]All files are located in the `src` folder as required:
* [cite_start]**HTML Files:** `index.html`, `dog.html`, `adopt.html`, `thankyou.html`[cite: 21].
* [cite_start]**CSS Files:** `styles.css` (shared), `index.css`, `dog.css`, `adopt.css`, `thankyou.css`[cite: 24, 25].
* [cite_start]**JS Files:** `script.js` (shared utilities/API), `index.js`, `dog.js`, `adopt.js`, `thankyou.js`[cite: 26, 27, 28].
* [cite_start]**Data:** `dogs_data.json` (Source data for Postman Mock Server)[cite: 10, 115].

## 🚀 Key Features
* [cite_start]**Dynamic Data Fetching:** Uses the Fetch API to retrieve dog data from the Postman Mock Server[cite: 105, 106].
* [cite_start]**State Management:** Passes data between pages using URL Query Parameters (`?id=N`)[cite: 81, 167].
* [cite_start]**Navigation Logic:** Includes "Prev" and "Next" buttons on the detail page with logic to hide them at the start/end of the list[cite: 57, 58, 235].
* [cite_start]**Form Validation:** Adoption form with basic HTML5 validation and custom submission handling (`e.preventDefault()`)[cite: 70, 71].

## [cite_start]✨ Gamification & Bonus Features [cite: 110, 111]
To enhance user engagement, several interactive elements were added:
1.  **Adoption Quest:** A visual progress bar at the bottom of every page showing the user's journey from finding a friend to sending an inquiry.
2.  **Live Status:** Dynamic tags like "🔥 3 people looking now" or "⏳ Pending Adoption" to create a sense of community.
3.  **Interactive Like Button:** Users can "heart" a dog, triggering a toggle animation and a "bark" sound effect.
4.  **Staff Pick Badges:** Randomly assigned badges (e.g., "New Arrival", "Super Sweet") generated via DOM manipulation.
5.  **Confetti Celebration:** A dynamic confetti effect on the Thank You page to celebrate a successful inquiry.

## 📝 Setup & Running
1.  [cite_start]Ensure the **Postman Mock Server** is active and the URL is correctly set in `script.js`[cite: 100].
2.  Open the project using a local server (e.g., **WebStorm's** built-in server or **Live Server** in VS Code) to avoid CORS issues.
3.  [cite_start]Launch `index.html` in Google Chrome[cite: 103].

---
*Developed by Daniela - 2026*
