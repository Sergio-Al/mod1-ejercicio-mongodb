const Pedido = require("../models/pedido");

// Controlador para crear un nuevo pedido
exports.crearPedido = async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    const pedidoGuardado = await nuevoPedido.save();

    res.status(201).json({
      success: true,
      data: pedidoGuardado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el pedido",
      error: error.message,
    });
  }
};

// Controlador para obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate("clienteId");
    res.status(200).json({
      success: true,
      data: pedidos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener los pedidos",
      error: error.message,
    });
  }
};

// Controlador para obtener un pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate("clienteId"); // populate para obtener los datos del cliente
    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json({
      success: true,
      data: pedido,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el pedido",
      error: error.message,
    });
  }
};

// Controlador para actualizar un pedido
exports.actualizarPedido = async (req, res) => {
  try {
    const pedidoActualizado = await Pedido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!pedidoActualizado) {
      return res.status(404).json({
        success: false,
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json({
      success: true,
      data: pedidoActualizado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar el pedido",
      error: error.message,
    });
  }
};

// Controlador para eliminar un pedido
exports.eliminarPedido = async (req, res) => {
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) {
      return res.status(404).json({
        success: false,
        message: "Pedido no encontrado",
      });
    }
    res.status(200).json({
      success: true,
      message: "Pedido eliminado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar el pedido",
      error: error.message,
    });
  }
};
