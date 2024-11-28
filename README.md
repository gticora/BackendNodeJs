# API de Formulario

Esta API permite recibir datos de un formulario y almacenarlos en una base de datos MongoDB. La API está estructurada utilizando una arquitectura de capas para asegurar una buena organización y escalabilidad.

## Estructura del Proyecto

El proyecto está dividido en varias capas para mantener la separación de responsabilidades y facilitar el mantenimiento:

- **`config`**: Contiene la configuración de la base de datos y otros servicios.
- **`controllers`**: Contiene la lógica de negocio para procesar las solicitudes.
- **`models`**: Contiene los esquemas de los datos (Modelos de Mongoose).
- **`routes`**: Define las rutas para los endpoints de la API.
- **`app.js`**: Configuración de la aplicación Express, incluyendo middlewares y rutas.
- **`index.js`**: Archivo principal que arranca el servidor y conecta con la base de datos.


## Instalación

1. **Clona este repositorio**:

   Si aún no has clonado el repositorio, usa el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
2. **Navega al directorio del proyecto**
    Entra en la carpeta donde se encuentra el proyecto: cd backend_api_node
3. **Instala las dependencias**
    npm install
   Esto instalará las siguientes dependencias:
    - express: Framework web para Node.js.
    - cors: Middleware para habilitar CORS.
    - dotenv: Para manejar variables de entorno.
    - mongoose: ODM para MongoDB.
4. Ejecutar el Proyecto : **`npx nodemon index.js`**   o  **`npm start`**
   
## Endpoints

### 1. `POST [/api/personas](http://localhost:3000/api/personas)`

Este endpoint recibe los datos de una persona desde el formulario y los guarda en la base de datos.

#### Parámetros de la solicitud (body)
```json
{
  "nombre": "Gustavo",
  "apellido": "Ticora",
  "edad": 25,
  "correo": "gticora@example.com",
  "direccion": {
    "calle": "Calle Falsa",
    "numero": 123,
    "ciudad": "Ibague",
    "pais": "Colombia"
  },
  "telefono": "+123456789"
}
```
### 2. `GET [/api/personas](http://localhost:3000/api/personas)`

Este endpoint recibe los datos de una persona desde el formulario y los guarda en la base de datos.

#### Retorno informacion
```json
[
    {
        "direccion": {
            "calle": "Calle Falsa",
            "numero": 123,
            "ciudad": "Ciudad",
            "pais": "País"
        },
        "_id": "67478c931b1a1ca0ad606b0f",
        "nombre": "Juan",
        "apellido": "Pérez",
        "edad": 30,
        "correo": "juan.perez@example.com",
        "telefono": "+123456789",
        "createdAt": "2024-11-27T21:18:11.918Z",
        "updatedAt": "2024-11-27T21:18:11.918Z",
        "__v": 0
    }
]
```
