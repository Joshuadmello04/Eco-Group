import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { poolPromise } from "../db.js"
import { adminLoginLimiter } from "../middleware/rateLimiter.js"

const router = express.Router()

router.post("/login",adminLoginLimiter, async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: "Missing credentials" })
  }

  const pool = await poolPromise
  const result = await pool.request()
    .input("username", username)
    .query("SELECT * FROM AdminUsers WHERE username=@username")

  const admin = result.recordset[0]
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" })
  }

  const isMatch = await bcrypt.compare(password, admin.passwordHash)
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" })
  }

  const token = jwt.sign(
    { adminId: admin.id, username: admin.username },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  )

  res.json({ token })
})

export default router
