import express from "express"
import { poolPromise } from "../db.js"
import { requireAdmin } from "../middleware/auth.js"

console.log("🔥 contact admin routes loaded")
const router = express.Router()

// GET all contact messages (admin)
router.get("/",requireAdmin, async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query(`
      SELECT *
      FROM ContactMessages
      ORDER BY createdAt DESC
    `)
    res.json(result.recordset)
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

// DELETE a contact message
router.delete("/:id",requireAdmin, async (req, res) => {
  try {
    const pool = await poolPromise
    await pool.request()
      .input("id", req.params.id)
      .query("DELETE FROM ContactMessages WHERE id=@id")

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

export default router
