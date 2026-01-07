import express from "express"
import { poolPromise } from "../db.js"

const router = express.Router()

// GET all testimonials (admin)
router.get("/", async (req, res) => {
  const pool = await poolPromise
  const result = await pool.request().query(
    "SELECT * FROM Testimonials ORDER BY createdAt DESC"
  )
  res.json(result.recordset)
})

// GET active testimonials (public)
router.get("/public", async (req, res) => {
  const pool = await poolPromise
  const result = await pool.request().query(
    "SELECT quote, company, author FROM Testimonials WHERE isActive = 1 ORDER BY createdAt DESC"
  )
  res.json(result.recordset)
})

// CREATE
router.post("/", async (req, res) => {
  const { quote, company, author } = req.body
  const pool = await poolPromise

  await pool.request()
    .input("quote", quote)
    .input("company", company)
    .input("author", author)
    .query(`
      INSERT INTO Testimonials (quote, company, author)
      VALUES (@quote, @company, @author)
    `)

  res.json({ success: true })
})

// UPDATE
router.put("/:id", async (req, res) => {
  const { quote, company, author, isActive } = req.body
  const pool = await poolPromise

  await pool.request()
    .input("id", req.params.id)
    .input("quote", quote)
    .input("company", company)
    .input("author", author)
    .input("isActive", isActive)
    .query(`
      UPDATE Testimonials
      SET quote=@quote, company=@company, author=@author, isActive=@isActive
      WHERE id=@id
    `)

  res.json({ success: true })
})

// DELETE
router.delete("/:id", async (req, res) => {
  const pool = await poolPromise
  await pool.request()
    .input("id", req.params.id)
    .query("DELETE FROM Testimonials WHERE id=@id")

  res.json({ success: true })
})

export default router
