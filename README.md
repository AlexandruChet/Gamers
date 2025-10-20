# GamerStore

**GamerStore** is an online store for gamers, built on React + TypeScript with a server-side on Node.js.
The project demonstrates a modern web application with a nice interface, client-side logic, and a server-side for storing and processing data.

This project is designed to practice and demonstrate frontend and backend skills to prepare for an internship in Germany.

---

## ⚡ Main features

- **Modern interface:** Responsive design for PC and mobile devices.
- **Product catalog:** Product browsing, filters, sorting.
- **Server-side:** Storing and processing user data in JSON (`users.json`).
- **TypeScript:** Safe typing of components and services.
- **Scalability:** The project structure allows for easy addition of new features.

---

## 🛠 Technologies

- **Frontend:** React, TypeScript, SCSS, HTML, JavaScript
- **Backend:** Node.js, TypeScript, Express (or other server)
- **Data storage:** JSON files (`users.json`)
  VSCode

---

## 📂Project structure

```
App/
│
├─ client/
│ ├─ dist/
│ │ ├─ assets/
│ │ ├─ errorCss.css
│ │ ├─ 404.html
│ │ └─ index.html
│ ├─ node_modules/
│ └─ src/
│ ├─ assets/
│ ├─ components/
│ ├─ logic/
│ └─ services/
│
├─ server/
│ ├─ node_modules/
│ ├─ data/
│ │ └─ users.json
│ ├─ src/
│ │ ├─ .env
│ │ └─ server.ts
│ ├─ tsconfig.json
│ ├─ package.json
│ └─ package-lock.json
```

---

## 🚀 Installation and launch

### Frontend (client)

```bash
cd client
npm run dev
```

### Backend (server)

```bash
cd server
tsc server.ts
node server.js
```

---

## 🎯 Project goal

- Demonstrate skills in **React + TypeScript** and **Node.js**.
- Gain practical experience in creating a full-fledged web application.

---

## 🌱 Future plans

- Connect **real database** (MongoDB / PostgreSQL).
- Improve **UI/UX**, add animations and effects.
- Expand product catalog, add categories and filters.
