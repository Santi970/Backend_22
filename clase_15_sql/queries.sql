-- Listar base de datos para
SHOW DATABASES;
-- Crear base de datos
CREATE DATABASE ecommerce;

-- Usar base de datos 
USE ecommerce;

--Listar tablas
SHOW TABLES;

--Crear tabal de productosFile
CREATE TABLE productos (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    price  FLOAT,
    description VARCHAR(255),
    stock INT,
    PRIMARY KEY (id),
);

-- Detalle de una tabla
DESCRIBE productos;
