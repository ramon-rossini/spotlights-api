// ROTAS PARA CONTEÚDO
const express = require('express');
const router = express.Router();
const conteudoController = require('../controllers/conteudoController');

// api/conteudos
router.post('/', conteudoController.criarConteudo);
router.get('/', conteudoController.obterConteudos);
router.put('/:id', conteudoController.atualizarConteudo);
router.get('/:id', conteudoController.obterConteudo);
router.delete('/:id', conteudoController.excluirConteudo);

module.exports = router;