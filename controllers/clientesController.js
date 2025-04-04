const Cliente = require("../models/cliente");

// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    const clienteGuardado = await nuevoCliente.save();

    res.status(201).json({
      success: true,
      data: clienteGuardado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el cliente",
      error: error.message,
    });
  }
};

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json({
      success: true,
      data: clientes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener los clientes",
      error: error.message,
    });
  }
};

// Controlador para obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
      });
    }
    res.status(200).json({
      success: true,
      data: cliente,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el cliente",
      error: error.message,
    });
  }
};

// Controlador para actualizar un cliente
exports.actualizarCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Devuelve el cliente actualizado
        runValidators: true, // Aplica las validaciones del esquema
      }
    );

    if (!clienteActualizado) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      data: clienteActualizado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar el cliente",
      error: error.message,
    });
  }
};

// Controlador para eliminar un cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cliente eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar el cliente",
      error: error.message,
    });
  }
};
