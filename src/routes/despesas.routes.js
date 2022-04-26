const express = require('express');

const router = express.Router();

const DespesaController = require('../controllers/despesa.controller');

/* //retorna todos os dados
router.get('/', ReceitaController.findAll);

//retorna todos os dados referente ao usuario logado
router.get('/userid/:id', ReceitaController.findByIdAll);


 */
//cria os dados
router.post('/', DespesaController.create);
//retorna todos os dados
router.get('/', DespesaController.findAll);

//faz a soma de todos os saldos dos alunos para mostrar na tela  
router.get('/sum', DespesaController.SumAllInd);
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