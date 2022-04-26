const express = require('express');

const router = express.Router();

const ReceitaController = require('../controllers/receita.controller');

/* //retorna todos os dados
router.get('/', ReceitaController.findAll);

//retorna todos os dados referente ao usuario logado
router.get('/userid/:id', ReceitaController.findByIdAll);

//faz a soma de todos os saldos dos alunos para mostrar na tela  
router.get('/saldo', ReceitaController.SumAllInd);
 */

//cria os dados
router.post('/', ReceitaController.create);
//retorna todos os dados
router.get('/', ReceitaController.findAll);
//faz a soma de todos os saldos dos alunos para mostrar na tela  
router.get('/sum', ReceitaController.SumAllInd);


router.get('/:p1/:p2', ReceitaController.SumAllIndrt);

router.get('/poup/:p1/:p2', ReceitaController.SumAllIndrtPopanca);
/* 

//retorna um unico dado por id
router.get('/:id', ReceitaController.findById);

//faz o update dos dados pelo referido id
router.put('/:id', ReceitaController.update);

//deleta o dado pelo referido id
router.delete('/:id', ReceitaController.delete);

//faz o update no credito do aluno
router.put('/updateCreditoAluno/:id', ReceitaController.updateCreditoAluno); */



module.exports = router;