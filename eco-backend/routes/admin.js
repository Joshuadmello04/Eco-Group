import express from "express";
import { upload } from "../middleware/upload.js";
import { poolPromise } from "../db.js";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { categoryId, title } = req.body;

    const imageUrl = `/uploads/${req.file.filename}`;
    const pool = await poolPromise;

    await pool.request()
      .input("categoryId", categoryId)
      .input("title", title)
      .input("imageUrl", imageUrl)
      .query(`
        INSERT INTO GalleryImages (categoryId, title, imageUrl)
        VALUES (@categoryId, @title, @imageUrl)
      `);

    res.json({ success: true, imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
