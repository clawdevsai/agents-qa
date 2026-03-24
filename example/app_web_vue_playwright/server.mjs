import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
const dist = path.join(__dirname, 'dist')

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.use(express.static(dist))

app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) {
    next()
    return
  }
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Demo web (Vue): http://localhost:${PORT}`)
})
