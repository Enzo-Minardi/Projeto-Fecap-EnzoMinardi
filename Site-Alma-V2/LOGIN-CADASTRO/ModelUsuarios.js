const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Enzominardi38',
    database: 'teste',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const Usuario = {
    criar: (nome, email, senha, callback) => {
        const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        db.query(sql, [nome, email, senha], callback);
    },
    buscarPorEmail: (email, callback) => {
        const sql = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(sql, [email], callback);
    }
};

module.exports = Usuario;