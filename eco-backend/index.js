import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { poolPromise } from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
