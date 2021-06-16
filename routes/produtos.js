const express = require('express');
const router = express.Router();

// retorna todos os produtos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os produtos'
  });
});

// insere um produto
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Insere um produto'
  });
});

//retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  if(id === 'especial'){
    res.status(200).send({
      mensagem: 'Você descobriu o id especial',
      id: id
    });
  }else{
    res.status(200).send({
      mensagem: 'Você passou um ID',
      id: id
    });
  }
});

// altera um produto
router.patch('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto alterado'
  });
});

//exclui um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto excluído'
  });
});

module.exports = router;