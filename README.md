# 🌱 ECO GROUP — Full Stack Web Application

This repository contains the complete **ECO Group corporate website**, built as a **secure full-stack application** with a modern frontend, backend API, admin panel, and SQL Server database.

---

## 🧱 Tech Stack

### Frontend

- React + TypeScript
- Vite
- Tailwind CSS
- Deployed on **Vercel**
- Environment-based API configuration

### Backend

- Node.js
- Express.js
- JWT Authentication
- Rate Limiting
- SQL Server (MSSQL)
- Secure password hashing (bcrypt)

### Database

- Microsoft SQL Server
- Schema-based setup

---

## 📁 Project Structure

eco-group/
│
├── src/ # Frontend (React + Vite)
│ ├── pages/ # Public + Admin pages
│ ├── components/ # UI components
│ ├── routes/ # Frontend route protection
│ └── App.tsx
│
├── eco-backend/ # Backend API
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & rate limiter
│ ├── db.js # SQL Server connection
│ ├── index.js # Server entry
│ └── package.json
│
├── database/
│ └── schema.sql # Database schema
│
├── .env.example # Environment variable reference
└── README.md

---

## 🗄️ DATABASE SETUP (REQUIRED)

> ⚠️ The database must be created on **your own SQL Server instance**  
> (Local SQL Server / Azure SQL / Managed SQL provider)

### 1️⃣ Create Database & Tables

Open **SQL Server Management Studio (SSMS)** and execute: database/schema.sql

This creates all required tables:

- `ContactMessages`
- `Testimonials`
- `AdminUsers`
- `GalleryCategories`
- `GalleryImages`

✔ No destructive production queries  
✔ No hardcoded credentials  
✔ Safe for production use  

---

### 2️⃣ Create Database User

Create a database user according to your environment.

**Example (local SQL Server):**
```sql
CREATE LOGIN eco_user WITH PASSWORD = 'STRONG_PASSWORD';
USE ContactDB;
CREATE USER eco_user FOR LOGIN eco_user;
ALTER ROLE db_owner ADD MEMBER eco_user;
🔐 Use a strong password
❌ Do not commit credentials

⚙️ BACKEND SETUP (Node.js API)
1️⃣ Navigate to backend
cd eco-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create eco-backend/.env:

# Database
DB_SERVER=YOUR_DB_SERVER
DB_PORT=1433
DB_NAME=ContactDB
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD

# Server
PORT=5000

# Security
JWT_SECRET=CHANGE_THIS_SECRET


🔒 Never commit .env to Git

4️⃣ Start Backend
npm start


Backend runs at:

http://localhost:5000

🌐 FRONTEND SETUP (React + Vite)
1️⃣ Create frontend .env

Create eco-group/.env:

VITE_API_BASE_URL=https://YOUR_BACKEND_DOMAIN


Example:

VITE_API_BASE_URL=https://api.ecogroup.com

2️⃣ Local Development
npm install
npm run dev

3️⃣ Deploy Frontend (Vercel)

Import repository into Vercel

Add Environment Variable:

VITE_API_BASE_URL = https://YOUR_BACKEND_DOMAIN


Redeploy project

🔐 ADMIN PANEL
Admin Routes
/admin/login
/admin
/admin/testimonials
/admin/contact

Authentication

JWT-based authentication

Passwords hashed using bcrypt

Protected backend routes

Frontend route protection using ProtectedRoute

Creating an Admin User

Generate password hash:

node -e "console.log(require('bcryptjs').hashSync('Admin@123', 10))"


Insert into database:

INSERT INTO AdminUsers (username, passwordHash)
VALUES ('admin', '<bcrypt-hash>');

🛡️ SECURITY FEATURES

✔ JWT Authentication
✔ Password hashing (bcrypt)
✔ Protected admin routes
✔ Rate limiting middleware
✔ SQL injection prevention
✔ Environment-based configuration

