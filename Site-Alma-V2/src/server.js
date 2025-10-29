// Carrega variáveis de ambiente do .env (como PORT)
import 'dotenv/config'
// Importa o app configurado em app.js
import app from './app.js'
// Lê a porta definida no .env, ou usa 3000 como padrão
const port = process.env.PORT || 3000
// Inicia o servidor e faz com que ele "escute" requisições HTTP nessa
// porta
// Quando o servidor sobe, exibe uma mensagem no console
app.listen(port, () => {
console.log(`✅ Servidor ON em http://localhost:${port}`)
})
