import express from 'express'
const app = express()
app.get('/health', (_, res) => res.json({ ok: true }))
app.listen(3000)
