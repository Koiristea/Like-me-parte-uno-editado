import "dotenv/config"
import express from "express"
import cors from "cors"
import {
  getPosts,
  createPost,
  deletePost,
  likePost,
} from "./src/controllers/likeControllers.js"

const app = express()
app.use(cors())
app.use(express.json())

// Rutas usando los controladores
app.get("/posts", getPosts)
app.post("/posts", createPost)
app.delete("/posts/:id", deletePost)
app.put("/posts/like/:id", likePost)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(
    `[${new Date().toLocaleString()}] Server running on 🌈 http://localhost:${PORT}/posts`
  )
})
