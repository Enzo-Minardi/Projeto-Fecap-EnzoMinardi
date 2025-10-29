// Importa o framework Express
import express from 'express'
// Cria a aplicação Express
const app = express()
// Middleware que permite receber JSON no corpo das requisições
app.use(express.json())
// Rota de saúde (health check)
// - Método: GET
// - Caminho: /health
// - Resposta: objeto JSON { ok: true, server: 'up' }
// Essa rota serve apenas para garantir que o servidor está rodando
// corretamente

app.get('/health', (_, res) => {
res.json({ ok: true, server: 'up' })
})
// Exporta o app para ser usado no server.js
export default app;