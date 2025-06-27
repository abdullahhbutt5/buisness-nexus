🧠 Business Nexus
A platform that connects entrepreneurs with investors — where startups get exposure and investors find promising ideas.

🚀 Features
🔐 Authentication using Firebase (with role-based login: Entrepreneur & Investor)
📬 Collaboration requests with Accept/Reject and status tracking
💬 Real-time-like messaging (mock-based, persistent via localStorage)
🧑‍💼 Dynamic dashboards based on user role
📄 Individual profile pages
🖼️ Responsive UI with custom sidebar navigation
🧪 Mock data-driven backend for fast prototyping

🛠️ Tech Stack
React + Vite
Firebase (Auth + Firestore)
TailwindCSS
React Router

📁 Project Structure
bash
Copy
Edit
src/
├── assets/              # Images, icons, etc.
├── components/          # Reusable UI components
├── context/             # Auth context using Firebase
├── data/                # mockData.js and mockChat.js
├── pages/
│   ├── auth/            # Login, Register
│   ├── dashboard/       # Entrepreneur/Investor Dashboards
│   ├── profile/         # Profile views
│   └── ChatPage.jsx     # Chat UI
├── layout/              # DashboardLayout with sidebar
├── firebase.js          # Firebase config
└── App.jsx, main.jsx    # App root and router setup
🧪 Mock Data
🎭 mockData.js contains:

5 Entrepreneurs (e1-e5)
5 Investors (i1-i5)
Sample collaboration requests

🗨️ mockChat.js handles:
One-to-one chat between specific iX and eX pairs
LocalStorage used for persistence

🔧 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/business-nexus.git
cd business-nexus
Install dependencies:
npm install

Setup Firebase:
Create a Firebase project.
Enable Email/Password Auth.
Create Firestore with a users collection.
Add your config to src/firebase.js:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  // ...
};

Run the project:
npm run dev

💡 Usage Notes
Users get assigned IDs (i1–i5 or e1–e5) in a round-robin manner.
Entrepreneurs see pending requests with mock message content.
Chat is mock-based but mimics real-time interaction with localStorage.

🌐 Deployment
To deploy with Firebase Hosting:
Set public/ folder with a favicon.
Ensure index.html contains correct <link rel="icon" href="/favicon.ico">

Run:
npm run build
