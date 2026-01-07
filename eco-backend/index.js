import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { poolPromise } from "./db.js";
<<<<<<< HEAD
import testimonialRoutes from "./routes/testimonials.js";
=======
import adminRoutes from "./routes/admin.js";
>>>>>>> 194993a6521fe7f8822e0f702294662a67542941

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/testimonials", testimonialRoutes);

// ===============================
// 🔓 PUBLIC ROUTES
// ===============================

// CONTACT FORM
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ success: false });
    }

    const pool = await poolPromise;

    await pool.request()
      .input("name", name)
      .input("email", email)
      .input("phone", phone)
      .input("company", company || null)
      .input("subject", subject)
      .input("message", message)
      .query(`
        INSERT INTO ContactMessages
        (name, email, phone, company, subject, message)
        VALUES (@name, @email, @phone, @company, @subject, @message)
      `);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// GALLERY (PUBLIC)
app.get("/api/gallery", async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool.request().query(`
      SELECT 
        c.id AS categoryId,
        c.title,
        c.description,
        i.id AS imageId,
        i.imageUrl
      FROM GalleryCategories c
      LEFT JOIN GalleryImages i ON c.id = i.categoryId
      WHERE c.isActive = 1 AND (i.isActive = 1 OR i.id IS NULL)
      ORDER BY c.id
    `);

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load gallery" });
  }
});

// ===============================
// 🔐 ADMIN LOGIN (PUBLIC)
// ===============================

app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await poolPromise;

    const result = await pool.request()
      .input("username", username)
      .query(`
        SELECT * FROM AdminUsers
        WHERE username = @username
      `);

    if (!result.recordset.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const admin = result.recordset[0];
    const isValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin.id },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
});

// ===============================
// 🔐 AUTH MIDDLEWARE
// ===============================

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
};

// ===============================
// 🔐 PROTECTED ADMIN ROUTES
// ===============================

app.use("/api/admin", authenticateAdmin, adminRoutes);

// ===============================
// 🚀 SERVER START
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
