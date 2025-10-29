const Usuario = require('./ModelUsuarios');

const authController = {
    cadastrar: (req, res) => {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ msg: 'Preencha todos os campos.' });
        }

        Usuario.buscarPorEmail(email, (err, results) => {
            if (err) {
                console.error('Erro na busca por email:', err);
                return res.status(500).json({ msg: 'Erro no servidor.' });
            }

            if (results.length > 0) {
                return res.status(400).json({ msg: 'Email já cadastrado.' });
            }

            // Salva a senha em texto puro
            Usuario.criar(nome, email, senha, (err, results) => {
                if (err) {
                    console.error('Erro ao cadastrar usuário:', err);
                    return res.status(500).json({ msg: 'Erro ao cadastrar usuário.' });
                }

                res.json({ msg: 'Usuário cadastrado com sucesso!' });
            });
        });
    },
    entrar: (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ msg: 'Preencha todos os campos.' });
        }

        Usuario.buscarPorEmail(email, (err, results) => {
            if (err) {
                console.error('Erro no login:', err);
                return res.status(500).json({ msg: 'Erro no servidor.' });
            }

            if (results.length === 0) {
                return res.status(400).json({ msg: 'Email não cadastrado.' });
            }

            const usuario = results[0];

            // Comparação de senha sem criptografia
            if (senha !== usuario.senha) {
                return res.status(400).json({ msg: 'Senha incorreta.' });
            }

            res.json({ msg: 'Login realizado com sucesso!', user: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
        });
    }
};

module.exports = authController;
