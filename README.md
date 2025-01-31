# Entorno de desarrollo con NestJS y MongoDB

Este proyecto consiste de una API backend desarrollada con **NestJS** y conectada a un servicio **MongoDB**, diseñada para ser ejecutada en un entorno de contenedores utilizando **Docker Compose**.
## Características

- **NestJS** como framework para la API backend.
- **MongoDB** como base de datos NoSQL.
- Uso de **Docker Compose** para levantar los servicios de MongoDB y el contenedor con el backend de NestJS.

## Estructura del Proyecto

El proyecto está dividido en dos servicios principales:

1. **Backend (NestJS)**: La API de backend construida con NestJS que se comunica con la base de datos MongoDB.
2. **MongoDB**: Base de datos NoSQL que almacena los datos de los usuarios.

## Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados en tu máquina.

## Instalación y ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/ivergara1/nestjs-mongo.git
   cd nestjs-mongo
   ```
2. **Construir las imágenes y levantar los contenedores con docker-compose**

   ```bash
   docker-compose up --build
   ```
3. **Acceder a la API**: Una vez que los servicios estén levantados, puedes acceder a la API en http://localhost:3000.

## Consideraciones

- Al ser un proyecto personal para una prueba y con objetivo de ahorrar tiempo, se realizan commits directos en vez de prs. Esto no es lo que se realizaría en un entorno de trabajo real.
- Las variables de entorno se declaran directamente en el docker-compose.yml
- Primera vez trabajando en nest.js
