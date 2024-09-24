const {
  createUserController,
  getAllUsersController,
  getOneUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userControllers");

const Joi = require("joi");

// Esquema de validación para los usuarios
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

// Handler para traer un user por name o todos los users
const getUsersHandler = (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      // Llamar al controlador para obtener un usuario por nombre
      const oneUser = getOneUserController(name);

      // Verificar si el usuario existe
      if (!oneUser) {
        return res
          .status(404)
          .send(`Usuario con nombre ${name} no encontrado.`);
      }

      res.send(oneUser); // Enviar el usuario encontrado
    } else {
      // Llamar al controlador para obtener todos los usuarios
      const allUsers = getAllUsersController();

      // Verificar si hay usuarios
      if (!allUsers || allUsers.length === 0) {
        return res.status(404).send("No hay usuarios disponibles.");
      }

      res.send(allUsers); // Enviar todos los usuarios
    }
  } catch (err) {
    // Manejar cualquier error inesperado
    console.error(err.message);
    res
      .status(500)
      .send("Ocurrió un error inesperado. Intente nuevamente más tarde.");
  }
};

// Handler para traer un user por id
const getUserHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // Llamar al controlador para obtener un usuario por ID
    const userById = await getUserByIdController(id);

    // Verificar si el usuario fue encontrado
    if (!userById) {
      return res.status(404).send(`Usuario con ID ${id} no encontrado.`);
    }

    // Enviar el usuario encontrado
    res.status(200).json(userById);
  } catch (err) {
    // Manejar cualquier error inesperado, como problemas con el controlador o la base de datos
    console.error(err.message);
    res.status(500).send("Ocurrió un error inesperado.");
  }
};

// Handler para crear un nuevo usuario
const createUserHandler = (req, res) => {
  try {
    // Validar los datos recibidos en la solicitud
    const { error } = userSchema.validate(req.body);
    if (error) {
      // Si hay un error de validación, devolver una respuesta con el código de estado 400
      return res.status(400).send(error.details[0].message);
    }

    // Si la validación es exitosa, pasamos los datos al controlador
    const { name, username, email } = req.body;
    const response = createUserController(name, username, email);

    // Responder con el nuevo usuario creado
    res.status(201).json(response);
  } catch (err) {
    // Capturar cualquier otro error inesperado y devolver un mensaje de error genérico
    console.error(err.message);
    res
      .status(500)
      .send("Ocurrió un error inesperado. Intente nuevamente más tarde.");
  }
};

// Handler para actualizar un user
const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  const response = updateUserController(id, name, username, email);
  res.status(201).send(response);
};

// Handler para eliminar un user
const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  const response = deleteUserController(id);
  res.status(200).send(response);
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
