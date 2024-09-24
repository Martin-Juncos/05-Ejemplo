## Proyecto: Gestión de Usuarios con Node.js y Express

Este proyecto es una aplicación backend construida con **Node.js** y **Express**, que permite gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Utiliza un almacenamiento de datos simulado en un archivo de base de datos local.

### Funcionalidad

1. **Crear usuario**: Permite añadir un nuevo usuario con un `name`, `username`, y `email`.
2. **Leer usuarios**:
   - Obtener todos los usuarios.
   - Obtener un usuario por `name`.
   - Obtener un usuario por `id`.
3. **Actualizar usuario**: Actualizar la información de un usuario existente (nombre, nombre de usuario, y correo electrónico).
4. **Eliminar usuario**: Eliminar un usuario existente por `id`.

### Puesta en funcionamiento

#### Requisitos previos

- Node.js v12 o superior instalado.
- npm (incluido con la instalación de Node.js).

#### Instrucciones de instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/nombre_repositorio.git
   ```

2. Navegar al directorio del proyecto:

   ```bash
   cd nombre_repositorio
   ```

3. Instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Iniciar el servidor:

   ```bash
   npm start
   ```

   El servidor se ejecutará en `http://localhost:3000`.

### Endpoints disponibles

- **GET** `/users`: Obtener todos los usuarios.
- **GET** `/users/:id`: Obtener un usuario por `id`.
- **POST** `/users`: Crear un nuevo usuario (requiere `name`, `username`, `email` en el cuerpo).
- **PUT** `/users/:id`: Actualizar un usuario existente.
- **DELETE** `/users/:id`: Eliminar un usuario por `id`.

### Pruebas

Puedes probar la funcionalidad de la API utilizando herramientas como **Postman** o **cURL**.

#### Crear un usuario

- **Método**: `POST`
- **URL**: `http://localhost:3000/users`
- **Body** (JSON):
  ```json
  {
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com"
  }
  ```

#### Obtener todos los usuarios

- **Método**: `GET`
- **URL**: `http://localhost:3000/users`

#### Obtener un usuario por ID

- **Método**: `GET`
- **URL**: `http://localhost:3000/users/1`

#### Actualizar un usuario

- **Método**: `PUT`
- **URL**: `http://localhost:3000/users/1`
- **Body** (JSON):
  ```json
  {
    "name": "Jane Doe",
    "username": "janedoe",
    "email": "jane@example.com"
  }
  ```

#### Eliminar un usuario

- **Método**: `DELETE`
- **URL**: `http://localhost:3000/users/1`

Este archivo README.md explica de forma clara la funcionalidad, instalación, uso y pruebas del proyecto.

Hecho con 💖 y mucho ☕ by **ProfMartin**
