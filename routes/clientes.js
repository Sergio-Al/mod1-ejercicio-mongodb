const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rutas para clientes
router.post('/', clientesController.crearCliente); // Crear un nuevo cliente
router.get('/', clientesController.obtenerClientes); // Obtener todos los clientes
router.get('/:id', clientesController.obtenerClientePorId); // Obtener un cliente por ID
router.put('/:id', clientesController.actualizarCliente); // Actualizar un cliente
router.delete('/:id', clientesController.eliminarCliente); // Eliminar un cliente


module.exports = router;
