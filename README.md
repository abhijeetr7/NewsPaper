# NewsPaper

📰 The Daily Insight

A simple news web application that displays the latest headlines, trending stories, and live weather updates.
This project uses Node.js + Express on the backend and a vanilla HTML/CSS/JS frontend.

🚀 Features

🔴 Live top headlines (India-specific).

🌤 Real-time weather updates using Open-Meteo API.

📰 News ticker with auto-scrolling headlines.

📱 Responsive navigation with dropdown menus.

🌙 Dark mode toggle.

📌 Trending stories sidebar.

📩 Scroll-triggered subscription modal.

📂 Project Structure
.
├── server.js        # Backend server (Express.js + News API)
├── index.html       # Frontend UI

⚙️ Tech Stack

Backend: Node.js, Express.js, CORS, node-fetch

Frontend: HTML, CSS, Vanilla JS

APIs:

News API
 / GNews API
 for headlines

Open-Meteo
 for weather

🛠 Installation & Setup

Clone the repository

git clone https://github.com/your-username/the-daily-insight.git
cd the-daily-insight


Install dependencies

npm install


Start the server

node server.js


The server will start at:
👉 http://localhost:3000

Open the frontend
Simply open index.html in your browser.
(You may serve it with a simple local server for better API calls, e.g. live-server or http-server)

🔑 API Keys

You’ll need valid API keys:

Replace the placeholder NEWS_API_KEY in server.js with your own key from News API
.

Replace the GNEWS_API_KEY in index.html if using GNews.


📜 License

This project is licensed under the MIT License – feel free to use and modify it.

---
Built with ❤️ using HTML, CSS and Javascript
