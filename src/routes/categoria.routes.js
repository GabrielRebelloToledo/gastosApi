const express = require('express');

const router = express.Router();

const CategoriaController = require('../controllers/categoria.controller');

//retorna todos os dados
/* router.get('/', CategoriaController.findAll);

//retorna todos os dados referente ao usuario logado
router.get('/userid/:id', CategoriaController.findByIdAll);

//faz a soma de todos os saldos dos alunos para mostrar na tela  
router.get('/saldo', CategoriaController.SumAllInd); */

//retorna todos os dados
 router.get('/', CategoriaController.findAll);
//cria os dados
router.post('/', CategoriaController.create);

/* //ecaminha o email
router.post('/email', CategoriaController.email);

//ecaminha o email de alteração no credito
router.post('/emailCredito', CategoriaController.emailCredito);

//retorna um unico dado por id
router.get('/:id', CategoriaController.findById);

//faz o update dos dados pelo referido id
router.put('/:id', CategoriaController.update);

//deleta o dado pelo referido id
router.delete('/:id', CategoriaController.delete);

//faz o update no credito do aluno
router.put('/updateCreditoAluno/:id', CategoriaController.updateCreditoAluno);
 */


module.exports = router;