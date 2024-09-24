const users = require("../db/dataBase");

// Controlador para crear un nuevo usuario
const createUserController = (name, username, email) => {
  const id = users.length + 1; // Generar un ID único simple (incremental)
  const newUser = { id, name, username, email };
  if ((!name, !username, !email)) throw new Error();
  users.push(newUser);
  return newUser;
};

// Controlador para obtener todos los usuarios
const getAllUsersController = () => {
  if (!users.length) throw new Error();
  return users; // Simplemente devolver todos los usuarios
};

// Controlador para obtener un usuario por nombre
const getOneUserController = (name) => {
  const oneUser = users.filter((user) => user.name === name);
  if (!oneUser.length) throw new Error();
  return oneUser;
};

// Controlador para obtener un usuario por ID
const getUserByIdController = (id) => {
  const userById = users.find((usuario) => usuario.id === Number(id));
  if (!userById) throw new Error();
  return userById;
};

const updateUserController = (id, name, username, email) => {
  const newUserData = { name, username, email };
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    Object.assign(user, newUserData);
  }
  return user;
};

const deleteUserController = (id) => {
  const index = users.findIndex((user) => user.id === Number(id));
  let deleteUser = null;
  if (index !== -1) {
    [deleteUser] = users.splice(index, 1);
  }
  return deleteUser;
};

module.exports = {
  createUserController,
  getAllUsersController,
  getOneUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
