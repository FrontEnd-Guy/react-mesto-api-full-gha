# 🤳 React Mesto API Full 

## 📜 Introduction

This repository houses the full stack application for the `Mesto` project. 

`Mesto` is an Instagram-like content-sharing app. This is a responsive single page React app with router navigation. Server-side API is powered by Express.js server and hosted on Yandex Cloud. The app features user profile registration and login. Authenticated users are redirected to the main page and can add pictures to the gallery and see the cards created by other users. Additionally, the users can like/dislike or remove pictures.

## 🛠 Technology Stack

- **Frontend:** React.js, CSS, HTML
- **Backend:** Express.js, MongoDB
- **Authentication:** JWT
- **Deployment:** Nginx on Yandex Cloud

## 🔗  Project Links

- ✨ **Frontend:** [mesto-russia.nomoredomains.monster](https://mesto-russia.nomoredomains.monster)
- ☁ **Backend/API:** [api.mesto-russia.nomoredomains.monster](https://api.mesto-russia.nomoredomains.monster)

## 💻 Local Development Setup

### 🔍 Prerequisites

- Node.js
- NPM (comes bundled with Node.js)
- MongoDB (for the backend)

### 📥 Cloning the Repository

```
git clone https://github.com/FrontEnd-Guy/react-mesto-api-full-gha.git
```

### 💻 Frontend
1. **Navigate to the frontend directory:**
```
cd react-mesto-api-full-gha/frontend
```
2. **Install the required dependencies:**
```
npm install
```
3. **Start the frontend development server:**
```
npm start
```
The frontend application should now be running on http://localhost:3000.


### ☁️ Backend
1. **Navigate to the backend directory:**
```
cd ../backend
```
2. **Install the required dependencies:**
```
npm install
```
3. **Start the backend server:**
```
npm start
```
The API server should now be up and running on http://localhost:3001 or your chosen port.
Note: Before starting the backend, ensure MongoDB is running locally and the connection string is set appropriately in your backend configurations.
