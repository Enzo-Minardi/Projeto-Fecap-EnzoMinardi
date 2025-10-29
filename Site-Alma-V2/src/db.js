// src/db.js
import mysql from 'mysql2/promise'
import 'dotenv/config'

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env

// Pool de conexões (mais eficiente que criar conexão toda hora)
export const pool = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Função opcional para testar a conexão
export const testConnection = async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS agora')
    console.log('✅ Conectado ao MySQL • Data/Hora:', rows[0].agora)
  } catch (err) {
    console.error('❌ Erro ao conectar no MySQL:', err.message)
    process.exit(1)
  }
}

// Executa o teste na inicialização
testConnection()