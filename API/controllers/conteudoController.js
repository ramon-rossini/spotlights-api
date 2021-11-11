const Conteudo = require("../models/Conteudo");

exports.criarConteudo = async (req, res) => {

    try {
        let conteudo;

        // CRIAR NOVO CONTEUDO
        conteudo = new Conteudo(req.body);

        await conteudo.save();
        res.send(conteudo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao criar');
    }

}

exports.obterConteudos = async (req, res) => {

    try {

        const conteudos = await Conteudo.find();
        res.json(conteudos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao obter produtos');
    }

}

exports.atualizarConteudo = async (req, res) => {

    try {

        const { titulo, categoria, idioma, imdb } = req.body;
        let conteudo = await Conteudo.findById(req.params.id);

        if (!conteudo) {
            res.status(404).json({ msg: 'Não existe o conteúdo' })
        }

        conteudo.titulo = titulo;
        conteudo.categoria = categoria;
        conteudo.idioma = idioma;
        conteudo.imdb = imdb;

        conteudo = await Conteudo.findOneAndUpdate({ _id: req.params.id }, conteudo, { new: true });
        res.json(conteudo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao editar o produto');
    }

}

exports.obterConteudo = async (req, res) => {

    try {

        let conteudo = await Conteudo.findById(req.params.id);

        if (!conteudo) {
            res.status(404).json({ msg: 'Não existe o conteúdo' })
        }

        res.json(conteudo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao obter o produto');
    }

}

exports.excluirConteudo = async (req, res) => {

    try {

        let conteudo = await Conteudo.findById(req.params.id);

        if (!conteudo) {
            res.status(404).json({ msg: 'Não existe o conteúdo' })
        }

        await Conteudo.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Conteúdo excluído com êxito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao excluir o produto');
    }

}