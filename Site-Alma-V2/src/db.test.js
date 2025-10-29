// Importa variáveis de ambiente
import 'dotenv/config'
// Importa driver do MySQL
import mysql from 'mysql2/promise'
// Desestrutura variáveis do .env
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env
// Função que tenta conectar ao MySQL e exibe resultado
const testConnection = async () => {
try {
// Cria uma conexão temporária
const conn = await mysql.createConnection({
host: MYSQL_HOST,
user: MYSQL_USER,
password: MYSQL_PASSWORD,
database: MYSQL_DB
})
// Executa query simples para confirmar resposta
const [rows] = await conn.query('SELECT NOW() AS agora')
console.log('✅ Conectado ao MySQL • Data/Hora:', rows[0].agora)
// Encerra a conexão
await conn.end()
} catch (err) {
console.error('❌ Erro ao conectar no MySQL:', err.message)
process.exit(1)
}
}
// Executa a função
testConnection()
