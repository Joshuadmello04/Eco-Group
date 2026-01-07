import express from "express";
import { poolPromise } from "../db.js";

const router = express.Router();

/**
 * PUBLIC – get active testimonials
 */
router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT id, title, quote, company, author
      FROM Testimonials
      WHERE isActive = 1
      ORDER BY createdAt DESC
    `);

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/**
 * ADMIN – add testimonial
 */
router.post("/", async (req, res) => {
  try {
    const { title, quote, company, author } = req.body;

    if (!quote || !company || !author) {
      return res.status(400).json({ success: false });
    }

    const pool = await poolPromise;
    await pool.request()
      .input("title", title || null)
      .input("quote", quote)
      .input("company", company)
      .input("author", author)
      .query(`
        INSERT INTO Testimonials (title, quote, company, author)
        VALUES (@title, @quote, @company, @author)
      `);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/**
 * ADMIN – delete testimonial
 */
router.delete("/:id", async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input("id", req.params.id)
      .query(`DELETE FROM Testimonials WHERE id = @id`);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
