# React Mesto API Full

## About

This repository houses the full stack application for the `Mesto` project.

`Mesto` is an Instagram-like content-sharing app. This is a responsive single page React app with router navigation. Server-side API is powered by Express.js server and hosted on Yandex Cloud. The app features user profile registration and login. Authenticated users are redirected to the main page and can add pictures to the gallery and see the cards created by other users. Additionally, the users can like/dislike or remove pictures.

## 🛠 Technology Stack

- **Frontend:** React.js, CSS, HTML
- **Backend:** Express.js, MongoDB
- **Authentication:** JWT
- **Deployment:** Nginx on Yandex Cloud

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

3. **Set up environment variables:**

Create a `.env` file in the `frontend` folder and add the following line:

```
REACT_APP_API_URL=http://localhost:3001
```

4. **Start the frontend development server:**

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

3. **Set up environment variables:**

Create a `.env` file in the `backend` folder and add the following lines:

```
NODE_ENV=production
JWT_SECRET=eb28135ebcfc17578f96d4d65b6c7871f2c803be4180c165061d5c2db621c51b
PORT=3001
MONGO_URI=mongodb://127.0.0.1:27017/mestodb
CORS_WHITELIST=http://localhost:3000
```

3. **Start the backend server:**

```
npm start
```

The API server should now be up and running on http://localhost:3001 or your chosen port.
Note: Before starting the backend, ensure MongoDB is running locally and the connection string is set appropriately in your backend configurations.
