// ROTAS PARA CONTEÚDO
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// api/usuarios
router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.obterUsuarios);
router.put('/:id', usuarioController.atualizarUsuario);
router.get('/:id', usuarioController.obterUsuario);
router.delete('/:id', usuarioController.excluirUsuario);

module.exports = router;