const Usuario = require("../models/Usuario");

exports.criarUsuario = async (req, res) => {

    try {
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao criar usuário');
    }
}

exports.obterUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao obter usuarios');
    }
}

exports.atualizarUsuario = async (req, res) => {

    try {

        const { nome, email, senha } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'Não existe o usuário' })
        }

        usuario.nome = nome;
        usuario.email = email;
        usuario.senha = senha;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true });
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao editar o usuário');
    }
}

exports.obterUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'Não existe o usuário' })
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao obter o usuário');
    }
}

exports.excluirUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'Não existe o usuário' })
        }

        await Usuario.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Usuário excluído com êxito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao excluir o usuário');
    }
}