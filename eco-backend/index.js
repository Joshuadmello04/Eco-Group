import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { poolPromise } from "./db.js";
import testimonialRoutes from "./routes/testimonials.js";
import contactRoutes from "./routes/contact.js"
import adminAuthRoutes from "./routes/adminAuth.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin/auth", adminAuthRoutes)
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/admin/contact", contactRoutes)

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

const PORT = process.env.PORT || 5000;
console.log("🔥 index.js loaded, registering routes")

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
