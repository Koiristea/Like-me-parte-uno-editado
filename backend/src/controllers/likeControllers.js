import { Pool } from "pg"

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const getPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY id ASC")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al obtener los posts" })
  }
}

const createPost = async (req, res) => {
  const { titulo, descripcion } = req.body
  const img = req.body.img || req.body.url
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
      [titulo, img, descripcion]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al crear el post" })
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id])
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" })
    }
    await pool.query("DELETE FROM posts WHERE id = $1", [id])
    res.status(200).json({ message: "Post eliminado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar el post" })
  }
}

const likePost = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id])
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" })
    }
    await pool.query("UPDATE posts SET likes = likes + 1 WHERE id = $1", [id])
    res.status(200).json({ message: "Like agregado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al dar like" })
  }
}

export { getPosts, createPost, deletePost, likePost }
