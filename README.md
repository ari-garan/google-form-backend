# ⚡ Backend Project (Express + MongoDB + TypeScript)

This is a **Node.js + Express backend** built with **TypeScript** and **MongoDB (Mongoose)**.  
It provides a structured, scalable setup for building APIs with clean architecture.

---

## 🚀 Features

- 🌐 RESTful API with **Express**  
- 🗄️ Database integration using **MongoDB + Mongoose**  
- ⚡ Hot-reload with **nodemon + ts-node**  
- 🛡️ Middleware support (auth, error handling, etc.)  
- ✅ Request validation (Joi / Zod or custom logic)  
- 📂 Organized project structure (controllers, services, routes, models, etc.)  
- 🛠️ Configurable environment variables with **dotenv**  
- 📦 Built with **TypeScript** for type safety  

---

## 🛠️ Tech Stack

- **Node.js** + **Express**  
- **MongoDB** + **Mongoose**  
- **TypeScript**  
- **dotenv** (environment config)  
- **nodemon** + **ts-node** (development)  
- **Joi / Zod** (optional request validation)  

---

## 📂 Project Structure

```
backend-project/
├── node_modules/         # Installed dependencies
├── dist/                 # Compiled JS output (after build)

├── src/                  # All TypeScript source code
│   ├── controllers/      # Business logic (e.g. userController.ts)
│   ├── routes/           # Express routes (e.g. userRoutes.ts)
│   ├── models/           # Mongoose models (e.g. User.ts)
│   ├── services/         # Service layer (DB queries, external APIs)
│   ├── middleware/       # Middlewares (e.g. authMiddleware.ts)
│   ├── validations/      # Request validation logic
│   ├── common/           # Helpers, constants, utils (e.g. logger.ts)
│   ├── connections/      # DB connection files (e.g. mongo.ts)
│   └── cron/             # Background jobs (e.g. sampleJob.ts)

├── TestCase/             # (optional) test scripts / playground
├── index.ts              # Entry point
├── .env                  # Environment variables
├── .gitignore            # Ignored files
├── package.json          # Project metadata & scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ari-garan/google-form-backend
cd backend-project
```

### 2️⃣ Install dependencies
```bash
# Runtime dependencies
npm install express mongoose dotenv

# Dev dependencies
npm install -D typescript ts-node nodemon @types/node @types/express @types/mongoose
```

### 3️⃣ Initialize TypeScript
```bash
npx tsc --init
```

*(Make sure `tsconfig.json` is updated with `rootDir`, `outDir`, and other required options.)*

### 4️⃣ Add environment variables
Create a `.env` file in the root:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
```

### 5️⃣ Run the project
```bash
# Start in dev mode (auto-reload)
npm run dev

# Build for production
npm run build

# Run compiled code
npm start
```

---

## 📌 Notes

- `index.ts` → Starts the server & connects to MongoDB  
- `src/routes/` → Keeps all API route definitions  
- `src/controllers/` → Handles logic for each route  
- `src/models/` → Contains all Mongoose schemas/models  
- `src/services/` → Business logic / DB queries  
- `src/middleware/` → Express middlewares (auth, error handling, etc.)  
- `src/validations/` → Request validation logic  
- `src/common/` → Helpers, utils, constants, logger  
- `src/connections/` → DB connections (Mongo, Redis, etc.)  
- `src/cron/` → Scheduled jobs (cron tasks)  
- `.env` → Sensitive configs (PORT, DB URI, API keys)  
- `.gitignore` → Prevents committing node_modules, dist, .env  