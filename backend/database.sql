
--Crear la base de datos
CREATE DATABASE likeme;

--Conectarse a la base de datos
\c likeme

--Crear la tabla posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT
);