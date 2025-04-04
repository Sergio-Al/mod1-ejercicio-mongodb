const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Rutas para pedidos
router.post('/', pedidosController.crearPedido); // Crear un nuevo pedido
router.get('/', pedidosController.obtenerPedidos); // Obtener todos los pedidos
router.get('/:id', pedidosController.obtenerPedidoPorId); // Obtener un pedido por ID
router.put('/:id', pedidosController.actualizarPedido); // Actualizar un pedido
router.delete('/:id', pedidosController.eliminarPedido); // Eliminar un pedido

module.exports = router;
