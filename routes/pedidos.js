const express = require('express');
const router = express.Router();

// retorna todos os pedidos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'retorna todos os pedidos'
  });
});

// insere um pedido
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Pedido foi criado'
  });
});

//retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;
    res.status(200).send({
      mensagem: 'Detalhes do pedido',
      id: id
    });
});

//exclui um pedido
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Pedido excluído'
  });
});

module.exports = router;