# Proyecto Node con Sequelize y PostgreSQL en Docker

Ejercicio para la maestria.Este proyecto utiliza Node.js junto con MongoDB y mongoose para la gestión de datos. La aplicación está diseñada para ser ejecutada en un entorno de desarrollo local utilizando Docker y Docker Compose.

## Requisitos Previos

- Node.js (v12 o superior)
- npm o yarn
- Docker y Docker Compose

## Instalación

1. **Clonar el repositorio**

  Abre una terminal y clona el repositorio:
  ```
  git clone mi repo
  cd mongoose-project
  ```

2. **Instalar dependencias de Node.js**

  Instala las dependencias con npm:
  ```
  npm install
  ```
  O usando yarn:
  ```
  yarn install
  ```

3. **Configurar la base de datos en Docker**

  Crea un archivo `docker-compose.yml` en la raíz del proyecto con el siguiente contenido:

  ```yaml
  version: '3'
  services:
    mongo:
      image: mongo:5.0.3
      restart: always
      ports:
        - "27017:27017"
      container_name: tienda-mongo
      volumes:
        - ./mongo:/data/db
  ```

4. **Iniciar el contenedor Docker**

  Dentro del directorio del proyecto, ejecuta:
  ```
  docker-compose up -d
  ```

5. Generar un archivo  `.env` con tus variables de entorno
  ```bash
  cp .env.example .env
  ```

## Uso

- Para iniciar el servidor, ejecuta:
  ```
  npm start
  ```
  o
  ```
  yarn start
  ```
  
- Asegúrate de que el contenedor de Docker esté corriendo para que la conexión a la base de datos funcione correctamente.

## Despliegue

Para detener y remover los contenedores, ejecuta:
```
docker-compose down
```
