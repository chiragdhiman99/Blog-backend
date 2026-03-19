<div align="center">

# ⚙️ BLOGIFY — Backend API
### *The Engine Behind the Blog*

[![API Live](https://img.shields.io/badge/🚀_API_Live-Render-46E3B7?style=for-the-badge)](https://blog-backend-2nfz.onrender.com)
[![Frontend](https://img.shields.io/badge/🌐_Frontend-Vercel-FFD700?style=for-the-badge)](https://blog-frontend-seven-orcin.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

<br/>

> **A fully functional REST API for a blogging platform.**
> Built with Node.js, Express & MongoDB — focusing on clean architecture,
> JWT authentication, and real-world deployment.

</div>

---

## 📌 About This Project

This is the **core of the Blogify project** — a backend-first learning project.
The main focus was building a production-ready REST API with:

- ✅ Secure JWT Authentication
- ✅ Full CRUD for blog posts
- ✅ User management & profiles
- ✅ Protected routes & middleware
- ✅ Deployed live on Render + MongoDB Atlas

---

## 🛠️ Tech Stack

```
Runtime        →   Node.js
Framework      →   Express.js
Database       →   MongoDB + Mongoose
Authentication →   JWT (JSON Web Tokens)
Password Hash  →   bcryptjs
Environment    →   dotenv
Deployment     →   Render
```

---

## 📡 API Endpoints

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | Login & get JWT token |

### 📝 Post Routes — `/api/posts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/getposts` | Get all posts |
| `GET` | `/getpost/:id` | Get single post by ID |
| `POST` | `/create` | Create a new post (protected) |
| `PUT` | `/update/:id` | Update a post (protected) |
| `DELETE` | `/delete/:id` | Delete a post (protected) |

### 👤 User Routes — `/api/users`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/:id` | Get user profile |
| `PUT` | `/update/:id` | Update user profile (protected) |
| `DELETE` | `/delete/:id` | Delete user (protected) |

---

## 📁 Project Structure

```
Blog-backend/
├── 📂 config/
│   └── db.js                # MongoDB connection
├── 📂 models/
│   ├── User.js              # User schema
│   └── Post.js              # Post schema
├── 📂 routes/
│   ├── authroutes.js        # Auth endpoints
│   ├── postroutes.js        # Post endpoints
│   └── userroutes.js        # User endpoints
├── 📂 middleware/
│   └── auth.js              # JWT verify middleware
├── .env                     # Environment variables
├── server.js                # App entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account

### Installation

```bash
# 1️⃣ Clone the repo
git clone https://github.com/chiragdhiman99/Blog-backend.git

# 2️⃣ Navigate to folder
cd Blog-backend

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create .env file
touch .env
```

### Environment Variables

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Run Locally

```bash
node server.js
```

API running at `http://localhost:5000` ✅

---

## 🌐 Deployment

Deployed on **Render** (Free tier)

### Deploy Your Own

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Set environment variables:
   ```
   MONGO_URI     = your atlas connection string
   JWT_SECRET    = your secret
   CLIENT_URL    = your frontend vercel url
   PORT          = 5000
   ```
5. Build Command: `npm install`
6. Start Command: `node server.js`
7. Hit **Deploy** 🚀

---

## 🔗 Frontend Repository

The frontend (React + Vite) for this project:

👉 **[Blog-frontend Repository](https://github.com/chiragdhiman99/Blog-frontend)**

| Service | URL |
|---------|-----|
| ⚙️ Backend API | [blog-backend-2nfz.onrender.com](https://blog-backend-2nfz.onrender.com) |
| 🌐 Frontend | [blog-frontend-seven-orcin.vercel.app](https://blog-frontend-seven-orcin.vercel.app) |

---

## 🙌 Author

**Chirag Dhiman**

[![GitHub](https://img.shields.io/badge/GitHub-chiragdhiman99-181717?style=flat&logo=github)](https://github.com/chiragdhiman99)

---

<div align="center">

Made with ❤️ and lots of ☕

⭐ **Star this repo if you found it helpful!** ⭐

</div>
